# Cập nhật định vị sản phẩm thảo dược — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Đồng bộ website hiện có theo định vị SẢN PHẨM THẢO DƯỢC.

**Architecture:** Chỉnh nội dung 10 trang HTML và dữ liệu dùng chung; giữ CSS, URL, ID sản phẩm/bài viết và các luồng tương tác. Không gán đặc tính thảo dược cho sản phẩm chưa có hồ sơ.

**Tech Stack:** HTML, CSS, JavaScript thuần.

**Spec:** Yêu cầu người dùng ngày 22/10/2026 trong phiên làm việc này.

## Global Constraints

- Giữ nguyên tên pháp nhân, thương hiệu ORGANIC VIỆT NAM, logo OV và màu sắc.
- Không quảng bá đặc tính hay chứng nhận chưa xác minh; không tự tạo công dụng sức khỏe.
- Không viết lại website, thêm tính năng hay thay cấu trúc URL/điều hướng.

## Review Focus

- HTML dự phòng khi JavaScript tắt phải cùng nội dung với dữ liệu JavaScript.
- Thịt/trứng/gia cầm không được gắn nhãn thảo dược khi chưa có hồ sơ.
- Ảnh bao bì không được chứa thông điệp cũ; ảnh thay thế phải ghi trạng thái minh họa.
- Metadata trang chi tiết phải khớp sản phẩm/bài viết đang xem.
- Menu mobile, bộ lọc, tìm kiếm, lưu quan tâm và liên hệ phải giữ hoạt động.

## Task 1: Nội dung và dữ liệu

- [x] Rà soát văn bản, metadata, nội dung ẩn và toàn bộ ảnh.
- [x] Cập nhật nội dung chung và từng trang; dữ liệu sản phẩm/bài viết; đồng bộ thẻ tĩnh.
- [x] Thay ảnh có nhãn không phù hợp bằng minh họa trung tính, giữ logo.
- [x] Kiểm tra mọi URL, ID và anchor cũ còn tồn tại.

## Task 2: Kiểm chứng và bàn giao

- [x] Quét toàn bộ source; kiểm tra cú pháp JavaScript và tài nguyên nội bộ.
- [x] Kiểm tra trình duyệt desktop/mobile, từng sản phẩm/bài viết và các tương tác.
- [x] Ghi báo cáo file thay đổi, kết quả kiểm tra và dữ liệu doanh nghiệp cần xác minh.

## Quyết định triển khai

Chỉnh trực tiếp source theo yêu cầu người dùng; tiếp tục triển khai trong phiên này. Không tự commit, publish hay thay kiến trúc. Chỉ thay nội dung và sửa liên kết dự phòng bị in nguyên template nếu gặp trong phạm vi kiểm tra.

Đã tái hiện và sửa lỗi xóa từ khóa từ URL khi đặt lại bộ lọc; đã kiểm tra lại trên Chrome. CSS, logo OV, các ID/anchor và tên file HTML giữ nguyên.

## Tích hợp Git sau khi người dùng yêu cầu push

Remote đã chuyển sang React/TypeScript tại `38aac0a`. Nội dung của bản tĩnh được lưu ở `0a677e0`, sao lưu đầy đủ và chuyển sang 10 page component. Dữ liệu được đối chiếu khớp hoàn toàn. Giữ router/CSS/cấu hình triển khai từ remote, cập nhật script kiểm tra cho React; build, TypeScript và kiểm tra Chrome đã đạt. Người dùng đã cho phép push tới repository công khai và nhánh main.
