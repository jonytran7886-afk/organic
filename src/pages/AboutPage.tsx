import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GlobeIcon,
  HeartIcon,
  QRIcon,
  ShieldCheckIcon,
  SproutTreeIcon,
  UsersIcon,
  BoxIcon,
  TruckIcon
} from '../components/Icons';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Về chúng tôi | Organic Việt Nam';
    const description = "Organic Việt Nam phát triển theo định hướng sản phẩm thảo dược, chú trọng nguồn nguyên liệu, chất lượng và truy xuất.";
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
            <span className="eyebrow">Về chúng tôi</span>
            <h1>
              Khởi nguồn từ thảo dược Việt.<br />
              Phát triển bằng sự minh bạch.
            </h1>
            <p>
              Organic Việt Nam định vị sản phẩm thảo dược, kết nối nguồn nguyên liệu, quy trình chăm sóc và sản xuất, chất lượng và truy xuất nguồn gốc.
            </p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Về chúng tôi</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/community-hero.jpg" alt="Hình minh họa gia đình tìm hiểu cây thảo dược tại vùng nguyên liệu" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap story-grid about-story">
          <div className="story-images">
            <div className="story-image-big">
              <img src="/assets/images/farm-green.webp" alt="Không gian nông nghiệp minh họa" loading="lazy" />
            </div>
            <div className="story-image-small">
              <img src="/assets/images/vegetables.webp" alt="Rau củ nông sản minh họa" loading="lazy" />
            </div>
          </div>

          <div className="story-copy">
            <span className="eyebrow">CÂU CHUYỆN DOANH NGHIỆP</span>
            <h2>Phát triển sản phẩm thảo dược từ nguồn nguyên liệu có hồ sơ.</h2>
            <p>
              Công ty Cổ phần Tập đoàn Organic Việt Nam giữ nguyên tên pháp nhân và thương hiệu, lựa chọn định hướng phát triển sản phẩm thảo dược từ vùng nguyên liệu đến nghiên cứu, sản xuất và phân phối.
            </p>
            <p>
              Mục tiêu là tìm hiểu nguồn thảo dược phù hợp, ghi nhận quy trình chăm sóc và sản xuất theo lô, cung cấp thông tin đã kiểm chứng. Tên thương hiệu không thay thế bằng chứng về đặc tính hoặc chứng nhận của sản phẩm.
            </p>

            <div className="company-facts">
              <div>
                <span>TÊN DOANH NGHIỆP</span>
                <strong>CÔNG TY CỔ PHẦN TẬP ĐOÀN ORGANIC VIỆT NAM</strong>
              </div>
              <div>
                <span>MÃ SỐ THUẾ</span>
                <strong>3002272477</strong>
              </div>
              <div>
                <span>ĐỊA CHỈ</span>
                <strong>Tổ dân phố Quyền Hành, Phường Sông Trí, Tỉnh Hà Tĩnh, Việt Nam</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="wrap">
          <div className="section-title centered">
            <span className="eyebrow">KIM CHỈ NAM</span>
            <h2>Tầm nhìn, sứ mệnh và giá trị cốt lõi.</h2>
          </div>

          <div className="vision-grid">
            <div className="vision-panel">
              <GlobeIcon />
              <h3>Tầm nhìn</h3>
              <p>
                Hướng tới chuỗi sản phẩm thảo dược Việt Nam với nguồn nguyên liệu minh bạch, quy trình phù hợp và chất lượng có thể kiểm chứng.
              </p>
            </div>
            <div className="vision-panel">
              <HeartIcon />
              <h3>Sứ mệnh</h3>
              <p>
                Kết nối vùng nguyên liệu thảo dược với nghiên cứu sản phẩm và thị trường thông qua quản lý chất lượng và truy xuất nguồn gốc.
              </p>
            </div>
          </div>

          <div className="values-grid">
            <div>
              <QRIcon />
              <b>Minh bạch</b>
              <p>Thông tin rõ ràng, có thể kiểm chứng.</p>
            </div>
            <div>
              <ShieldCheckIcon />
              <b>Chất lượng</b>
              <p>Kiểm soát theo công đoạn và sản phẩm.</p>
            </div>
            <div>
              <SproutTreeIcon />
              <b>Trách nhiệm</b>
              <p>Sử dụng nguồn lực theo hướng hiệu quả.</p>
            </div>
            <div>
              <UsersIcon />
              <b>Hợp tác</b>
              <p>Đồng hành cùng đối tác và cộng đồng.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">BỐN TRỤ CỘT</span>
              <h2>Hệ sinh thái cùng phát triển.</h2>
            </div>
          </div>

          <div className="pillars-grid">
            <Link to="/trang-trai">
              <SproutTreeIcon />
              <b>Trang trại & nguyên liệu</b>
              <span>Vùng nguyên liệu thảo dược và nguồn cung.</span>
            </Link>
            <Link to="/san-pham">
              <BoxIcon />
              <b>Phát triển sản phẩm</b>
              <span>Nghiên cứu sản phẩm và ứng dụng thảo dược.</span>
            </Link>
            <Link to="/lien-he">
              <TruckIcon />
              <b>Thương mại & phân phối</b>
              <span>Thương mại và phân phối.</span>
            </Link>
            <Link to="/chat-luong">
              <QRIcon />
              <b>Dữ liệu & truy xuất</b>
              <span>Dữ liệu và truy xuất.</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
