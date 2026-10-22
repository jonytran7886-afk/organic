import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useSaved } from '../context/SavedContext';
import { BoxIcon, BookIcon, PinIcon, ArrowRightIcon } from '../components/Icons';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { showToast } = useSaved();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Hợp tác phân phối');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Liên hệ | Organic Việt Nam';
    window.scrollTo(0, 0);

    const subjectParam = searchParams.get('chu-de');
    if (subjectParam) {
      const allowed = [
        'Hợp tác phân phối',
        'Tìm hiểu sản phẩm',
        'Hợp tác sản xuất',
        'Hợp tác công nghệ',
        'Khác'
      ];
      if (allowed.includes(subjectParam)) {
        setSubject(subjectParam);
      }
    }

    const productParam = searchParams.get('san-pham');
    if (productParam) {
      const p = PRODUCTS.find(v => v.id === productParam);
      if (p) {
        setMessage(prev => `Tôi muốn tìm hiểu về sản phẩm: ${p.name}.\n${prev}`);
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message || !consent) {
      showToast('Vui lòng điền đầy đủ các thông tin bắt buộc.');
      return;
    }

    const draft = {
      name,
      phone,
      email,
      subject,
      message,
      consent: 'on',
      createdAt: new Date().toISOString()
    };

    try {
      const prev = JSON.parse(localStorage.getItem('ov_contact_drafts') || '[]');
      prev.push(draft);
      localStorage.setItem('ov_contact_drafts', JSON.stringify(prev));
      setSubmitted(true);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setConsent(false);
      showToast('Đã lưu bản nháp liên hệ');
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch {
      showToast('Không thể lưu bản nháp trên trình duyệt này');
    }
  };

  return (
    <main id="main">
      <section className="subhero with-pic">
        <div className="wrap subhero-grid">
          <div>
            <span className="eyebrow">Liên hệ</span>
            <h1>Cùng trao đổi về cơ hội hợp tác.</h1>
            <p>
              Kết nối với Organic Việt Nam về sản phẩm, phân phối, vùng nguyên liệu hoặc giải pháp hợp tác theo nhu cầu của bạn.
            </p>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span>/</span>
              <span>Liên hệ</span>
            </div>
          </div>
          <div className="subhero-picture">
            <img src="/assets/images/community.webp" alt="Cùng trao đổi về cơ hội hợp tác." loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <span className="eyebrow">THÔNG TIN DOANH NGHIỆP</span>
            <h2>Organic Việt Nam</h2>
            <p>Chúng tôi mong muốn lắng nghe nhu cầu và đề xuất hợp tác trong chuỗi giá trị nông nghiệp – thực phẩm.</p>

            <div className="contact-detail">
              <BoxIcon />
              <div>
                <span>Tên pháp nhân</span>
                <strong>CÔNG TY CỔ PHẦN TẬP ĐOÀN ORGANIC VIỆT NAM</strong>
              </div>
            </div>

            <div className="contact-detail">
              <BookIcon />
              <div>
                <span>Mã số thuế</span>
                <strong>3002272477</strong>
              </div>
            </div>

            <div className="contact-detail">
              <PinIcon />
              <div>
                <span>Địa chỉ</span>
                <strong>Tổ dân phố Quyền Hành, Phường Sông Trí, Tỉnh Hà Tĩnh, Việt Nam</strong>
              </div>
            </div>

            <div className="contact-aside">
              Chưa cung cấp số điện thoại, email hoặc website chính thức để công khai.
            </div>
          </div>

          <div className="contact-form-box">
            <h3>Gửi nội dung trao đổi</h3>
            <p className="form-note">
              Bản demo HTML: dữ liệu chỉ lưu trong trình duyệt này, chưa tự động chuyển tới doanh nghiệp.
            </p>

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Họ và tên
                  <input
                    name="name"
                    required
                    maxLength={120}
                    placeholder="Tên của bạn"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </label>
                <label>
                  Điện thoại liên hệ
                  <input
                    name="phone"
                    type="tel"
                    required
                    maxLength={30}
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </label>
              </div>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="email@congty.vn"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>

              <label>
                Nội dung quan tâm
                <select
                  name="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                >
                  <option value="Hợp tác phân phối">Hợp tác phân phối</option>
                  <option value="Tìm hiểu sản phẩm">Tìm hiểu sản phẩm</option>
                  <option value="Hợp tác sản xuất">Hợp tác sản xuất</option>
                  <option value="Hợp tác công nghệ">Hợp tác công nghệ</option>
                  <option value="Khác">Khác</option>
                </select>
              </label>

              <label>
                Thông điệp
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Bạn muốn trao đổi điều gì?"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </label>

              <label className="check-label">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                />
                Tôi hiểu đây là biểu mẫu bản demo và dữ liệu chỉ được lưu trên trình duyệt của tôi.
              </label>

              <button className="btn btn-primary btn-submit" type="submit">
                Lưu bản nháp liên hệ <ArrowRightIcon />
              </button>
            </form>

            {submitted && (
              <div className="form-result" id="contactResult" ref={resultRef} aria-live="polite">
                <strong>Đã lưu bản nháp trên thiết bị này.</strong>
                <br />
                Đây là website demo; nội dung <strong>chưa được gửi</strong> tới Organic Việt Nam. Khi có API hoặc email chính thức, cần kết nối biểu mẫu để gửi thực tế.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
