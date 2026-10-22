# Báo cáo cập nhật định vị Organic Việt Nam

Ngày thực hiện: 22/10/2026.

Định vị chính thức: **SẢN PHẨM THẢO DƯỢC**. Giữ nguyên tên thương hiệu, pháp nhân ORGANIC VIỆT NAM và logo OV. Không gán thành phần thảo dược, công dụng sức khỏe hay chứng nhận cho dòng sản phẩm chưa có căn cứ.

## Tích hợp phiên bản mới trên Git

Bản chỉnh sửa website tĩnh đã được lưu trong commit `0a677e0`. Khi push, phát hiện remote có 3 commit mới đến `38aac0a`, gồm chuyển sang React/TypeScript/Vite và cấu hình Wrangler. Đã tích hợp lịch sử remote và chuyển toàn bộ nội dung được duyệt sang phiên bản React đang có; không khôi phục kiến trúc tĩnh cũ hoặc ghi đè công việc từ xa.

Dữ liệu 8 sản phẩm và 4 bài viết trong `src/data.ts` đã được đối chiếu, khớp hoàn toàn với bản cập nhật đã duyệt. Router, CSS, package.json, Vite và Wrangler của remote được giữ nguyên. Các file tĩnh mà remote đã loại bỏ tiếp tục được thay bằng component React tương ứng. Bản tĩnh vẫn có đầy đủ trong lịch sử commit `0a677e0`.

## File và nội dung thay đổi trong phiên bản React

| File | Thay đổi |
| --- | --- |
| `src/components/Header.tsx` | Thanh thông báo và mô tả thương hiệu theo định vị sản phẩm thảo dược; giữ menu và tìm kiếm. |
| `src/components/Footer.tsx` | Mô tả thương hiệu, danh mục, thông điệp hợp tác; giữ pháp nhân, MST, địa chỉ và liên kết. |
| `src/components/ProductCard.tsx` | Hiển thị trạng thái nghiên cứu/định hướng theo đúng dữ liệu từng sản phẩm. |
| `src/data.ts` | Chuẩn hóa 8 sản phẩm và 4 bài viết; thêm yêu cầu xác minh từng dòng. Thịt, trứng, gia cầm và rau củ giữ tên trung tính. Hai dòng thảo dược ở trạng thái nghiên cứu. Giữ toàn bộ ID và mã danh mục. |
| `src/types.ts` | Bổ sung trường `verification` cho thông tin cần xác minh của sản phẩm. |
| `src/pages/HomePage.tsx` | Hero “Thảo dược Việt, vun đắp giá trị”; câu chuyện, danh mục, trụ cột, hành trình nguyên liệu, sản phẩm nổi bật và bài viết được đồng bộ. |
| `src/pages/ProductsPage.tsx` | Giải thích định vị và giới hạn xác minh; đổi tên danh mục/placeholder; thay ảnh bao bì bằng ảnh cây trung tính. Giữ logic bộ lọc và đặt lại của phiên bản React. |
| `src/pages/ProductDetailPage.tsx` | Định hướng nguyên liệu/quy trình và lưu ý xác minh riêng cho từng dòng; giữ lưu quan tâm và liên hệ. |
| `src/pages/AboutPage.tsx` | Câu chuyện, tầm nhìn, sứ mệnh và trụ cột theo thảo dược, chất lượng và truy xuất. |
| `src/pages/FarmPage.tsx` | Định hướng khảo sát nguyên liệu thảo dược và chăm sóc/thu hoạch theo lô; bỏ số liệu diện tích chưa xác minh, giữ lưu ý pháp lý. |
| `src/pages/QualityPage.tsx` | Nguồn thảo dược, hồ sơ chăm sóc/sản xuất theo lô; phân biệt định vị với bằng chứng chứng nhận, giữ anchor truy xuất và chứng nhận. |
| `src/pages/NewsPage.tsx` | Giới thiệu kiến thức thảo dược, nguyên liệu, sản xuất và nguồn gốc. |
| `src/pages/ArticleDetailPage.tsx` | Nội dung tham khảo và metadata theo bài viết đang xem. |
| `src/pages/SavedPage.tsx` | Thay ảnh bao bì cũ bằng ảnh cây; giữ quản lý danh sách quan tâm. |
| `src/pages/ContactPage.tsx` | Thông điệp hợp tác về thảo dược, vùng nguyên liệu và sản xuất/phân phối; giữ bản nháp cục bộ. |
| `index.html`, `metadata.json` | SEO và mô tả mặc định theo định vị mới. Cả 10 page component cập nhật title, description và Open Graph khi chuyển trang. |
| `README.md` | Hướng dẫn chạy React, định vị mới, giới hạn dữ liệu và kiểm tra. |
| `.gitignore` | Loại dependencies, build output và thư mục chạy Wrangler khỏi source Git. |
| `scripts/verify-source.py` | Kiểm tra định vị, tài nguyên, metadata, ID, route và URL .html cũ. |
| `scripts/verify-browser.mjs` | Kiểm tra Chrome local ở cổng 3000, tương thích React và các luồng tương tác hiện có. |
| `docs/superpowers/plans/2026-10-22-dinh-vi-thao-duoc.md` | Kế hoạch, trạng thái và ghi nhận tích hợp remote. |
| `docs/BAO-CAO-DINH-VI-THAO-DUOC.md` | Báo cáo bàn giao này. |

## Hình ảnh

Đã xem toàn bộ ảnh gốc, kiểm tra ảnh có chữ/bao bì ở kích thước đầy đủ. Không dùng OCR làm bằng chứng.

- Loại `hero-products.webp`, `products-close.webp`, `store.webp` khỏi cả `assets/images/` và `public/assets/images/` vì chứa bao bì/thông điệp cũ hoặc biểu tượng chưa được xác minh.
- Các vị trí dùng ảnh bao bì đã đổi sang `herbs.webp` hoặc `vegetables.webp` sẵn có. Không thêm ảnh giả về sản phẩm thực tế.
- Logo OV giữ nguyên byte so với remote. Các ảnh còn lại đều là minh họa; website nêu trạng thái và yêu cầu ảnh thật. Không dùng hình để khẳng định năng lực trang trại, thành phần hay chứng nhận.

## Kiểm tra phiên bản React tích hợp

- `python3 scripts/verify-source.py`: đạt; 10 page component, 8 sản phẩm, 4 bài viết, 35 tham chiếu ảnh trực tiếp, route/alias .html, anchor, metadata và định vị hợp lệ.
- `npm run lint`: TypeScript đạt.
- `npm run build`: TypeScript và Vite production build đạt.
- `node --check scripts/verify-browser.mjs`, `git diff --check`: đạt.
- Quét HTML, TypeScript/TSX, metadata: không còn nội dung mô tả định vị cũ; “Organic” chỉ thuộc tên ORGANIC VIỆT NAM.
- Đối chiếu remote: router, CSS, package.json, Vite và Wrangler không thay đổi; logo giữ nguyên byte.
- Chrome headless: 10 trang × 4 chiều rộng **1440, 768, 390, 320 px**, không tràn ngang, không ảnh lỗi, không lỗi JavaScript trong các lượt kiểm tra.
- Cả 10 URL `.html` cũ tiếp tục mở đúng trang React.
- Từng sản phẩm và bài viết được kiểm tra ở **1440 và 390 px**: 16 lượt sản phẩm, 8 lượt bài viết; nội dung/metadata đúng mục đang xem và không tràn ngang.
- Menu mobile mở/đóng; lọc qua URL và nút; tìm kiếm từ header và trực tiếp; kết quả rỗng, đặt lại và xóa từ khóa: đạt.
- Lưu/bỏ sản phẩm, giữ danh sách qua chuyển trang, xóa danh sách, liên hệ từ sản phẩm và điền trước nội dung: đạt.
- Biểu mẫu liên hệ chỉ lưu bản nháp vào trình duyệt, hiển thị rõ chưa gửi tới doanh nghiệp: đạt.

Ảnh chụp và kết quả JSON được lưu ở `/private/tmp/ov-review/` trong phiên kiểm tra. Chưa kiểm thử trực tiếp trên thiết bị iOS/Android hoặc Safari/Firefox. Không triển khai dịch vụ bằng công cụ deploy; thao tác bàn giao là commit và push Git theo yêu cầu người dùng.

## Thông tin doanh nghiệp cần xác minh

| Nhóm thông tin | Hồ sơ cần cung cấp trước khi công bố chi tiết |
| --- | --- |
| Danh mục đang kinh doanh | Dòng nào thực sự có hàng; tên thương mại, quy cách, nhãn được duyệt và trạng thái phân phối. Danh mục hiện vẫn là định hướng/nghiên cứu như source ban đầu. |
| Thảo dược và nguyên liệu | Loại cây/nguyên liệu, nguồn giống, vùng trồng, đơn vị cung cấp và hồ sơ truy xuất từng lô. |
| Ứng dụng trên từng sản phẩm | Thành phần/công thức hoặc hồ sơ quy trình tương ứng; đặc biệt với thịt, trứng, gia cầm. Chưa đủ căn cứ để gọi các dòng này là sản phẩm có ứng dụng thảo dược. |
| Quy trình và chất lượng | Nhật ký chăm sóc/thu hoạch, vật tư sử dụng, sơ chế/sản xuất, bảo quản, tiêu chí kiểm tra và kết quả thử nghiệm của từng dòng. |
| Chứng nhận | Giấy tờ hợp lệ, phạm vi cơ sở/sản phẩm và thời hạn; hiện không hiển thị chứng nhận như đã được cấp. |
| Khe Xai | Địa điểm, diện tích, quyền sử dụng đất, điều kiện quy hoạch, tình trạng hạ tầng và khả năng vận hành thực tế. |
| Ảnh và bao bì | Ảnh thực tế có quyền sử dụng, thiết kế nhãn chính thức, ảnh cơ sở và nguyên liệu có thể đối chiếu. |
| Pháp nhân và liên hệ | Đối chiếu tên pháp nhân, MST, địa chỉ với hồ sơ; bổ sung điện thoại/email chính thức và đơn vị tiếp nhận yêu cầu. |
| Hệ thống truy xuất | Dữ liệu lô, đơn vị chịu trách nhiệm và tình trạng vận hành trước khi công bố QR/hệ thống tra cứu thật. |

Không thêm công dụng chữa bệnh, thông số chất lượng hoặc lợi ích sức khỏe chưa được xác minh. Không thêm tính năng hoặc kết nối biểu mẫu với server.
