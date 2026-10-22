import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data';
import { ArrowRightIcon } from '../components/Icons';

export const NewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Kiến thức & bài viết | Organic Việt Nam';
    const description = "Kiến thức về nguồn nguyên liệu thảo dược, quy trình chăm sóc và sản xuất, chất lượng và truy xuất cùng Organic Việt Nam.";
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
            <span className="eyebrow">Kiến thức</span>
            <h1>Tìm hiểu thảo dược và hành trình sản phẩm.</h1>
            <p>Cùng tìm hiểu nguồn nguyên liệu thảo dược, quy trình chăm sóc và sản xuất, chất lượng và truy xuất nguồn gốc.</p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Kiến thức</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/herbs.webp" alt="Tìm hiểu thảo dược và hành trình sản phẩm." loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">GÓC CHIA SẺ</span>
              <h2>Bài viết & góc nhìn</h2>
            </div>
          </div>

          <div className="article-grid" id="newsGrid">
            {ARTICLES.map(a => (
              <Link key={a.id} className="article-card" to={`/bai-viet?id=${a.id}`}>
                <img src={`/assets/images/${a.image}`} alt={a.title} loading="lazy" />
                <span>{a.tag}</span>
                <h3>{a.title}</h3>
                <b>Đọc bài viết <ArrowRightIcon /></b>
              </Link>
            ))}
          </div>

          <p className="disclaimer-inline">
            Bài viết mang tính kiến thức và định hướng, không phải công bố thành tựu hoặc chứng nhận đã được cấp cho doanh nghiệp.
          </p>
        </div>
      </section>
    </main>
  );
};
