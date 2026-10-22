# Báo cáo cập nhật định vị Organic Việt Nam

Ngày thực hiện: 22/10/2026.

Đã cập nhật trực tiếp source hiện có theo định vị **SẢN PHẨM THẢO DƯỢC**. Tên thương hiệu và pháp nhân ORGANIC VIỆT NAM được giữ nguyên. Không gán thành phần thảo dược, công dụng sức khỏe hay chứng nhận cho sản phẩm chưa có căn cứ.

## Danh sách file và nội dung thay đổi

Toàn bộ 10 trang HTML được đồng bộ thanh thông báo, mô tả thương hiệu ở header/footer, thông điệp hợp tác, danh mục và SEO description riêng cho từng trang. Menu và đích liên kết được giữ nguyên.

| File | Nội dung cụ thể |
| --- | --- |
| `index.html` | Hero “Thảo dược Việt, vun đắp giá trị”; title SEO mới; câu chuyện, trụ cột, hành trình nguyên liệu, danh mục, sản phẩm nổi bật và giới thiệu bài viết theo hướng thảo dược. Sản phẩm nổi bật ưu tiên nguyên liệu và dòng đang nghiên cứu, có trạng thái xác minh. |
| `san-pham.html` | Giải thích định vị và giới hạn xác minh; chuẩn hóa tên nhóm, sản phẩm, placeholder tìm kiếm và HTML dự phòng; thay ảnh bao bì bằng ảnh cây/nguyên liệu trung tính. |
| `chi-tiet-san-pham.html` | Phần giới thiệu nêu rõ thông tin từng dòng cần xác minh. Chi tiết động bổ sung trạng thái nguyên liệu/quy trình từ dữ liệu dùng chung. |
| `ve-chung-toi.html` | Cập nhật câu chuyện, tầm nhìn, sứ mệnh và các trụ cột theo nguồn nguyên liệu, nghiên cứu sản phẩm, chất lượng, truy xuất. Giữ nguyên tên pháp nhân, MST và địa chỉ. |
| `trang-trai.html` | Định hướng khảo sát vùng nguyên liệu thảo dược, chăm sóc/thu hoạch theo lô; chăn nuôi chỉ đề cập ứng dụng khi có tài liệu tương ứng. Bỏ số liệu diện tích chưa xác minh; giữ lưu ý pháp lý và ảnh minh họa. |
| `chat-luong.html` | Nguồn thảo dược, hồ sơ chăm sóc và sản xuất theo lô; phân biệt định vị sản phẩm với bằng chứng chứng nhận. Giữ anchor `#truy-xuat`, `#chung-nhan`. |
| `tin-tuc.html` | Giới thiệu kiến thức về nguyên liệu thảo dược, chăm sóc/sản xuất và truy xuất. |
| `bai-viet.html` | Giới thiệu nội dung tham khảo về thảo dược; giữ URL và ID bài viết. |
| `lien-he.html` | Nội dung hợp tác về thảo dược, vùng nguyên liệu và sản xuất/phân phối. Giữ biểu mẫu bản nháp cục bộ. |
| `quan-tam.html` | Thay ảnh bao bì cũ bằng ảnh cây trung tính; sửa template nút “Khám phá sản phẩm” từng bị in nguyên văn thành liên kết thật. |
| `assets/data.js` | Chuẩn hóa 8 sản phẩm và 4 bài viết; thêm thông tin cần xác minh theo từng dòng. Thịt, trứng, gia cầm, rau củ và giỏ thực phẩm giữ tên trung tính. Hai dòng thảo dược chỉ ở trạng thái nghiên cứu. Giữ nguyên toàn bộ ID và mã danh mục. |
| `assets/app.js` | Thẻ sản phẩm hiển thị đúng trạng thái nghiên cứu; chi tiết hiển thị thông tin cần xác minh; SEO description động theo sản phẩm/bài viết. Sửa lỗi sẵn có: sau khi mở danh mục bằng `?q=...`, xóa ô tìm kiếm hoặc “Hiện tất cả” phải bỏ từ khóa cũ. |
| `README.md` | Ghi định vị mới, giới hạn dữ liệu/ảnh, hướng dẫn kiểm tra và liên kết báo cáo. |
| `scripts/verify-source.py` | Kiểm tra định vị, metadata, liên kết/anchor, tài nguyên, ID và dữ liệu HTML dự phòng. |
| `scripts/verify-browser.mjs` | Kiểm tra trên Chrome local: desktop/mobile, ảnh, lỗi JavaScript và các tương tác đang có. |
| `docs/superpowers/plans/2026-10-22-dinh-vi-thao-duoc.md` | Kế hoạch và trạng thái thực hiện. |
| `docs/BAO-CAO-DINH-VI-THAO-DUOC.md` | Báo cáo bàn giao này. |

## Rà soát hình ảnh

Đã xem toàn bộ bộ ảnh gốc và kiểm tra các ảnh có chữ/bao bì ở kích thước đầy đủ. Không dùng OCR làm bằng chứng kiểm tra.

- Loại `assets/images/hero-products.webp` và `assets/images/products-close.webp`: chứa tên sản phẩm mang định vị cũ và biểu tượng trên bao bì chưa được xác minh. Các vị trí sử dụng được thay bằng `herbs.webp` hoặc `vegetables.webp` sẵn có; sản phẩm giỏ thực phẩm trong dữ liệu động cũng đã đổi ảnh.
- Loại `assets/images/store.webp`: ảnh chưa được tham chiếu nhưng chứa phối cảnh cửa hàng với các hình bao bì cũ.
- Giữ nguyên `assets/images/ov-mark.png`. Các ảnh còn lại tiếp tục là hình minh họa, không phải bằng chứng về trang trại, cơ sở sản xuất, nguyên liệu hay sản phẩm thực tế. Trạng thái minh họa và yêu cầu ảnh thực được nêu trên website.

## Kết quả kiểm tra

- `python3 scripts/verify-source.py`: đạt; 10 trang, 8 sản phẩm, 4 bài viết, 500 tham chiếu nội bộ hợp lệ. Kiểm tra cả nội dung ẩn, HTML dự phòng, metadata, ảnh, mã sản phẩm/bài viết và anchor.
- `node --check assets/data.js`, `node --check assets/app.js`, `node --check scripts/verify-browser.mjs`: đạt.
- `git diff --check`: đạt.
- Quét toàn bộ HTML và JavaScript hiển thị: không còn từ mô tả định vị cũ; mọi lần xuất hiện “Organic” đều thuộc tên ORGANIC VIỆT NAM. Các trụ cột trước đây dùng tên tiếng Anh đã đổi thành tên mô tả tiếng Việt để tránh nhầm đặc tính sản phẩm.
- Đối chiếu với HEAD ban đầu: giữ nguyên 10 tên file HTML, tập ID/anchor của từng trang, CSS và toàn bộ byte của logo OV. Các URL tham số sản phẩm/bài viết vẫn sử dụng ID cũ.
- Chrome headless: 10 trang × 4 chiều rộng **1440, 768, 390, 320 px**, không tràn ngang, không ảnh lỗi, không lỗi JavaScript trong các lượt kiểm tra.
- Kiểm tra thêm cả 8 sản phẩm và 4 bài viết ở **1440 và 390 px**; nội dung và metadata đúng mục đang xem, không tràn ngang.
- Menu mobile mở/đóng và trạng thái truy cập; các nhóm lọc qua URL và nút; tìm kiếm từ header; tìm kiếm trực tiếp, trạng thái không có kết quả và đặt lại bộ lọc: đạt.
- Lưu/bỏ sản phẩm, giữ danh sách khi chuyển trang, xóa danh sách, liên kết liên hệ từ sản phẩm và điền trước thông tin: đạt.
- Biểu mẫu liên hệ lưu bản nháp vào trình duyệt và thông báo rõ chưa gửi đến doanh nghiệp: đạt.

Ảnh chụp 10 trang ở desktop/mobile và kết quả JSON được lưu trong `/private/tmp/ov-review/` của phiên kiểm tra. Đây là kiểm tra Chrome headless; chưa kiểm thử trực tiếp trên thiết bị iOS/Android hoặc Safari/Firefox.

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

Không thêm công dụng chữa bệnh, thông số chất lượng hoặc lợi ích sức khỏe chưa được xác minh. Không triển khai tính năng mới, không kết nối biểu mẫu với server và không publish website trong lần cập nhật này.
