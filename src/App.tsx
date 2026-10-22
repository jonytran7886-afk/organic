import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { FarmPage } from './pages/FarmPage';
import { QualityPage } from './pages/QualityPage';
import { NewsPage } from './pages/NewsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { SavedPage } from './pages/SavedPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        <Route path="/san-pham" element={<ProductsPage />} />
        <Route path="/san-pham.html" element={<ProductsPage />} />

        <Route path="/chi-tiet-san-pham" element={<ProductDetailPage />} />
        <Route path="/chi-tiet-san-pham.html" element={<ProductDetailPage />} />

        <Route path="/ve-chung-toi" element={<AboutPage />} />
        <Route path="/ve-chung-toi.html" element={<AboutPage />} />

        <Route path="/trang-trai" element={<FarmPage />} />
        <Route path="/trang-trai.html" element={<FarmPage />} />

        <Route path="/chat-luong" element={<QualityPage />} />
        <Route path="/chat-luong.html" element={<QualityPage />} />

        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc.html" element={<NewsPage />} />

        <Route path="/bai-viet" element={<ArticleDetailPage />} />
        <Route path="/bai-viet.html" element={<ArticleDetailPage />} />

        <Route path="/quan-tam" element={<SavedPage />} />
        <Route path="/quan-tam.html" element={<SavedPage />} />

        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/lien-he.html" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <Toast />
    </>
  );
};

export default App;
