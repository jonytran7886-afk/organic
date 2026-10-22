import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <>
      <section className="prefooter">
        <div className="wrap prefooter-inner">
          <div>
            <span className="eyebrow light">CÙNG XÂY DỰNG GIÁ TRỊ LÂU DÀI</span>
            <h2>Cùng phát triển sản phẩm thảo dược<br />từ nguồn nguyên liệu minh bạch.</h2>
          </div>
          <Link className="btn btn-light" to="/lien-he">
            Trao đổi hợp tác <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <img src="/assets/images/ov-mark.png" alt="OV" />
              <span>
                <strong>ORGANIC VIỆT NAM</strong>
                <small>Sản phẩm thảo dược · Chất lượng · Truy xuất</small>
              </span>
            </Link>
            <p>
              CÔNG TY CỔ PHẦN TẬP ĐOÀN ORGANIC VIỆT NAM<br />
              Mã số thuế: 3002272477
            </p>
            <p>Tổ dân phố Quyền Hành, Phường Sông Trí, Tỉnh Hà Tĩnh, Việt Nam.</p>
          </div>

          <div>
            <h3>Điều hướng</h3>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/san-pham">Sản phẩm</Link></li>
              <li><Link to="/ve-chung-toi">Về chúng tôi</Link></li>
              <li><Link to="/trang-trai">Trang trại</Link></li>
              <li><Link to="/chat-luong">Chất lượng</Link></li>
              <li><Link to="/tin-tuc">Kiến thức</Link></li>
              <li><Link to="/lien-he">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3>Danh mục</h3>
            <ul>
              <li><Link to="/san-pham?loai=trung">Trứng & gia cầm</Link></li>
              <li><Link to="/san-pham?loai=thit">Thịt & thực phẩm</Link></li>
              <li><Link to="/san-pham?loai=nongsan">Thảo dược & nông sản</Link></li>
              <li><Link to="/san-pham?loai=chebien">Sản phẩm giá trị gia tăng</Link></li>
            </ul>
          </div>

          <div>
            <h3>Thông tin</h3>
            <p>
              Để lại nội dung trao đổi hoặc yêu cầu hợp tác trên trang liên hệ. Đây là giao diện demo, chưa kết nối hệ thống tiếp nhận.
            </p>
            <Link className="btn btn-outline-light" to="/lien-he">
              Gửi yêu cầu <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <span>© 2026 Organic Việt Nam · Giao diện giới thiệu / prototype.</span>
          <span>Hình ảnh minh họa · Không đại diện cho chứng nhận hay năng lực đã xác minh.</span>
        </div>
      </footer>
    </>
  );
};
