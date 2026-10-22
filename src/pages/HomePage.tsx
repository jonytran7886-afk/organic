import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, ARTICLES } from '../data';
import { ProductCard } from '../components/ProductCard';
import {
  ArrowRightIcon,
  LeafIcon,
  ShieldCheckIcon,
  QRIcon,
  SproutTreeIcon,
  UsersIcon,
  BoxIcon,
  TruckIcon,
  CheckIcon
} from '../components/Icons';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Organic Việt Nam | Sản phẩm thảo dược';
    const description = "Organic Việt Nam – định hướng sản phẩm thảo dược, nguồn nguyên liệu, quy trình chăm sóc và sản xuất, chất lượng và truy xuất nguồn gốc.";
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = ['thao-moc', 'thuc-pham-che-bien', 'trung-ga', 'thit-ga'].map(id => PRODUCTS.find(p => p.id === id)!);
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <main id="main">
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <span className="eyebrow pill">SẢN PHẨM THẢO DƯỢC</span>
            <h1>
              Thảo dược Việt,<br />
              <em>vun đắp giá trị.</em>
            </h1>
            <p>
              Organic Việt Nam định hướng phát triển sản phẩm thảo dược, chú trọng nguồn nguyên liệu, quy trình chăm sóc và sản xuất, chất lượng và truy xuất nguồn gốc.
            </p>
            <div className="hero-buttons">
              <Link className="btn btn-primary" to="/san-pham">
                Khám phá sản phẩm <ArrowRightIcon />
              </Link>
              <Link className="btn btn-outline" to="/ve-chung-toi">
                Về Organic Việt Nam <ArrowRightIcon />
              </Link>
            </div>
            <div className="hero-micro">
              <LeafIcon /> Trang trại & vùng nguyên liệu <span />
              <ShieldCheckIcon /> Kiểm soát chất lượng <span />
              <QRIcon /> Truy xuất minh bạch
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-photo">
              <img
                src="/assets/images/hero-farm.webp"
                alt="Khung cảnh trang trại và núi đồi minh họa"
                loading="eager"
              />
            </div>
            <div className="hero-floating">
              <span className="pulse" />
              <div>
                <b>Nguyên liệu · Sản phẩm · Phân phối · Truy xuất</b>
                <small>Định hướng phát triển từ nguồn thảo dược Việt</small>
              </div>
            </div>
            <span className="photo-credit">Hình ảnh phối cảnh minh họa</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-categories">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">DANH MỤC ĐỊNH HƯỚNG</span>
              <h2>
                Thảo dược và các nhóm<br />
                sản phẩm đang phát triển.
              </h2>
            </div>
            <Link className="text-link" to="/san-pham">
              Tất cả sản phẩm <ArrowRightIcon />
            </Link>
          </div>

          <div className="category-grid">
            <Link className="category-card" to="/san-pham?loai=nongsan">
              <img src="/assets/images/vegetables.webp" alt="Nông sản rau củ" loading="lazy" />
              <span>01 / Thảo dược & nông sản</span>
              <b>Tìm hiểu nguồn nguyên liệu <ArrowRightIcon /></b>
            </Link>
            <Link className="category-card" to="/san-pham?loai=thit">
              <img src="/assets/images/beef.webp" alt="Thịt bò minh họa" loading="lazy" />
              <span>02 / Thịt & thực phẩm</span>
              <b>Phục vụ nhiều phân khúc <ArrowRightIcon /></b>
            </Link>
            <Link className="category-card" to="/san-pham?loai=trung">
              <img src="/assets/images/eggs.webp" alt="Trứng gà minh họa" loading="lazy" />
              <span>03 / Trứng & gia cầm</span>
              <b>Thiết yếu cho gia đình <ArrowRightIcon /></b>
            </Link>
            <Link className="category-card" to="/san-pham?loai=chebien">
              <img src="/assets/images/prepared.webp" alt="Sản phẩm chế biến minh họa" loading="lazy" />
              <span>04 / Giá trị gia tăng</span>
              <b>Đa dạng lựa chọn <ArrowRightIcon /></b>
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section story-section">
        <div className="wrap story-grid">
          <div className="story-images">
            <div className="story-image-big">
              <img src="/assets/images/herbs.webp" alt="Cây thảo dược và nông nghiệp minh họa" loading="lazy" />
            </div>
            <div className="story-image-small">
              <img src="/assets/images/farm-cattle.webp" alt="Trang trại bò minh họa" loading="lazy" />
            </div>
            <div className="story-seal">
              <SproutTreeIcon />
              <strong>Nuôi dưỡng<br />giá trị Việt</strong>
            </div>
          </div>

          <div className="story-copy">
            <span className="eyebrow">VỀ ORGANIC VIỆT NAM</span>
            <h2>
              Từ những giá trị của đất,<br />
              đến niềm tin trên bàn ăn.
            </h2>
            <p>
              Organic Việt Nam lựa chọn định vị sản phẩm thảo dược, kết nối vùng nguyên liệu, nghiên cứu sản phẩm, phân phối và dữ liệu nguồn gốc.
            </p>
            <p>
              Chúng tôi hướng tới ghi nhận nguồn nguyên liệu thảo dược, quy trình chăm sóc và sản xuất theo từng lô. Nội dung cho mỗi dòng sản phẩm chỉ được công bố theo hồ sơ đã xác minh.
            </p>

            <div className="statless-grid">
              <div>
                <LeafIcon />
                <b>Nguồn gốc</b>
                <small>Được ghi nhận</small>
              </div>
              <div>
                <ShieldCheckIcon />
                <b>Chất lượng</b>
                <small>Được kiểm soát</small>
              </div>
              <div>
                <UsersIcon />
                <b>Cộng đồng</b>
                <small>Được kết nối</small>
              </div>
            </div>

            <Link className="btn btn-primary" to="/ve-chung-toi">
              Tìm hiểu về chúng tôi <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="section pillars-section">
        <div className="wrap">
          <div className="section-title centered">
            <span className="eyebrow">HỆ SINH THÁI ORGANIC VIỆT NAM</span>
            <h2>Bốn trụ cột – Một chuỗi giá trị.</h2>
            <p>Phát triển từng mắt xích theo năng lực thực tế, kết nối bằng tiêu chuẩn và dữ liệu.</p>
          </div>

          <div className="pillars-grid">
            <Link to="/trang-trai">
              <div className="pillar-icon">
                <SproutTreeIcon />
              </div>
              <b>Trang trại & nguyên liệu</b>
              <span>Vùng nguyên liệu thảo dược, chăm sóc và sản xuất liên kết theo định hướng.</span>
            </Link>
            <Link to="/san-pham">
              <div className="pillar-icon">
                <BoxIcon />
              </div>
              <b>Phát triển sản phẩm</b>
              <span>Nghiên cứu ứng dụng thảo dược, sơ chế, đóng gói và quản lý chất lượng.</span>
            </Link>
            <Link to="/lien-he">
              <div className="pillar-icon">
                <TruckIcon />
              </div>
              <b>Thương mại & phân phối</b>
              <span>B2B, B2C, phân phối, đại lý và đối tác thương mại.</span>
            </Link>
            <Link to="/chat-luong#truy-xuat">
              <div className="pillar-icon">
                <QRIcon />
              </div>
              <b>Dữ liệu & truy xuất</b>
              <span>Dữ liệu chuỗi cung ứng, quản trị và truy xuất nguồn gốc.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">HÀNH TRÌNH SẢN PHẨM</span>
              <h2>Từ nguồn cung đến khách hàng.</h2>
            </div>
            <Link className="btn btn-outline" to="/chat-luong">
              Tìm hiểu kiểm soát chất lượng <ArrowRightIcon />
            </Link>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-img">
                <img src="/assets/images/farm-green.webp" alt="Nguồn cung" loading="lazy" />
              </div>
              <span>01</span>
              <h3>Nguồn cung</h3>
              <p>Ghi nhận nguồn nguyên liệu thảo dược.</p>
            </div>
            <div className="process-step">
              <div className="process-img">
                <img src="/assets/images/quality.webp" alt="Kiểm soát đầu vào" loading="lazy" />
              </div>
              <span>02</span>
              <h3>Kiểm soát đầu vào</h3>
              <p>Đối chiếu hồ sơ nguyên liệu theo lô.</p>
            </div>
            <div className="process-step">
              <div className="process-img">
                <img src="/assets/images/prepared.webp" alt="Sơ chế – đóng gói" loading="lazy" />
              </div>
              <span>03</span>
              <h3>Sơ chế – đóng gói</h3>
              <p>Theo dõi công đoạn.</p>
            </div>
            <div className="process-step">
              <div className="process-img">
                <img src="/assets/images/farm-aerial.webp" alt="Kho vận" loading="lazy" />
              </div>
              <span>04</span>
              <h3>Kho vận</h3>
              <p>Bảo quản phù hợp.</p>
            </div>
            <div className="process-step">
              <div className="process-img">
                <img src="/assets/images/logistics.webp" alt="Phân phối" loading="lazy" />
              </div>
              <span>05</span>
              <h3>Phân phối</h3>
              <p>Điều phối theo nhu cầu.</p>
            </div>
            <div className="process-step">
              <div className="process-img">
                <img src="/assets/images/meals.webp" alt="Khách hàng" loading="lazy" />
              </div>
              <span>06</span>
              <h3>Khách hàng</h3>
              <p>Tiếp nhận phản hồi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">SẢN PHẨM NỔI BẬT</span>
              <h2>Khám phá danh mục của chúng tôi.</h2>
              <p>Ưu tiên nghiên cứu nguyên liệu và sản phẩm từ thảo dược. Các nhóm thịt, trứng, gia cầm giữ mô tả trung tính trong khi chờ hồ sơ nguyên liệu hoặc quy trình liên quan.</p>
            </div>
            <Link className="text-link" to="/san-pham">
              Xem toàn bộ danh mục <ArrowRightIcon />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p className="disclaimer-inline">
            * Hình ảnh minh họa; danh mục đang phát triển, chưa xác nhận hàng hóa đang bán hay việc ứng dụng thảo dược cho từng sản phẩm.
          </p>
        </div>
      </section>

      {/* Quality Feature */}
      <section className="section quality-feature">
        <div className="wrap quality-grid">
          <div className="quality-visual">
            <img src="/assets/images/quality.webp" alt="Nhân viên kiểm tra sản phẩm minh họa" loading="lazy" />
            <span className="image-tag">Hình minh họa</span>
          </div>
          <div>
            <span className="eyebrow">CHẤT LƯỢNG & MINH BẠCH</span>
            <h2>
              Niềm tin bắt đầu<br />
              từ những thông tin<br />
              có thể kiểm chứng.
            </h2>
            <p>
              Chất lượng được định hướng quản lý từ nguồn nguyên liệu thảo dược đến sản xuất, bảo quản và phân phối, dựa trên hồ sơ từng lô và thông tin có thể kiểm chứng.
            </p>
            <ul className="check-list">
              <li><CheckIcon /> Ghi nhận nguồn gốc và lô sản xuất</li>
              <li><CheckIcon /> Kiểm soát công đoạn trọng yếu</li>
              <li><CheckIcon /> Công khai thông tin phù hợp, có bằng chứng</li>
            </ul>
            <Link className="btn btn-primary" to="/chat-luong">
              Xem cách kiểm soát chất lượng <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Farm Feature */}
      <section className="section farm-section">
        <div className="wrap farm-feature">
          <div className="farm-photo">
            <img src="/assets/images/farm-aerial.webp" alt="Phối cảnh minh họa khu trang trại" loading="lazy" />
          </div>
          <div className="farm-text">
            <span className="eyebrow light">TRANG TRẠI KHE XAI · HÀ TĨNH</span>
            <h2>
              Vùng nguyên liệu<br />
              cho định hướng<br />
              sản phẩm thảo dược.
            </h2>
            <p>
              Khe Xai là khu vực được đề cập trong định hướng dự án. Quy mô sử dụng đất, hạ tầng và khả năng khai thác cần được xác minh theo hồ sơ pháp lý.
            </p>
            <Link className="btn btn-light" to="/trang-trai">
              Khám phá định hướng trang trại <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Stories / Knowledge */}
      <section className="section stories-section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">GÓC KIẾN THỨC</span>
              <h2>Tìm hiểu thảo dược, chất lượng và nguồn gốc.</h2>
            </div>
            <Link to="/tin-tuc" className="text-link">
              Đọc thêm <ArrowRightIcon />
            </Link>
          </div>

          <div className="article-grid">
            {featuredArticles.map(a => (
              <Link key={a.id} className="article-card" to={`/bai-viet?id=${a.id}`}>
                <img src={`/assets/images/${a.image}`} alt={a.title} loading="lazy" />
                <span>{a.tag}</span>
                <h3>{a.title}</h3>
                <b>Đọc bài viết <ArrowRightIcon /></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter-section">
        <div className="wrap newsletter-box">
          <div>
            <span className="eyebrow">CÙNG KẾT NỐI</span>
            <h2>
              Bạn quan tâm đến sản phẩm<br />
              hoặc cơ hội hợp tác?
            </h2>
            <p>
              Chia sẻ nhu cầu để cùng tìm hiểu phương án phù hợp. Đây là website giới thiệu, chưa nhận đơn hàng trực tuyến.
            </p>
          </div>
          <Link className="btn btn-primary" to="/lien-he">
            Liên hệ Organic Việt Nam <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  );
};
