import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { useSaved } from '../context/SavedContext';
import { ArrowRightIcon } from '../components/Icons';

export const SavedPage: React.FC = () => {
  const { savedIds, clearSaved } = useSaved();

  useEffect(() => {
    document.title = 'Danh sách quan tâm | Organic Việt Nam';
    const description = "Lưu các sản phẩm muốn tìm hiểu trong danh mục định hướng của Organic Việt Nam. Thông tin ứng dụng thảo dược cần được xác minh theo từng sản phẩm.";
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    window.scrollTo(0, 0);
  }, []);

  const savedProducts = savedIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter((p): p is typeof PRODUCTS[0] => Boolean(p));

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Danh sách quan tâm</span>
            <h1>Những sản phẩm bạn đã lưu.</h1>
            <p>
              Ghi nhớ các dòng sản phẩm muốn tìm hiểu và chuẩn bị nội dung liên hệ. Dữ liệu chỉ được lưu trên trình duyệt.
            </p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Danh sách quan tâm</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/herbs.webp" alt="Những sản phẩm bạn đã lưu." loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="catalog-head">
            <div>
              <h2>Danh sách quan tâm</h2>
              <p>Các mục được lưu trên thiết bị của bạn; không phải đơn đặt hàng.</p>
            </div>
            {savedProducts.length > 0 && (
              <button
                type="button"
                className="btn btn-outline"
                id="clearSaved"
                onClick={clearSaved}
              >
                Xóa danh sách
              </button>
            )}
          </div>

          {savedProducts.length > 0 ? (
            <div className="product-grid" id="savedGrid">
              {savedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state" id="savedEmpty">
              <h3>Chưa có sản phẩm nào được lưu</h3>
              <p>Truy cập trang danh mục và nhấn biểu tượng trái tim ở sản phẩm bạn quan tâm.</p>
              <Link className="btn btn-primary" to="/san-pham" style={{ marginTop: '16px' }}>
                Khám phá sản phẩm <ArrowRightIcon />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
