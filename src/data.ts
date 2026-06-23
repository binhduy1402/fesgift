import { Collection, PhilosophyItem, WorkflowStep, Project, Testimonial } from "./types";

export const BRAND_INFO = {
  name: "FESGift",
  tagline: "Heritage & Grace",
  hotline: "0931 133 790",
  email: "fesgift@mars-vn.com",
  address: "District 1, Ho Chi Minh City, Vietnam",
};

export const NAVIGATION_LINKS = [
  { label: "Về FESGift", href: "#our-story" },
  { label: "Triết Lý 3T", href: "#philosophy" },
  { label: "Bộ Sưu Tập", href: "#collections" },
  { label: "Quy Trình", href: "#process" },
  { label: "Dự Án", href: "#projects" },
  { label: "Đánh Giá", href: "#testimonials" },
];

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: "tam",
    title: "THỂ HIỆN THỰC LỰC",
    description: "Sự chỉn chu trong từng món quà khẳng định vị thế và năng lực vượt trội của doanh nghiệp trong mắt đối tác.",
    iconName: "Gift",
  },
  {
    id: "tam-2",
    title: "TRẢI NGHIỆM KHÁCH HÀNG",
    description: "Mọi điểm chạm từ bao bì tinh xảo đến nội dung bên trong đều được tối ưu hóa để tạo nên cảm xúc thăng hoa trọn vẹn.",
    iconName: "Award",
  },
  {
    id: "tin",
    title: "TÍNH CÁCH NỔI BẬT",
    description: "Cá nhân hóa tối đa theo bản sắc và ngôn ngữ thương hiệu riêng biệt, tạo nên dấu ấn độc bản khó phai mờ.",
    iconName: "Fingerprint",
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "corporate",
    title: "Quà Doanh Nghiệp",
    description: "Giải pháp quà tặng đối tác ngoại giao, khách hàng VIP tinh tế, tôn vinh giá trị văn hóa và nâng tầm mối quan hệ hợp tác lâu dài.",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=800&auto=format&fit=crop",
    badge: "BÁN CHẠY NHẤT",
    highlights: ["Sản phẩm văn hoá chọn lọc", "Bao bì sơn mài cao cấp", "Thiết kế logo ép kim"],
  },
  {
    id: "event",
    title: "Quà Sự Kiện",
    description: "Thiết kế đồng bộ theo chủ đề hội nghị, lễ kỷ niệm hay ra mắt sản phẩm mới. Tối ưu hóa độ nhận nhận diện thương hiệu tuyệt đối.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    badge: "ĐỘC ĐÁO & ẤN TƯỢNG",
    highlights: ["Tùy biến theo chủ đề sự kiện", "Sản xuất nhanh, số lượng lớn", "Bộ Kit quà tặng đa dụng"],
  },
  {
    id: "personalized",
    title: "Quà Cá Nhân Hóa",
    description: "Khắc tên, in dập nổi logo trên các chất liệu da thuộc, gỗ tự nhiên hay kim loại cao cấp. Mỗi món quà là một tác phẩm nghệ thuật duy nhất.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    badge: "ĐỘC BẢN SANG TRỌNG",
    highlights: ["Khắc logo/Tên bằng Laser CNC", "Chất liệu cao cấp tự nhiên", "Thiết kế riêng cho từng cá nhân"],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "step1",
    num: "01",
    title: "TƯ VẤN",
    desc: "Tìm hiểu nhu cầu, ngân sách và thấu hiểu thông điệp thương hiệu cần truyền tải.",
  },
  {
    id: "step2",
    num: "02",
    title: "Ý TƯỞNG",
    desc: "Phác thảo các concept độc đáo, lồng ghép khéo léo yếu tố nghệ thuật & di sản.",
  },
  {
    id: "step3",
    num: "03",
    title: "THIẾT KẾ",
    desc: "Dựng hình ảnh 3D chân thực, mô phỏng bao bì và chất liệu một cách trực quan nhất.",
  },
  {
    id: "step4",
    num: "04",
    title: "SẢN XUẤT",
    desc: "Gia công chế tác thủ công tinh xảo kết hợp công nghệ hiện đại dưới giám sát chặt chẽ.",
  },
  {
    id: "step5",
    num: "05",
    title: "KIỂM ĐỊNH",
    desc: "Kiểm tra chất lượng nghiêm ngặt từng chi tiết hoàn thiện trước khi đóng gói.",
  },
  {
    id: "step6",
    num: "06",
    title: "GIAO HÀNG",
    desc: "Vận chuyển an toàn, nhanh chóng theo quy chuẩn cao cấp của FESGift.",
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Bộ Quà Trung Thu Song Ngư Cát Tường",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    category: "Doanh Nghiệp",
    longDescription: "Dự án thiết kế riêng hộp quà Trung Thu cho Tập đoàn Tài chính Tech Global, kết hợp tranh sớ Đông Hồ dát vàng và bánh nghệ nhân thượng hạng truyền thống.",
    client: "Tech Global Corporation",
    year: "2025",
    components: ["Hộp gỗ sơn mài đỏ cherry", "Bộ ấm trà gốm Bát Tràng", "4 bánh trung thu nghệ nhân", "Trà tôm nõn Tân Cương"],
  },
  {
    id: "proj2",
    title: "Bộ Bình Ly Thép Không Gỉ Pastel Matte",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    category: "Sự Kiện",
    longDescription: "Sản phẩm quà tặng sinh thái sang trọng đại hội thường niên với khả năng giữ nhiệt vượt trội lên đến 24h, hoàn thiện phủ sơn nhám cực kỳ sang trọng.",
    client: "Green Future Fund",
    year: "2025",
    components: ["Bình giữ nhiệt 750ml dập nổi logo", "2 ly thủy tinh có ống hút chịu nhiệt", "Hộp quà bìa cứng Kraft ép kim vàng"],
  },
  {
    id: "proj3",
    title: "Hộp Quà Kỳ Ẩn Hoàng Gia Gốm Sứ",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    category: "Doanh Nghiệp",
    longDescription: "Sự kết hợp hoàn hảo giữa gốm men lam cao cấp và sản vật núi rừng Tây Bắc tạo nên set quà ấm lòng những đối tác nước ngoài quan trọng.",
    client: "Vietnam Heritage Foundation",
    year: "2024",
    components: ["Hũ trà gốm vẽ tay", "Trà cổ thụ San Tuyết", "Bộ khay đĩa gỗ xà cừ", "Hộp quà da PU thêu dập nổi"],
  },
  {
    id: "proj4",
    title: "Bao Da Laptop & Sổ Tay Da Thuộc",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    category: "Cá Nhân Hóa",
    longDescription: "Thiết kế da bò Mill thật 100% may tay thủ công hoàn toàn, dập tên riêng của thành viên Hội đồng Quản trị bằng tiếng Pháp tinh tế.",
    client: "Vilas International",
    year: "2024",
    components: ["Bao da Macbook Pro 14 inch", "Sổ tay da thay ruột cao cấp", "Bút ký kim loại khắc laser", "Bao đựng thẻ đồng bộ"],
  },
  {
    id: "proj5",
    title: "Hộp Hương Sắc Bình Yên Nến Thơm",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
    category: "Cá Nhân Hóa",
    longDescription: "Bộ quà tặng mang lại không gian thư giãn an lành cho phái nữ với nến đậu nành thiên nhiên, xà phòng hữu cơ và hoa hồng khô organic.",
    client: "Spa & Beauty Group",
    year: "2025",
    components: ["2 hũ nến tinh dầu 200g", "Xà phòng muối biển ép lạnh", "Khăn lụa tơ tằm Bảo Lộc", "Hộp quà sồi tự nhiên"],
  },
  {
    id: "proj6",
    title: "Bình Giữ Nhiệt Nordic Gradient Thủy Tinh",
    image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop",
    category: "Sự Kiện",
    longDescription: "Thiết kế mang hơi thở Bắc Âu hiện đại với dải màu gradient bắt mắt, là giải pháp quà tặng năng động tuyệt vời cho ngày hội sức khoẻ doanh nghiệp.",
    client: "Active Life Lifestyle",
    year: "2025",
    components: ["Bình thể thao kim loại cao cấp 1L", "Bao silicone bảo vệ chống va đập", "Hộp kraft lót rơm thân thiện môi trường"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    content: "FESGift đã thực sự thay đổi cách chúng tôi nhìn nhận về quà tặng doanh nghiệp. Từ khâu tư vấn đến sản phẩm cuối cùng đều mang lại sự tử tế và chuyên nghiệp. Đối tác của chúng tôi cực kỳ ấn tượng với bộ quà Tết năm nay.",
    author: "Ms. Phương Thảo",
    role: "Giám đốc Marketing",
    company: "Tech Global Corp",
  },
  {
    id: "t2",
    content: "Dịch vụ của FESGift vô cùng hoàn hảo nhờ vào khả năng lắng nghe và hiện thực hóa cực tốt ý tưởng của thương hiệu. Khách hàng thân thiết của chúng tôi khen ngợi bao da laptop khắc tên thật sự đẳng cấp và hữu dụng.",
    author: "Mr. Minh Khang",
    role: "Giám đốc Nhân sự",
    company: "Vilas International",
  },
  {
    id: "t3",
    content: "Rất hiếm đơn vị quà tặng nào tại Việt Nam có gu thẩm mỹ thanh lịch đậm chất di sản mà vẫn trẻ trung như FESGift. Việc sản xuất 1000 bộ quà tặng đạt tỷ lệ hoàn mỹ 100% là một nỗ lực tuyệt vời từ phòng QC.",
    author: "Ms. Hồng Vân",
    role: "Quản lý Thương hiệu",
    company: "Vietnam Heritage Foundation",
  },
];
