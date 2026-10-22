import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, SproutTreeIcon, ShieldCheckIcon, LeafIcon } from '../components/Icons';

export const FarmPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Trang trại Khe Xai | Organic Việt Nam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Trang trại</span>
            <h1>Khe Xai – nơi khởi đầu cho định hướng nông nghiệp.</h1>
            <p>Khám phá đề xuất phát triển vùng sản xuất, chăn nuôi và cảnh quan gắn với điều kiện tự nhiên tại Hà Tĩnh.</p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Trang trại</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/farm-aerial.webp" alt="Khe Xai trang trại" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap story-grid">
          <div className="story-images">
            <div className="story-image-big">
              <img src="/assets/images/hero-farm.webp" alt="Hình minh họa trang trại ở vùng núi" loading="lazy" />
            </div>
            <div className="story-image-small">
              <img src="/assets/images/farm-cattle.webp" alt="Hình minh họa chăn nuôi bò" loading="lazy" />
            </div>
          </div>

          <div className="story-copy">
            <span className="eyebrow">KHU VỰC KHE XAI · HÀ TĨNH</span>
            <h2>Phát triển trên cơ sở nguồn lực được xác minh.</h2>
            <p>
              Theo mô tả ban đầu, dự án nghiên cứu khu vực hơn 400 ha; đây <strong>không phải thông tin đã xác minh về quyền sử dụng đất hay diện tích được phép khai thác</strong>.
            </p>
            <p>
              Mô hình ưu tiên khảo sát quỹ đất, quy hoạch, điều kiện môi trường và năng lực sản xuất trước khi quyết định đầu tư hạ tầng.
            </p>

            <ul className="check-list">
              <li><CheckIcon /> Khảo sát địa hình và hiện trạng sử dụng đất</li>
              <li><CheckIcon /> Quy hoạch vùng chăn nuôi, nguyên liệu phù hợp</li>
              <li><CheckIcon /> Xây dựng phương án an toàn sinh học và môi trường</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="wrap">
          <div className="section-title centered">
            <span className="eyebrow">ĐỊNH HƯỚNG VẬN HÀNH</span>
            <h2>Phát triển sản xuất có kiểm soát.</h2>
          </div>

          <div className="feature-cards three">
            <div>
              <SproutTreeIcon />
              <h3>Vùng nguyên liệu</h3>
              <p>Nghiên cứu nhóm cây và nguyên liệu phù hợp điều kiện tự nhiên và sản xuất.</p>
            </div>
            <div>
              <ShieldCheckIcon />
              <h3>Chăn nuôi</h3>
              <p>Quản lý con giống, thức ăn, sức khỏe đàn và hồ sơ theo dõi theo quy định.</p>
            </div>
            <div>
              <LeafIcon />
              <h3>Kinh tế tuần hoàn</h3>
              <p>Quản lý phụ phẩm, tài nguyên nước và chất thải theo yêu cầu môi trường.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">HÌNH ẢNH MINH HỌA</span>
              <h2>Không gian sản xuất & thiên nhiên.</h2>
            </div>
          </div>

          <div className="gallery-grid">
            <div>
              <img src="/assets/images/farm-aerial.webp" alt="Trang trại phối cảnh" loading="lazy" />
            </div>
            <div>
              <img src="/assets/images/farm-cattle.webp" alt="Chăn nuôi bò minh họa" loading="lazy" />
            </div>
            <div>
              <img src="/assets/images/herbs.webp" alt="Vùng thảo mộc minh họa" loading="lazy" />
            </div>
            <div>
              <img src="/assets/images/quality.webp" alt="Kiểm soát chất lượng minh họa" loading="lazy" />
            </div>
          </div>

          <p className="disclaimer-inline">
            Các hình ảnh trong trang là phối cảnh/minh họa, không phải ảnh xác thực của khu đất Khe Xai.
          </p>
        </div>
      </section>
    </main>
  );
};
