import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSaved } from '../context/SavedContext';
import { SearchIcon, HeartIcon, MenuIcon } from './Icons';

export const Header: React.FC = () => {
  const { savedIds } = useSaved();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/san-pham?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/san-pham');
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/index.html')) return true;
    if (path !== '/' && (location.pathname === path || location.pathname === `${path}.html`)) return true;
    return false;
  };

  const navLinks = [
    { to: '/', label: 'Trang chủ' },
    { to: '/san-pham', label: 'Sản phẩm' },
    { to: '/ve-chung-toi', label: 'Về chúng tôi' },
    { to: '/trang-trai', label: 'Trang trại' },
    { to: '/chat-luong', label: 'Chất lượng' },
    { to: '/tin-tuc', label: 'Kiến thức' },
    { to: '/lien-he', label: 'Liên hệ' },
  ];

  return (
    <>
      <div className="announcement">
        <div className="wrap">
          SẢN PHẨM THẢO DƯỢC <span>·</span> Nguồn nguyên liệu · Chất lượng · Truy xuất
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" to="/" aria-label="Organic Việt Nam – về trang chủ">
            <img src="/assets/images/ov-mark.png" alt="Biểu trưng OV" />
            <span>
              <strong>ORGANIC VIỆT NAM</strong>
              <small>Sản phẩm thảo dược · Minh bạch nguồn gốc</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {navLinks.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={isActive(item.to) ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <form className="header-search" onSubmit={handleSearchSubmit} role="search">
              <input
                type="search"
                name="q"
                placeholder="Tìm sản phẩm..."
                aria-label="Tìm sản phẩm"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <SearchIcon />
            </form>

            <Link
              className="interest-link"
              to="/quan-tam"
              title="Danh sách quan tâm"
              aria-label="Danh sách quan tâm"
            >
              <HeartIcon />
              <span className="saved-count" aria-label="Số mục đã lưu">
                {savedIds.length}
              </span>
            </Link>

            <button
              className="menu-button"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={mobileOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        <nav
          className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
          aria-label="Điều hướng trên điện thoại"
        >
          {navLinks.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={isActive(item.to) ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/quan-tam"
            className={isActive('/quan-tam') ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            Danh sách quan tâm ({savedIds.length})
          </Link>
        </nav>
      </header>
    </>
  );
};
