import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, SproutTreeIcon, ShieldCheckIcon, LeafIcon } from '../components/Icons';

export const FarmPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Trang trại Khe Xai | Organic Việt Nam';
    const description = "Định hướng khảo sát vùng nguyên liệu thảo dược Khe Xai của Organic Việt Nam. Thông tin dự án cần được xác minh theo hồ sơ.";
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Trang trại</span>
            <h1>Khe Xai – định hướng vùng nguyên liệu thảo dược.</h1>
            <p>Khám phá định hướng khảo sát vùng nguyên liệu thảo dược và quy trình chăm sóc phù hợp với điều kiện tự nhiên tại Hà Tĩnh.</p>
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
              Địa điểm, diện tích, quyền sử dụng đất và phạm vi khai thác của vùng nguyên liệu dự kiến cần được đối chiếu hồ sơ trước khi công bố.
            </p>
            <p>
              Mô hình ưu tiên khảo sát quỹ đất, quy hoạch, điều kiện môi trường và năng lực sản xuất trước khi quyết định đầu tư hạ tầng.
            </p>

            <ul className="check-list">
              <li><CheckIcon /> Khảo sát địa hình và hiện trạng sử dụng đất</li>
              <li><CheckIcon /> Khảo sát khả năng phát triển vùng nguyên liệu thảo dược phù hợp</li>
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
              <p>Khảo sát loại thảo dược, điều kiện vùng trồng, nguồn giống và cách ghi nhận chăm sóc, thu hoạch theo lô.</p>
            </div>
            <div>
              <ShieldCheckIcon />
              <h3>Chăn nuôi</h3>
              <p>Định hướng quản lý con giống, thức ăn và hồ sơ theo dõi. Chỉ giới thiệu ứng dụng thảo dược khi có tài liệu về nguyên liệu hoặc quy trình tương ứng.</p>
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
              <img src="/assets/images/herbs.webp" alt="Vùng thảo dược minh họa" loading="lazy" />
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
