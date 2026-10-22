import { Product, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'trung-ga',
    name: 'Trứng gà',
    category: 'trung',
    catName: 'Trứng & gia cầm',
    image: 'eggs.webp',
    badge: 'Danh mục định hướng',
    intro: 'Phát triển dòng trứng gà phục vụ tiêu dùng gia đình, cửa hàng thực phẩm và khách hàng doanh nghiệp.',
    points: [
      'Phân loại theo quy cách phù hợp',
      'Theo dõi theo lô thu hoạch',
      'Minh bạch thông tin đóng gói và bảo quản'
    ],
    application: 'Gia đình, cửa hàng thực phẩm, kênh B2B'
  },
  {
    id: 'thit-ga',
    name: 'Thịt gà',
    category: 'thit',
    catName: 'Thịt & thực phẩm',
    image: 'chicken.webp',
    badge: 'Danh mục định hướng',
    intro: 'Nhóm thịt gia cầm hướng đến nhu cầu tiêu dùng và chế biến với tiêu chuẩn chất lượng phù hợp.',
    points: [
      'Gà nguyên con hoặc sơ chế',
      'Các phần thịt theo nhu cầu',
      'Kiểm soát điều kiện bảo quản'
    ],
    application: 'Gia đình, nhà hàng, đơn vị cung ứng'
  },
  {
    id: 'thit-heo',
    name: 'Thịt heo',
    category: 'thit',
    catName: 'Thịt & thực phẩm',
    image: 'pork.webp',
    badge: 'Đang nghiên cứu',
    intro: 'Nghiên cứu sản phẩm thịt heo với các phần thịt, khối lượng và quy cách đóng gói phục vụ nhiều kênh bán.',
    points: [
      'Phân loại các phần thịt',
      'Quy cách đóng gói linh hoạt',
      'Hồ sơ nguồn cung và chất lượng'
    ],
    application: 'Gia đình, cửa hàng, nhà hàng'
  },
  {
    id: 'thit-bo',
    name: 'Thịt bò',
    category: 'thit',
    catName: 'Thịt & thực phẩm',
    image: 'beef.webp',
    badge: 'Đang nghiên cứu',
    intro: 'Định hướng phát triển các sản phẩm thịt bò theo phân khúc gia đình và kênh cung ứng chuyên nghiệp.',
    points: [
      'Phân loại theo nhu cầu chế biến',
      'Đóng gói và bảo quản phù hợp',
      'Kiểm soát nguồn cung theo lô'
    ],
    application: 'Gia đình, nhà hàng, khách hàng B2B'
  },
  {
    id: 'thao-moc',
    name: 'Thảo mộc & nguyên liệu',
    category: 'nongsan',
    catName: 'Thảo mộc & nông sản',
    image: 'herbs.webp',
    badge: 'Đang nghiên cứu',
    intro: 'Nghiên cứu nhóm cây thảo mộc, nguyên liệu nông nghiệp phù hợp vùng trồng và nhu cầu thị trường.',
    points: [
      'Thảo mộc tươi và nguyên liệu',
      'Phát triển theo điều kiện vùng trồng',
      'Nghiên cứu chế biến gia tăng giá trị'
    ],
    application: 'Người tiêu dùng và đối tác chế biến'
  },
  {
    id: 'rau-cu',
    name: 'Rau củ & nông sản',
    category: 'nongsan',
    catName: 'Thảo mộc & nông sản',
    image: 'vegetables.webp',
    badge: 'Đang nghiên cứu',
    intro: 'Mở rộng danh mục nông sản, sơ chế và đóng gói theo nhu cầu tiêu dùng thực tế.',
    points: [
      'Danh mục rau củ theo mùa',
      'Đóng gói thuận tiện',
      'Theo dõi nguồn cung theo lô'
    ],
    application: 'Gia đình, cửa hàng và đối tác thương mại'
  },
  {
    id: 'thuc-pham-che-bien',
    name: 'Thực phẩm giá trị gia tăng',
    category: 'chebien',
    catName: 'Sản phẩm chế biến',
    image: 'prepared.webp',
    badge: 'Nghiên cứu phát triển',
    intro: 'Định hướng các sản phẩm từ nông sản và thảo mộc nhằm gia tăng giá trị và đa dạng hóa sản phẩm.',
    points: [
      'Sơ chế, đóng gói phù hợp',
      'Nghiên cứu quy cách thương mại',
      'Phát triển từ nhu cầu thị trường'
    ],
    application: 'Gia đình, đối tác thương mại'
  },
  {
    id: 'combo-gia-dinh',
    name: 'Giỏ thực phẩm gia đình',
    category: 'chebien',
    catName: 'Sản phẩm chế biến',
    image: 'products-close.webp',
    badge: 'Ý tưởng dịch vụ',
    intro: 'Một danh mục kết hợp theo nhu cầu tiêu dùng hằng tuần, phụ thuộc nguồn cung và sản phẩm thực tế.',
    points: [
      'Giỏ theo nhu cầu gia đình',
      'Lịch đặt và giao linh hoạt',
      'Điều chỉnh theo nguồn cung thực tế'
    ],
    application: 'Hộ gia đình'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'hanh-trinh-thuc-pham',
    tag: 'Kiến thức',
    title: 'Từ trang trại đến bàn ăn: điều gì tạo nên sự minh bạch?',
    image: 'farm-aerial.webp',
    description: 'Tìm hiểu cách ghi nhận dữ liệu sản phẩm qua từng công đoạn của chuỗi cung ứng.',
    sections: [
      ['Bắt đầu từ nguồn cung', 'Một hệ thống minh bạch cần biết sản phẩm đến từ đâu, đơn vị nào cung cấp và hồ sơ lô đầu vào ra sao.'],
      ['Dữ liệu đi cùng sản phẩm', 'Thông tin sản xuất, sơ chế, đóng gói và vận chuyển cần được liên kết theo mã lô phù hợp.'],
      ['Khách hàng được biết gì?', 'Chỉ những thông tin đã xác minh và được phép công bố mới nên hiển thị khi tra cứu.']
    ]
  },
  {
    id: 'truy-xuat-nguon-goc',
    tag: 'Công nghệ',
    title: 'Mã QR và truy xuất nguồn gốc khác nhau như thế nào?',
    image: 'lab.webp',
    description: 'Mã QR là điểm truy cập; giá trị thực nằm ở dữ liệu và quy trình phía sau.',
    sections: [
      ['Mã QR chỉ là điểm bắt đầu', 'Một mã liên kết không tự chứng minh chất lượng hoặc chứng nhận hữu cơ.'],
      ['Dữ liệu cần được kiểm soát', 'Nhật ký lô, kiểm nghiệm và sự kiện phân phối phải có đơn vị chịu trách nhiệm cập nhật.'],
      ['Minh bạch có giới hạn hợp lý', 'Không công bố dữ liệu nhạy cảm hoặc nội dung chưa được kiểm chứng.']
    ]
  },
  {
    id: 'nong-nghiep-tuan-hoan',
    tag: 'Nông nghiệp',
    title: 'Kinh tế tuần hoàn trong nông nghiệp: bắt đầu từ đâu?',
    image: 'herbs.webp',
    description: 'Các nguyên tắc sử dụng hiệu quả nguyên liệu, nước và phụ phẩm trong sản xuất nông nghiệp.',
    sections: [
      ['Quản lý nguồn lực', 'Đo mức sử dụng nguyên liệu và nguồn nước là bước đầu của tối ưu.'],
      ['Phụ phẩm phải được xử lý', 'Tái sử dụng cần tuân thủ yêu cầu môi trường và an toàn sinh học.'],
      ['Đánh giá hiệu quả', 'Một quy trình tuần hoàn cần có giá trị kinh tế, không chỉ là thông điệp quảng cáo.']
    ]
  },
  {
    id: 'chon-thuc-pham',
    tag: 'Đời sống',
    title: 'Bốn thông tin nên xem trước khi chọn thực phẩm đóng gói',
    image: 'eggs.webp',
    description: 'Nguồn gốc, đơn vị chịu trách nhiệm, bảo quản và thời hạn sử dụng.',
    sections: [
      ['Đơn vị chịu trách nhiệm', 'Kiểm tra tên và thông tin tổ chức chịu trách nhiệm về sản phẩm.'],
      ['Hạn sử dụng', 'Xem ngày sản xuất, hạn dùng và tình trạng bao bì.'],
      ['Điều kiện bảo quản', 'Bảo đảm sản phẩm được vận chuyển và giữ trong điều kiện thích hợp.'],
      ['Chứng nhận', 'Chỉ tham khảo chứng nhận hợp lệ, còn hiệu lực và đúng phạm vi sản phẩm.']
    ]
  }
];
