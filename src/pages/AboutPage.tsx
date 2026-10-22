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
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Về chúng tôi</span>
            <h1>
              Nền tảng từ nông nghiệp.<br />
              Tầm nhìn hướng đến tương lai.
            </h1>
            <p>
              Organic Việt Nam định hướng kết nối sản xuất, sản phẩm, thị trường và công nghệ theo một mô hình quản trị chuỗi giá trị thống nhất.
            </p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Về chúng tôi</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/community.webp" alt="Nền tảng từ nông nghiệp" loading="lazy" />
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
            <h2>Thực phẩm minh bạch bắt đầu từ một chuỗi vận hành có trách nhiệm.</h2>
            <p>
              Công ty Cổ phần Tập đoàn Organic Việt Nam được giới thiệu với định hướng phát triển từ trang trại, nông nghiệp và chăn nuôi đến sản phẩm thực phẩm, hệ thống phân phối và công nghệ hỗ trợ.
            </p>
            <p>
              Mục tiêu là tổ chức nguồn cung theo tiêu chuẩn phù hợp, kết nối với đối tác và cung cấp thông tin về hành trình sản phẩm một cách rõ ràng.
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
                Hướng tới hệ sinh thái thực phẩm Việt Nam có nguồn gốc minh bạch, chuỗi cung ứng hiệu quả và khả năng phát triển bền vững.
              </p>
            </div>
            <div className="vision-panel">
              <HeartIcon />
              <h3>Sứ mệnh</h3>
              <p>
                Kết nối người sản xuất, sản phẩm và người tiêu dùng thông qua tiêu chuẩn chất lượng, thương mại và công nghệ.
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
              <b>Organic Farm</b>
              <span>Sản xuất và nguồn cung.</span>
            </Link>
            <Link to="/san-pham">
              <BoxIcon />
              <b>Organic Foods</b>
              <span>Thực phẩm và giá trị gia tăng.</span>
            </Link>
            <Link to="/lien-he">
              <TruckIcon />
              <b>Organic Market</b>
              <span>Thương mại và phân phối.</span>
            </Link>
            <Link to="/chat-luong">
              <QRIcon />
              <b>Organic Digital</b>
              <span>Dữ liệu và truy xuất.</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
