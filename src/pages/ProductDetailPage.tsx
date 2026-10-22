import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { useSaved } from '../context/SavedContext';
import { ArrowRightIcon } from '../components/Icons';

export const ProductDetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  const { isSaved, toggleSaved } = useSaved();
  const saved = isSaved(product.id);

  useEffect(() => {
    document.title = `${product.name} | Organic Việt Nam`;
    const description = `${product.name}: ${product.intro} ${product.verification}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    window.scrollTo(0, 0);
  }, [product]);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main id="main">
      <section className="subhero">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Chi tiết sản phẩm</span>
            <h1>Thông tin sản phẩm</h1>
            <p>Thông tin tham khảo trong định hướng sản phẩm thảo dược của Organic Việt Nam. Thành phần và quy trình của từng dòng chỉ được công bố khi có hồ sơ xác minh.</p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <Link to="/san-pham">Sản phẩm</Link>
              <span>/</span>
              <span>{product.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="wrap" id="productDetail">
          <div className="product-detail-grid">
            <div className="detail-photo">
              <img src={`/assets/images/${product.image}`} alt={`Ảnh minh họa ${product.name}`} />
              <span className="image-tag">Hình sản phẩm minh họa</span>
            </div>

            <div className="detail-info">
              <span className="eyebrow">{product.catName}</span>
              <span className="status-pill">{product.badge}</span>
              <h2>{product.name}</h2>
              <p>{product.intro}</p>
              <p className="disclaimer-inline">{product.verification}</p>

              <h3>Định hướng nguyên liệu & quy trình</h3>
              <ul>
                {product.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="detail-facts">
                <div>
                  <span>ĐỐI TƯỢNG</span>
                  <b>{product.application}</b>
                </div>
                <div>
                  <span>THÔNG TIN THƯƠNG MẠI</span>
                  <b>Đang cập nhật và xác minh</b>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => toggleSaved(product.id, product.name)}
                >
                  {saved ? '♥ Đã lưu quan tâm' : '♡ Lưu quan tâm'}
                </button>
                <Link
                  className="btn btn-outline"
                  to={`/lien-he?chu-de=${encodeURIComponent('Tìm hiểu sản phẩm')}&san-pham=${product.id}`}
                >
                  Trao đổi về sản phẩm <ArrowRightIcon />
                </Link>
              </div>

              <p className="disclaimer-inline">
                Hình ảnh chỉ mang tính minh họa, không xác nhận sản phẩm đang bán, chất lượng hay chứng nhận đã được cấp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-section related-section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">KHÁM PHÁ THÊM</span>
              <h2>Nhóm sản phẩm liên quan</h2>
            </div>
            <Link className="text-link" to="/san-pham">
              Danh mục sản phẩm <ArrowRightIcon />
            </Link>
          </div>

          <div className="product-grid" id="relatedProducts">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
