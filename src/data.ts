import { Product, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    "id": "trung-ga",
    "name": "Trứng gà",
    "category": "trung",
    "catName": "Trứng & gia cầm",
    "image": "eggs.webp",
    "badge": "Danh mục định hướng",
    "intro": "Phát triển dòng trứng gà phục vụ tiêu dùng gia đình, cửa hàng thực phẩm và khách hàng doanh nghiệp.",
    "points": [
      "Phân loại theo quy cách phù hợp",
      "Theo dõi theo lô thu hoạch",
      "Minh bạch thông tin đóng gói và bảo quản"
    ],
    "application": "Gia đình, cửa hàng thực phẩm, kênh B2B",
    "verification": "Chưa có hồ sơ xác minh ứng dụng thảo dược cho dòng sản phẩm này; hiện giới thiệu bằng tên và mô tả trung tính."
  },
  {
    "id": "thit-ga",
    "name": "Thịt gà",
    "category": "thit",
    "catName": "Thịt & thực phẩm",
    "image": "chicken.webp",
    "badge": "Danh mục định hướng",
    "intro": "Nhóm thịt gia cầm hướng đến nhu cầu tiêu dùng và chế biến với tiêu chuẩn chất lượng phù hợp.",
    "points": [
      "Gà nguyên con hoặc sơ chế",
      "Các phần thịt theo nhu cầu",
      "Kiểm soát điều kiện bảo quản"
    ],
    "application": "Gia đình, nhà hàng, đơn vị cung ứng",
    "verification": "Chưa có hồ sơ xác minh ứng dụng thảo dược cho dòng sản phẩm này; hiện giới thiệu bằng tên và mô tả trung tính."
  },
  {
    "id": "thit-heo",
    "name": "Thịt heo",
    "category": "thit",
    "catName": "Thịt & thực phẩm",
    "image": "pork.webp",
    "badge": "Đang nghiên cứu",
    "intro": "Nghiên cứu sản phẩm thịt heo với các phần thịt, khối lượng và quy cách đóng gói phục vụ nhiều kênh bán.",
    "points": [
      "Phân loại các phần thịt",
      "Quy cách đóng gói linh hoạt",
      "Hồ sơ nguồn cung và chất lượng"
    ],
    "application": "Gia đình, cửa hàng, nhà hàng",
    "verification": "Chưa có hồ sơ xác minh ứng dụng thảo dược cho dòng sản phẩm này; hiện giới thiệu bằng tên và mô tả trung tính."
  },
  {
    "id": "thit-bo",
    "name": "Thịt bò",
    "category": "thit",
    "catName": "Thịt & thực phẩm",
    "image": "beef.webp",
    "badge": "Đang nghiên cứu",
    "intro": "Định hướng phát triển các sản phẩm thịt bò theo phân khúc gia đình và kênh cung ứng chuyên nghiệp.",
    "points": [
      "Phân loại theo nhu cầu chế biến",
      "Đóng gói và bảo quản phù hợp",
      "Kiểm soát nguồn cung theo lô"
    ],
    "application": "Gia đình, nhà hàng, khách hàng B2B",
    "verification": "Chưa có hồ sơ xác minh ứng dụng thảo dược cho dòng sản phẩm này; hiện giới thiệu bằng tên và mô tả trung tính."
  },
  {
    "id": "thao-moc",
    "name": "Thảo dược & nguyên liệu",
    "category": "nongsan",
    "catName": "Thảo dược & nông sản",
    "image": "herbs.webp",
    "badge": "Đang nghiên cứu",
    "intro": "Nghiên cứu nguồn nguyên liệu thảo dược phù hợp điều kiện vùng trồng và định hướng phát triển sản phẩm. Danh mục loài, vùng trồng và quy cách cụ thể cần được xác minh.",
    "points": [
      "Xác minh loại thảo dược và đơn vị cung ứng",
      "Xây dựng hồ sơ chăm sóc, thu hoạch và mã lô",
      "Nghiên cứu sơ chế, bảo quản theo từng nguyên liệu"
    ],
    "application": "Người tiêu dùng và đối tác chế biến",
    "verification": "Đang chờ hồ sơ xác nhận loại cây, nguồn nguyên liệu, quy cách và chất lượng; ảnh chỉ là minh họa, chưa xác nhận thành phần sản phẩm."
  },
  {
    "id": "rau-cu",
    "name": "Rau củ & nông sản",
    "category": "nongsan",
    "catName": "Thảo dược & nông sản",
    "image": "vegetables.webp",
    "badge": "Đang nghiên cứu",
    "intro": "Mở rộng danh mục nông sản, sơ chế và đóng gói theo nhu cầu tiêu dùng thực tế.",
    "points": [
      "Danh mục rau củ theo mùa",
      "Đóng gói thuận tiện",
      "Theo dõi nguồn cung theo lô"
    ],
    "application": "Gia đình, cửa hàng và đối tác thương mại",
    "verification": "Chưa có hồ sơ xác minh ứng dụng thảo dược cho dòng sản phẩm này; hiện giới thiệu bằng tên và mô tả trung tính."
  },
  {
    "id": "thuc-pham-che-bien",
    "name": "Sản phẩm từ thảo dược",
    "category": "chebien",
    "catName": "Sản phẩm giá trị gia tăng",
    "image": "prepared.webp",
    "badge": "Nghiên cứu phát triển",
    "intro": "Nghiên cứu khả năng phát triển sản phẩm từ nguyên liệu thảo dược. Chưa công bố công thức, thành phần hoặc quy cách thương mại khi chưa có hồ sơ xác minh.",
    "points": [
      "Nghiên cứu lựa chọn nguyên liệu thảo dược",
      "Đánh giá quy trình sơ chế và bảo quản phù hợp",
      "Xác minh thành phần và hồ sơ chất lượng trước công bố"
    ],
    "application": "Gia đình, đối tác thương mại",
    "verification": "Danh mục nghiên cứu; chưa có hồ sơ công thức, thành phần, công dụng hay tình trạng thương mại được xác minh."
  },
  {
    "id": "combo-gia-dinh",
    "name": "Giỏ thực phẩm gia đình",
    "category": "chebien",
    "catName": "Sản phẩm giá trị gia tăng",
    "image": "vegetables.webp",
    "badge": "Ý tưởng dịch vụ",
    "intro": "Một danh mục kết hợp theo nhu cầu tiêu dùng hằng tuần, phụ thuộc nguồn cung và sản phẩm thực tế.",
    "points": [
      "Giỏ theo nhu cầu gia đình",
      "Lịch đặt và giao linh hoạt",
      "Điều chỉnh theo nguồn cung thực tế"
    ],
    "application": "Hộ gia đình",
    "verification": "Chưa có hồ sơ xác minh ứng dụng thảo dược cho dòng sản phẩm này; hiện giới thiệu bằng tên và mô tả trung tính."
  }
];

export const ARTICLES: Article[] = [
  {
    "id": "hanh-trinh-thuc-pham",
    "tag": "Kiến thức",
    "title": "Từ vùng nguyên liệu thảo dược đến sản phẩm: cần ghi nhận gì?",
    "image": "farm-aerial.webp",
    "description": "Ghi nhận nguồn thảo dược, quá trình chăm sóc, thu hoạch và sản xuất để liên kết hồ sơ theo từng lô.",
    "sections": [
      [
        "Bắt đầu từ nguồn thảo dược",
        "Hồ sơ cần xác định loại nguyên liệu, vùng trồng, đơn vị cung ứng và mã lô đầu vào. Thông tin thiếu căn cứ cần được xác minh trước khi công bố."
      ],
      [
        "Theo dõi chăm sóc và sản xuất",
        "Nhật ký chăm sóc, thời điểm thu hoạch, sơ chế, bảo quản và sản xuất cần được liên kết theo lô để có thể đối chiếu."
      ],
      [
        "Công bố đúng phạm vi",
        "Định hướng phát triển thảo dược không xác nhận thành phần của tất cả sản phẩm. Chỉ công bố nguyên liệu, quy trình và thông tin chất lượng đã có hồ sơ."
      ]
    ]
  },
  {
    "id": "truy-xuat-nguon-goc",
    "tag": "Công nghệ",
    "title": "Mã QR và truy xuất nguồn gốc khác nhau như thế nào?",
    "image": "lab.webp",
    "description": "Mã QR là điểm truy cập; giá trị thực nằm ở dữ liệu và quy trình phía sau.",
    "sections": [
      [
        "Mã QR chỉ là điểm bắt đầu",
        "Một mã liên kết không tự chứng minh chất lượng, thành phần thảo dược hoặc việc áp dụng một quy trình sản xuất."
      ],
      [
        "Dữ liệu cần được kiểm soát",
        "Nhật ký lô, kiểm nghiệm và sự kiện phân phối phải có đơn vị chịu trách nhiệm cập nhật."
      ],
      [
        "Minh bạch có giới hạn hợp lý",
        "Không công bố dữ liệu nhạy cảm hoặc nội dung chưa được kiểm chứng."
      ]
    ]
  },
  {
    "id": "nong-nghiep-tuan-hoan",
    "tag": "Nông nghiệp",
    "title": "Vùng nguyên liệu thảo dược: chăm sóc và quản lý theo lô",
    "image": "herbs.webp",
    "description": "Những thông tin cần chuẩn bị khi nghiên cứu vùng thảo dược và quy trình chăm sóc, thu hoạch.",
    "sections": [
      [
        "Khảo sát điều kiện vùng trồng",
        "Cần đối chiếu điều kiện tự nhiên, nguồn giống và hồ sơ đất đai trước khi lựa chọn nguyên liệu thảo dược. Chưa đủ dữ liệu để khẳng định vùng trồng đã vận hành."
      ],
      [
        "Ghi nhận quá trình chăm sóc",
        "Nhật ký nên ghi rõ công việc chăm sóc, vật tư sử dụng, thời điểm thực hiện và người chịu trách nhiệm để đối chiếu theo lô."
      ],
      [
        "Liên kết thu hoạch và bảo quản",
        "Lô thu hoạch cần gắn với nguyên liệu đầu vào, quá trình sơ chế và điều kiện bảo quản. Các thông số cụ thể phải dựa trên hồ sơ từng nguyên liệu."
      ]
    ]
  },
  {
    "id": "chon-thuc-pham",
    "tag": "Đời sống",
    "title": "Bốn thông tin nên xem trước khi chọn thực phẩm đóng gói",
    "image": "eggs.webp",
    "description": "Nguồn gốc, đơn vị chịu trách nhiệm, bảo quản và thời hạn sử dụng.",
    "sections": [
      [
        "Đơn vị chịu trách nhiệm",
        "Kiểm tra tên và thông tin tổ chức chịu trách nhiệm về sản phẩm."
      ],
      [
        "Hạn sử dụng",
        "Xem ngày sản xuất, hạn dùng và tình trạng bao bì."
      ],
      [
        "Điều kiện bảo quản",
        "Bảo đảm sản phẩm được vận chuyển và giữ trong điều kiện thích hợp."
      ],
      [
        "Chứng nhận",
        "Chỉ tham khảo chứng nhận hợp lệ, còn hiệu lực và đúng phạm vi sản phẩm."
      ],
      [
        "Thông tin về thảo dược",
        "Nếu sản phẩm được giới thiệu có ứng dụng thảo dược, cần kiểm tra thành phần hoặc thông tin quy trình có căn cứ. Không suy diễn công dụng điều trị từ tên nguyên liệu hay tên thương hiệu."
      ]
    ]
  }
];
