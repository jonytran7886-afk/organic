import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SproutTreeIcon,
  ShieldCheckIcon,
  BoxIcon,
  UsersIcon,
  CheckIcon,
  BookIcon,
  QRIcon
} from '../components/Icons';

export const QualityPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Chất lượng & truy xuất nguồn gốc | Organic Việt Nam';
    const description = "Định hướng quản lý nguồn thảo dược, quy trình chăm sóc và sản xuất, hồ sơ chất lượng và truy xuất theo lô của Organic Việt Nam.";
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Chất lượng & truy xuất</span>
            <h1>Minh bạch được tạo nên bởi dữ liệu có thể kiểm chứng.</h1>
            <p>Tìm hiểu định hướng kiểm soát nguồn thảo dược, quy trình chăm sóc và sản xuất, đóng gói, bảo quản và truy xuất theo từng lô.</p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Chất lượng & truy xuất</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/quality.webp" alt="Minh bạch được tạo nên bởi dữ liệu có thể kiểm chứng." loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-title centered">
            <span className="eyebrow">BỐN LỚP KIỂM SOÁT</span>
            <h2>Chất lượng trong từng công đoạn.</h2>
          </div>

          <div className="feature-cards four">
            <div>
              <SproutTreeIcon />
              <span className="stepnum">01</span>
              <h3>Nguồn gốc đầu vào</h3>
              <p>Ghi nhận loại thảo dược, đơn vị cung ứng, vùng nguyên liệu và hồ sơ lô đầu vào.</p>
            </div>
            <div>
              <ShieldCheckIcon />
              <span className="stepnum">02</span>
              <h3>Quy trình theo lô</h3>
              <p>Theo dõi chăm sóc, thu hoạch, sản xuất và kiểm tra chất lượng theo hồ sơ từng lô.</p>
            </div>
            <div>
              <BoxIcon />
              <span className="stepnum">03</span>
              <h3>Sơ chế, bảo quản</h3>
              <p>Kiểm soát vệ sinh, bao bì và điều kiện bảo quản.</p>
            </div>
            <div>
              <UsersIcon />
              <span className="stepnum">04</span>
              <h3>Phản hồi & xử lý</h3>
              <p>Tiếp nhận khiếu nại, xác định nguyên nhân, hỗ trợ thu hồi nếu cần.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="truy-xuat">
        <div className="wrap story-grid">
          <div className="story-images">
            <div className="story-image-big">
              <img src="/assets/images/lab.webp" alt="Kiểm nghiệm nông sản minh họa" loading="lazy" />
            </div>
            <div className="story-image-small">
              <img src="/assets/images/eggs.webp" alt="Trứng gà minh họa" loading="lazy" />
            </div>
          </div>

          <div className="story-copy">
            <span className="eyebrow">DỮ LIỆU & TRUY XUẤT</span>
            <h2>Truy xuất nguồn gốc là một chuỗi dữ liệu, không chỉ là mã QR.</h2>
            <p>
              Hệ thống dự kiến kết nối thông tin sản phẩm, nguồn cung, lô sản xuất, kiểm nghiệm và các sự kiện phân phối để phục vụ quản lý và tra cứu phù hợp.
            </p>
            <ul className="check-list">
              <li><CheckIcon /> Quét mã để tra cứu dữ liệu lô đã công bố</li>
              <li><CheckIcon /> Kiểm tra thông tin nguồn gốc và công đoạn</li>
              <li><CheckIcon /> Tiếp nhận phản hồi của người tiêu dùng</li>
            </ul>
            <p className="disclaimer-inline">
              Giao diện và quy trình này là thiết kế dự kiến, chưa phải xác nhận hệ thống đã vận hành.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="chung-nhan">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">HỒ SƠ VÀ TIÊU CHUẨN</span>
              <h2>Công bố có bằng chứng, đúng phạm vi.</h2>
            </div>
          </div>

          <div className="notice-card">
            <ShieldCheckIcon />
            <div>
              <h3>Tình trạng chứng nhận đang chờ cung cấp hồ sơ</h3>
              <p>
                Định vị sản phẩm thảo dược không phải là xác nhận chứng nhận chất lượng. Chỉ công bố chứng nhận khi có giấy tờ hợp lệ, còn hiệu lực, đúng cơ sở và nhóm sản phẩm. Việc ứng dụng thảo dược cần được đối chiếu theo nguyên liệu hoặc quy trình của từng dòng sản phẩm.
              </p>
            </div>
          </div>

          <div className="evidence-grid">
            <div>
              <BookIcon />
              <b>Hồ sơ sản xuất</b>
              <p>Nhật ký chăm sóc, nguyên liệu thảo dược sử dụng, mã lô và đơn vị cung ứng; công bố sau xác minh.</p>
            </div>
            <div>
              <ShieldCheckIcon />
              <b>Kiểm tra chất lượng</b>
              <p>Hồ sơ kiểm tra và thử nghiệm khi có.</p>
            </div>
            <div>
              <QRIcon />
              <b>Thông tin truy xuất</b>
              <p>Thông tin được phép cung cấp cho người tiêu dùng.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
