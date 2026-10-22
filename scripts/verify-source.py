"""Kiểm tra định vị và tài nguyên của website React. Chạy từ repo root."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parent.parent
source = (ROOT / 'src/data.ts').read_text()
products = json.loads(source.split('export const PRODUCTS: Product[] = ')[1].split(';\n\nexport const ARTICLES: Article[] = ')[0])
articles = json.loads(source.split('export const ARTICLES: Article[] = ')[1].removesuffix(';\n'))
assert len(products) == 8 and len(articles) == 4
assert {p['id'] for p in products} == {'trung-ga', 'thit-ga', 'thit-heo', 'thit-bo', 'thao-moc', 'rau-cu', 'thuc-pham-che-bien', 'combo-gia-dinh'}
assert {a['id'] for a in articles} == {'hanh-trinh-thuc-pham', 'truy-xuat-nguon-goc', 'nong-nghiep-tuan-hoan', 'chon-thuc-pham'}
files = [ROOT / 'index.html', ROOT / 'metadata.json', *ROOT.glob('src/**/*.tsx'), *ROOT.glob('src/**/*.ts')]
refs = 0
for file in files:
    text = file.read_text()
    assert not re.search(r'hữu cơ|organic(?! việt nam)', text, re.I), (file, 'old positioning')
    assert not re.search(r'^(<<<<<<< |=======|>>>>>>> )', text, re.M), (file, 'merge conflict')
    for image in re.findall(r'/assets/images/([\w.-]+)', text):
        assert (ROOT / 'public/assets/images' / image).is_file(), (file, image)
        refs += 1
for product in products:
    assert (ROOT / 'public/assets/images' / product['image']).is_file(), product['id']
    assert product['verification'], product['id']
    if product['category'] in ('trung', 'thit'):
        assert 'thảo dược' not in product['name'].lower(), product['id']
        assert 'Chưa có hồ sơ xác minh' in product['verification'], product['id']
for article in articles:
    assert (ROOT / 'public/assets/images' / article['image']).is_file(), article['id']
for page in (ROOT / 'src/pages').glob('*.tsx'):
    text = page.read_text()
    assert 'meta[name="description"]' in text and 'meta[property="og:description"]' in text, page
    assert 'document.title' in text, page
app = (ROOT / 'src/App.tsx').read_text()
for route in ['san-pham','chi-tiet-san-pham','ve-chung-toi','trang-trai','chat-luong','tin-tuc','bai-viet','quan-tam','lien-he']:
    assert f'path="/{route}"' in app and f'path="/{route}.html"' in app, route
quality = (ROOT / 'src/pages/QualityPage.tsx').read_text()
assert 'id="truy-xuat"' in quality and 'id="chung-nhan"' in quality
assert 'SẢN PHẨM THẢO DƯỢC' in (ROOT / 'src/components/Header.tsx').read_text()
assert 'ORGANIC VIỆT NAM' in (ROOT / 'src/components/Header.tsx').read_text()
for folder in ['assets/images','public/assets/images']:
    for image in ['hero-products.webp','products-close.webp','store.webp']:
        assert not (ROOT / folder / image).exists(), (folder, image)
for ref in re.findall(r'url\([\'\"]?([^\)\'\"]+)', (ROOT / 'src/styles.css').read_text()):
    assert (ROOT / 'public' / ref.lstrip('/')).is_file(), ('CSS asset', ref)
print(f'PASS: 10 React pages, 8 products, 4 articles, {refs} image references, routes/HTML aliases, anchors, metadata and positioning.')
