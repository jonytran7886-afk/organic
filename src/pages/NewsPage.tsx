import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data';
import { ArrowRightIcon } from '../components/Icons';

export const NewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Kiến thức & bài viết | Organic Việt Nam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Kiến thức</span>
            <h1>Kiến thức từ nông nghiệp đến thực phẩm.</h1>
            <p>Cùng tìm hiểu những vấn đề thiết thực về chất lượng, truy xuất nguồn gốc và phát triển chuỗi cung ứng có trách nhiệm.</p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Kiến thức</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/herbs.webp" alt="Kiến thức từ nông nghiệp đến thực phẩm." loading="lazy" />
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
