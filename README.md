# Organic Việt Nam — React Web Application

Định vị chính thức: **SẢN PHẨM THẢO DƯỢC**. Giữ nguyên thương hiệu và pháp nhân ORGANIC VIỆT NAM; chú trọng nguồn nguyên liệu, quy trình chăm sóc/sản xuất, chất lượng và truy xuất. Thịt, trứng, gia cầm chưa được gắn đặc tính thảo dược khi chưa có hồ sơ.
Ứng dụng hiện dùng **React 18 + TypeScript + Vite + React Router**, giữ kiến trúc React đang có trên remote, đồng bộ nội dung định vị thảo dược.

## Tính năng

- **Trang chủ (`/`)**: Giới thiệu hệ sinh thái, 4 danh mục định hướng, 4 trụ cột (nguyên liệu, sản phẩm, phân phối, truy xuất), quy trình 6 bước, sản phẩm nổi bật, kiểm soát chất lượng, định hướng Khe Xai, góc kiến thức và kết nối.
- **Danh mục sản phẩm (`/san-pham`)**: Lọc theo danh mục (Tất cả, Trứng & gia cầm, Thịt & thực phẩm, Thảo dược & nông sản, Giá trị gia tăng), tìm kiếm theo từ khóa trực tiếp, hiển thị số lượng và trạng thái rỗng.
- **Chi tiết sản phẩm (`/chi-tiet-san-pham?id=...`)**: Xem đầy đủ tiêu chí sản phẩm, mục tiêu hướng tới, đối tượng phục vụ, nút lưu quan tâm và liên kết trao đổi sản phẩm tự động điền nội dung.
- **Về chúng tôi (`/ve-chung-toi`)**: Câu chuyện doanh nghiệp, thông tin pháp lý (MST: 3002272477), tầm nhìn, sứ mệnh, 4 giá trị cốt lõi và 4 trụ cột.
- **Trang trại Khe Xai (`/trang-trai`)**: Khảo sát nguồn lực, quy hoạch chăn nuôi, vùng nguyên liệu, kinh tế tuần hoàn và thư viện hình ảnh minh họa.
- **Chất lượng & Truy xuất (`/chat-luong`)**: 4 lớp kiểm soát chất lượng theo công đoạn, mô hình dữ liệu và truy xuất (dữ liệu truy xuất nguồn gốc), thông báo minh bạch chứng nhận và tiêu chuẩn.
- **Kiến thức & Bài viết (`/tin-tuc`, `/bai-viet?id=...`)**: Đọc các bài viết chuyên môn về minh bạch nguồn gốc, mã QR, quản lý vùng thảo dược theo lô và cách chọn thực phẩm.
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

## Kiểm tra định vị

```bash
python3 scripts/verify-source.py
npm run lint
npm run build
```

Để kiểm tra trình duyệt, chạy `npm run dev -- --host 127.0.0.1`, mở Chrome bằng hồ sơ tạm với remote debugging cổng `9222`, rồi chạy `node scripts/verify-browser.mjs`. Script dùng Chrome DevTools Protocol, không cần cài thư viện; chỉ chạy trên website local cổng 3000. Kết quả và ảnh kiểm tra lưu ở `/private/tmp/ov-review/`.

Các hình ảnh đều là minh họa; chưa có hồ sơ xác minh thành phần, quy trình, chứng nhận hay trạng thái thương mại của từng dòng sản phẩm. Ba ảnh bao bì mang định vị cũ đã được loại khỏi cả thư mục tài nguyên gốc và `public`.

[Báo cáo thay đổi và thông tin cần doanh nghiệp xác minh](docs/BAO-CAO-DINH-VI-THAO-DUOC.md).
