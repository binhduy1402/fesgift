import { Collection, PhilosophyItem, WorkflowStep, Project, Testimonial } from "./types";

import collection1 from "./assets/collection/collection1.jpg";
import collection2 from "./assets/collection/collection2.jpg";
import collection3 from "./assets/collection/collection3.jpg";
import collection4 from "./assets/collection/collection4.jpg";

export const BRAND_INFO = {
  name: "Mars Group",
  tagline: "Heritage & Grace",
  hotline: "0931 133 790",
  email: "fesgift@mars-vn.com",
  address: "District 2, Ho Chi Minh City, VietNam",
};

export const COMPANY_STATS = [
{
value: "34",
label: "Tỉnh thành phục vụ",
},
{
value: "200+",
label: "Khách hàng doanh nghiệp",
},
{
value: "50.000+",
label: "Quà tặng mỗi năm",
},
{
value: "8+",
label: "Năm kinh nghiệm",
},
];

export const NAVIGATION_LINKS = [
{ label: "Năng Lực", href: "#our-story" },
{ label: "Sản Phẩm", href: "#collections" },
{ label: "Câu Chuyện", href: "#philosophy" },
{ label: "Dự Án", href: "#capabilities" },
{ label: "Liên Hệ", href: "#contact" },
];

export const COLLECTIONS: Collection[] = [
{
id: "customer-gifts",
title: "Quà Khách Hàng",
tagline: "Tăng độ ghi nhớ thương hiệu",
icon: "Users",
description:
"Giải pháp quà tặng giúp doanh nghiệp xây dựng mối quan hệ bền vững và tạo trải nghiệm tích cực cho khách hàng.",
image: collection1,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-tang-cham-soc-khach-hang/",
badge: "KHÁCH HÀNG",
highlights: [
"Giftset theo nhận diện thương hiệu",
"Bao bì thiết kế riêng",
"Tăng độ ghi nhớ thương hiệu",
],
},

{
id: "event-gifts",
title: "Quà Sự Kiện",
tagline: "Đồng bộ mọi chiến dịch",
icon: "CalendarDays",
description:
"Phù hợp cho hội nghị, workshop, activation, lễ ra mắt sản phẩm và các chương trình truyền thông doanh nghiệp.",
image: collection2,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-tang-su-kien/",
badge: "SỰ KIỆN",
highlights: [
"Sản xuất số lượng lớn",
"Đồng bộ concept chương trình",
"Tiến độ triển khai nhanh",
],
},

{
id: "vip-gifts",
title: "Quà VIP",
tagline: "Khẳng định đẳng cấp đối tác",
icon: "Crown",
description:
"Dòng quà tặng cao cấp dành cho đối tác chiến lược, khách hàng quan trọng và các chương trình tri ân đặc biệt.",
image: collection3,
url: "https://fesgift.com/qua-tang-ca-nhan/qua-theo-nguoi-nhan-qua-tang-ca-nhan/cho-vip-cua-ban-qua-theo-nguoi-nhan-qua-tang-ca-nhan/",
badge: "VIP",
highlights: [
"Thiết kế sang trọng",
"Cá nhân hóa theo yêu cầu",
"Nâng tầm hình ảnh doanh nghiệp",
],
},

{
id: "employee-gifts",
title: "Quà Đội Ngũ",
tagline: "Gắn kết và truyền cảm hứng",
icon: "UsersRound",
description:
"Welcome Kit, quà sinh nhật, lễ tết và các chương trình nội bộ giúp nâng cao trải nghiệm nhân sự.",
image: collection4,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-gan-ket-doi-ngu/",
badge: "NỘI BỘ",
highlights: [
"Welcome Kit",
"Quà sinh nhật nhân viên",
"Quà lễ tết doanh nghiệp",
],
},
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
{
id: "step1",
num: "01",
title: "TRAO ĐỔI NHU CẦU",
desc: "Chia sẻ ngân sách, số lượng, đối tượng nhận quà và mục tiêu chương trình.",
},
{
id: "step2",
num: "02",
title: "THIẾT KẾ & BÁO GIÁ",
desc: "FESGift đề xuất giải pháp, thiết kế và gửi báo giá phù hợp với yêu cầu.",
},
{
id: "step3",
num: "03",
title: "SẢN XUẤT & GIAO HÀNG",
desc: "Triển khai sản xuất, kiểm soát chất lượng và giao hàng đúng tiến độ.",
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

export const FEATURED_PROJECTS = [
  {
    id: "p1",
    title: "Quà Tặng Tết Doanh Nghiệp",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    category: "Doanh Nghiệp",
    longDescription: "Thiết kế và sản xuất bộ quà Tết cao cấp, đồng bộ theo nhận diện thương hiệu.",
    client: "Tập đoàn ABC",
    year: "2025",
    components: ["Hộp quà", "Sổ da", "Bút ký", "Thiệp cảm ơn"],
  },
  {
    id: "p2",
    title: "Giftset Sự Kiện Cao Cấp",
    image: "https://images.unsplash.com/photo-1523292567660-6ad889b7838a?q=80&w=800&auto=format&fit=crop",
    category: "Sự Kiện",
    longDescription: "Giftset đồng bộ cho sự kiện ra mắt sản phẩm, tối ưu trải nghiệm khách mời.",
    client: "Generali",
    year: "2024",
    components: ["Hộp quà", "Bình giữ nhiệt", "Sổ tay", "Đèn LED"],
  },
  {
    id: "p3",
    title: "Quà VIP Cá Nhân Hóa",
    image: "https://images.unsplash.com/photo-1515397133193-5a29f7f5fb2a?q=80&w=800&auto=format&fit=crop",
    category: "Cá Nhân Hóa",
    longDescription: "Quà VIP dành cho đối tác chiến lược, cá nhân hóa theo yêu cầu từng người nhận.",
    client: "Mars Group",
    year: "2025",
    components: ["Ví da", "Bút ký", "Hộp quà độc quyền"],
  },
];
