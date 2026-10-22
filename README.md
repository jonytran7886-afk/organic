# Organic Việt Nam — Website HTML Prototype

Website tĩnh, nhiều trang, giao diện tiếng Việt, không cần cài dependencies.

## Chạy website

Cách 1: Mở `index.html` bằng trình duyệt. Các liên kết HTML hoạt động trực tiếp; dữ liệu tìm kiếm và danh sách quan tâm lưu trên trình duyệt (có thể bị hạn chế ở một số trình duyệt khi chạy `file://`).

Cách 2 (khuyến nghị): mở Terminal tại thư mục này và chạy:

```bash
python -m http.server 8080
```

Truy cập `http://localhost:8080`.

## Các trang có trong bộ source

- `index.html`: Trang chủ nhiều section
- `san-pham.html`: Danh mục sản phẩm với lọc theo nhóm, tìm kiếm
- `chi-tiet-san-pham.html?id=trung-ga`: Trang chi tiết sản phẩm (ID lấy từ `assets/data.js`)
- `ve-chung-toi.html`: Giới thiệu doanh nghiệp, tầm nhìn, sứ mệnh
- `trang-trai.html`: Định hướng trang trại Khe Xai
- `chat-luong.html`: Quy trình quản lý chất lượng và truy xuất (có anchor `#truy-xuat`, `#chung-nhan`)
- `tin-tuc.html`: Danh sách bài viết chia sẻ kiến thức
- `bai-viet.html?id=truy-xuat-nguon-goc`: Trang chi tiết bài viết
- `lien-he.html`: Thông tin liên hệ và form demo
- `quan-tam.html`: Danh sách sản phẩm đã quan tâm

**Tất cả menu chính trên header và footer có liên kết thực tế trong bộ source.**

## Hoạt động

- Responsive desktop/tablet/mobile và menu mobile mở/đóng.
- Header tìm sản phẩm (dẫn đến `san-pham.html?q=...`).
- Bộ lọc sản phẩm theo danh mục, tìm kiếm trực tiếp.
- Click thẻ sản phẩm để xem chi tiết, chuyển đến trang liên hệ theo sản phẩm.
- Lưu/bỏ lưu danh sách sản phẩm quan tâm bằng `localStorage` (không phải đặt hàng).
- Form liên hệ kiểm tra dữ liệu và **chỉ lưu bản nháp trong trình duyệt**, KHÔNG gửi đến server.
- Bài viết có trang chi tiết riêng, liên kết điều hướng.

## Cần thay trước khi phát hành chính thức

- Hình ảnh hiện lấy từ bộ ảnh thiết kế mô phỏng, không phải bằng chứng năng lực/trang trại hiện hữu. Hãy thay bằng ảnh thực tế có quyền sử dụng.
- Sản phẩm trong danh mục là **định hướng**; chưa tích hợp giá, tồn kho hay thanh toán.
- Không thể hiện chứng nhận HACCP/ISO/VietGAP/hữu cơ, đối tác hay số liệu thành tích vì chưa có tài liệu xác minh.
- Tên pháp nhân, MST, địa chỉ đã điền theo thông tin người dùng cung cấp nhưng vẫn cần đối chiếu hồ sơ chính thức.
- Thiếu email, website chính thức, điện thoại, nên chưa có endpoint liên hệ.
- Mã QR hiện không sử dụng; tích hợp dữ liệu truy xuất thật và QR chỉ sau khi hệ thống vận hành.
- Khi sẵn sàng triển khai, kết nối API/CRM để gửi liên hệ; bổ sung CMS và dữ liệu sản phẩm thực.

## Cấu trúc

```
organic_viet_nam_website/
  index.html
  san-pham.html
  chi-tiet-san-pham.html
  ve-chung-toi.html
  trang-trai.html
  chat-luong.html
  tin-tuc.html
  bai-viet.html
  lien-he.html
  quan-tam.html
  assets/
    app.js
    data.js
    styles.css
    images/*.webp, ov-mark.png
```

© Prototype phục vụ rà soát và phát triển, không phải website thương mại đã vận hành.
