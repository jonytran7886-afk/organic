import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data';

export const ArticleDetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get('id');
  const article = ARTICLES.find(a => a.id === articleId) || ARTICLES[0];

  useEffect(() => {
    document.title = `${article.title} | Organic Việt Nam`;
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <main id="main">
      <section className="subhero">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Bài viết</span>
            <h1>Góc kiến thức Organic Việt Nam</h1>
            <p>Thông tin mang tính tham khảo và chia sẻ kiến thức.</p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <Link to="/tin-tuc">Kiến thức</Link>
              <span>/</span>
              <span>{article.title}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap article-layout" id="articleDetail">
          <img
            className="article-hero-img"
            src={`/assets/images/${article.image}`}
            alt="Hình minh họa bài viết"
          />
          <span className="eyebrow">{article.tag} · BÀI VIẾT THAM KHẢO</span>
          <h2>{article.title}</h2>
          <p>{article.description}</p>

          <div className="article-body">
            {article.sections.map((section, idx) => (
              <div key={idx}>
                <h3>{section[0]}</h3>
                <p>{section[1]}</p>
              </div>
            ))}
          </div>

          <Link className="back-link" to="/tin-tuc">
            ← Trở về danh sách bài viết
          </Link>
        </div>
      </section>
    </main>
  );
};
