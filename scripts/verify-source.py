"""Kiểm tra source tĩnh: định vị, liên kết, tài nguyên và dữ liệu dự phòng.
Chạy từ thư mục gốc: python3 scripts/verify-source.py
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, parse_qs, unquote
import json
import re

ROOT = Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / 'assets/data.js').read_text().removeprefix('window.OV_DATA = ').removesuffix(';\n'))
PRODUCTS = {p['id']: p for p in DATA['products']}
ARTICLES = {a['id']: a for a in DATA['articles']}

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.refs, self.ids, self.description, self.cards = [], set(), [], []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        for attr in ('href', 'src', 'action'):
            if attrs.get(attr):
                self.refs.append(attrs[attr])
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description.append(attrs.get('content', ''))
        if tag == 'button' and 'data-save' in attrs:
            self.cards.append(attrs['data-save'])

pages = {p.name: Page(p.read_text()) for p in ROOT.glob('*.html')}
ref_count = 0
for name, page in pages.items():
    text = (ROOT / name).read_text()
    assert len(page.description) == 1 and page.description[0], (name, 'metadata')
    assert '<strong>ORGANIC VIỆT NAM</strong>' in text, (name, 'brand')
    assert 'SẢN PHẨM THẢO DƯỢC' in text, (name, 'positioning')
    assert not re.search(r'hữu cơ|organic(?! việt nam)', text, re.I), (name, 'old positioning')
    assert not re.search(r'\{btn\(', text), (name, 'unrendered template')
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        file = unquote(url.path) or name
        assert (ROOT / file).is_file(), (name, 'missing file', ref)
        if url.fragment and file in pages:
            assert unquote(url.fragment) in pages[file].ids, (name, 'missing anchor', ref)
        query = parse_qs(url.query)
        if file == 'chi-tiet-san-pham.html' and 'id' in query:
            assert query['id'][0] in PRODUCTS, (name, 'product ID', ref)
        if file == 'bai-viet.html' and 'id' in query:
            assert query['id'][0] in ARTICLES, (name, 'article ID', ref)
        ref_count += 1
    if name in ('index.html', 'san-pham.html'):
        for id in page.cards:
            product = PRODUCTS[id]
            assert product['name'].replace('&', '&amp;') in text, (name, id, 'static product name')
            assert product['catName'].replace('&', '&amp;') in text, (name, id, 'static category')
            assert product['image'] in text, (name, id, 'static image')

for file in ('assets/app.js', 'assets/data.js'):
    assert not re.search(r'hữu cơ|organic(?! việt nam)', (ROOT / file).read_text(), re.I), file
for product in DATA['products']:
    assert (ROOT / 'assets/images' / product['image']).is_file(), product['id']
    assert product['verification'], product['id']
    if product['category'] in ('trung', 'thit'):
        assert 'thảo dược' not in product['name'].lower(), product['id']
        assert 'Chưa có hồ sơ xác minh' in product['verification'], product['id']
for article in DATA['articles']:
    assert (ROOT / 'assets/images' / article['image']).is_file(), article['id']
for ref in re.findall(r'url\([\'\"]?([^\)\'\"]+)', (ROOT / 'assets/styles.css').read_text()):
    assert (ROOT / 'assets' / ref).is_file(), ('CSS asset', ref)
print(f'PASS: {len(pages)} pages, {len(PRODUCTS)} products, {len(ARTICLES)} articles, {ref_count} internal references; positioning, metadata, fallback data and assets checked.')
