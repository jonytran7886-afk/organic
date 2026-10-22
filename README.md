# Organic Việt Nam — React Web Application

Hệ sinh thái nông nghiệp, thực phẩm, thương mại và công nghệ với chuỗi giá trị minh bạch và bền vững.
Ứng dụng được viết lại hoàn toàn bằng **React 18 + TypeScript + Vite + React Router**, giữ nguyên 100% logic nghiệp vụ, giao diện thẩm mỹ và trải nghiệm người dùng.

## Tính năng

- **Trang chủ (`/`)**: Giới thiệu hệ sinh thái, 4 danh mục định hướng, 4 trụ cột (Farm, Foods, Market, Digital), quy trình 6 bước, sản phẩm nổi bật, kiểm soát chất lượng, định hướng Khe Xai, góc kiến thức và kết nối.
- **Danh mục sản phẩm (`/san-pham`)**: Lọc theo danh mục (Tất cả, Trứng & gia cầm, Thịt & thực phẩm, Thảo mộc & nông sản, Giá trị gia tăng), tìm kiếm theo từ khóa trực tiếp, hiển thị số lượng và trạng thái rỗng.
- **Chi tiết sản phẩm (`/chi-tiet-san-pham?id=...`)**: Xem đầy đủ tiêu chí sản phẩm, mục tiêu hướng tới, đối tượng phục vụ, nút lưu quan tâm và liên kết trao đổi sản phẩm tự động điền nội dung.
- **Về chúng tôi (`/ve-chung-toi`)**: Câu chuyện doanh nghiệp, thông tin pháp lý (MST: 3002272477), tầm nhìn, sứ mệnh, 4 giá trị cốt lõi và 4 trụ cột.
- **Trang trại Khe Xai (`/trang-trai`)**: Khảo sát nguồn lực, quy hoạch chăn nuôi, vùng nguyên liệu, kinh tế tuần hoàn và thư viện hình ảnh minh họa.
- **Chất lượng & Truy xuất (`/chat-luong`)**: 4 lớp kiểm soát chất lượng theo công đoạn, mô hình Organic Digital (dữ liệu truy xuất nguồn gốc), thông báo minh bạch chứng nhận và tiêu chuẩn.
- **Kiến thức & Bài viết (`/tin-tuc`, `/bai-viet?id=...`)**: Đọc các bài viết chuyên môn về minh bạch nguồn gốc, mã QR, kinh tế tuần hoàn và cách chọn thực phẩm.
- **Danh sách quan tâm (`/quan-tam`)**: Quản lý các sản phẩm đã lưu trong `localStorage` (`ov_interests`), đồng bộ huy hiệu số lượng trên header và nút xóa danh sách.
- **Liên hệ & Trao đổi (`/lien-he`)**: Biểu mẫu lưu nháp liên hệ trên trình duyệt (`ov_contact_drafts`), tự động điền chủ đề và sản phẩm từ liên kết, thông báo phản hồi trực quan.
- **Điều hướng & Tương thích**: Hỗ trợ cả URL chuẩn (`/san-pham`, `/chi-tiet-san-pham`, ...) lẫn URL `.html` cũ (`/san-pham.html`, `/chi-tiet-san-pham.html`, ...) đảm bảo liên kết không bị gián đoạn.

## Cấu trúc thư mục

```
/
├── public/
│   └── assets/images/      # Hình ảnh và biểu trưng
├── src/
│   ├── components/         # Header, Footer, ProductCard, Toast, Icons
│   ├── context/            # SavedContext quản trị danh sách quan tâm & thông báo toast
│   ├── pages/              # Tất cả trang: Home, Products, Detail, About, Farm, Quality, News, Article, Saved, Contact
│   ├── data.ts             # Dữ liệu sản phẩm & bài viết
│   ├── types.ts            # TypeScript interfaces
│   ├── styles.css          # CSS thiết kế giao diện gốc
│   ├── App.tsx             # Định tuyến React Router
│   └── main.tsx            # Điểm gắn kết React
├── index.html              # HTML entry point với typography Be Vietnam Pro & SEO metadata
├── package.json            # Cấu hình scripts & dependencies
├── tsconfig.json           # Cấu hình TypeScript
└── vite.config.ts          # Cấu hình Vite dev server (host: 0.0.0.0, port: 3000)
```

## Chạy ứng dụng

```bash
npm install
npm run dev
```

Dev server chạy trên `http://0.0.0.0:3000`.
Build sản phẩm:
```bash
npm run build
```
