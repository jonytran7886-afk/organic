import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useSaved } from '../context/SavedContext';
import { ArrowRightIcon } from './Icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isSaved, toggleSaved } = useSaved();
  const saved = isSaved(product.id);

  return (
    <article className="product-card">
      <Link className="product-image" to={`/chi-tiet-san-pham?id=${product.id}`}>
        <img
          src={`/assets/images/${product.image}`}
          alt={`Ảnh minh họa ${product.name}`}
          loading="lazy"
        />
        <span className="image-tag">Hình minh họa</span>
      </Link>
      <div className="product-body">
        <span className="eyebrow">{product.catName}</span>
        <h3>
          <Link to={`/chi-tiet-san-pham?id=${product.id}`}>{product.name}</Link>
        </h3>
        <p>Định hướng phát triển · Đang cập nhật thông tin thương mại.</p>
        <div className="product-actions">
          <Link className="text-link" to={`/chi-tiet-san-pham?id=${product.id}`}>
            Tìm hiểu sản phẩm <ArrowRightIcon />
          </Link>
          <button
            className={`save-btn ${saved ? 'saved' : ''}`}
            type="button"
            onClick={() => toggleSaved(product.id, product.name)}
            aria-pressed={saved}
            aria-label={`Lưu ${product.name} vào danh sách quan tâm`}
            title={saved ? 'Bỏ khỏi danh sách quan tâm' : 'Lưu vào danh sách quan tâm'}
          >
            {saved ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </article>
  );
};
