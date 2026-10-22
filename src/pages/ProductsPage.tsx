import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { SearchIcon, ShieldCheckIcon } from '../components/Icons';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const qParam = searchParams.get('q') || '';
  const loaiParam = searchParams.get('loai') || 'all';

  const [category, setCategory] = useState<string>(loaiParam);
  const [searchTerm, setSearchTerm] = useState<string>(qParam);

  useEffect(() => {
    document.title = 'Sản phẩm | Organic Việt Nam';
    const description = "Danh mục định hướng sản phẩm thảo dược của Organic Việt Nam. Thông tin thành phần và quy trình từng sản phẩm đang chờ xác minh.";
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const validCategories = ['all', 'trung', 'thit', 'nongsan', 'chebien'];
    const curLoai = searchParams.get('loai') || 'all';
    setCategory(validCategories.includes(curLoai) ? curLoai : 'all');
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const updateFilters = (newCategory: string, newSearch: string) => {
    const params: Record<string, string> = {};
    if (newCategory !== 'all') params.loai = newCategory;
    if (newSearch.trim()) params.q = newSearch.trim();
    setSearchParams(params, { replace: true });
  };

  const handleCategoryClick = (cat: string) => {
    setCategory(cat);
    updateFilters(cat, searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    updateFilters(category, val);
  };

  const handleReset = () => {
    setCategory('all');
    setSearchTerm('');
    setSearchParams({}, { replace: true });
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = category === 'all' || p.category === category;
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !term ||
      [p.name, p.catName, p.intro, p.application].join(' ').toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'trung', label: 'Trứng & gia cầm' },
    { id: 'thit', label: 'Thịt & thực phẩm' },
    { id: 'nongsan', label: 'Thảo dược & nông sản' },
    { id: 'chebien', label: 'Giá trị gia tăng' },
  ];

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Sản phẩm</span>
            <h1>Danh mục sản phẩm</h1>
            <p>
              Organic Việt Nam định vị sản phẩm thảo dược, ưu tiên nghiên cứu nguyên liệu và quy trình ứng dụng phù hợp. Các nhóm thịt, trứng, gia cầm và nông sản khác được giới thiệu trung tính, chưa xác nhận ứng dụng thảo dược. Đây chưa phải gian hàng nhận đặt mua.
            </p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Sản phẩm</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/herbs.webp" alt="Danh mục sản phẩm" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="wrap">
          <div className="catalog-head">
            <div>
              <h2>Khám phá sản phẩm</h2>
              <p>Chọn nhóm sản phẩm hoặc nhập từ khóa để lọc danh mục.</p>
            </div>
            <div className="catalog-search">
              <input
                id="productSearch"
                type="search"
                name="q"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Tìm trứng, gà, thảo dược..."
                aria-label="Tìm kiếm sản phẩm"
              />
              <button type="button" aria-label="Tìm kiếm">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="filter-pills" role="group" aria-label="Lọc theo danh mục">
            {categories.map(c => (
              <button
                key={c.id}
                className={`filter-pill ${category === c.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <p className="catalog-results" id="catalogResults">
            Hiển thị {filteredProducts.length}/{PRODUCTS.length} sản phẩm
          </p>

          {filteredProducts.length > 0 ? (
            <div className="product-grid" id="productGrid">
              {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state" id="emptyResults">
              <h3>Không tìm thấy sản phẩm phù hợp</h3>
              <p>Hãy thử từ khóa khác hoặc chọn tất cả danh mục.</p>
              <button className="btn btn-primary" id="resetFilters" type="button" onClick={handleReset}>
                Hiện tất cả
              </button>
            </div>
          )}

          <div className="notice-card">
            <ShieldCheckIcon />
            <p>
              Hình ảnh minh họa trung tính, đang chờ ảnh sản phẩm thực tế. Thành phần, nguồn nguyên liệu, quy trình ứng dụng thảo dược và trạng thái thương mại của từng sản phẩm cần hồ sơ xác minh trước khi công bố.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
