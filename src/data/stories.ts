import story1 from "../assets/story1.jpg";
import story1_2 from "../assets/story1-2.jpg";
import story2 from "../assets/story2.jpg";
import story2_2 from "../assets/story2-2.jpg";
import story2_3 from "../assets/story2-3.jpg";
import story2_4 from "../assets/story2-4.jpg";
import story2_5 from "../assets/story2-5.jpg";
import story3 from "../assets/story3.jpg";
import story3_2 from "../assets/story3-2.jpg";
import story4 from "../assets/story4.jpg";
import story4_2 from "../assets/story4-2.jpg";
import story4_3 from "../assets/story4-3.jpg";
import story4_4 from "../assets/story4-4.jpg";
import story4_5 from "../assets/story4-5.jpg";

export interface Story {
  id: number;
  title: string;
  cardTitle: string;
  cardImage: string;
  images: string[];
  description: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Gắn kết cùng Sun Life",
    cardTitle: "Câu Chuyện Sun Life",
    cardImage: story1,
    images: [story1, story1_2],
    description:
      "Mỗi món quà là một lời cảm ơn. Đồng hành cùng Sun Life, Mars Group đã cùng xây dựng những bộ quà tặng dành cho khách hàng và đối tác với sự chỉn chu trong từng chi tiết. Từ ý tưởng đến thành phẩm, mỗi sản phẩm đều góp phần truyền tải sự trân trọng và giá trị mà Sun Life mong muốn gửi gắm.",
  },
  {
    id: 2,
    title: "Kết nối cùng Generali",
    cardTitle: "Câu Chuyện Generali",
    cardImage: story2,
    images: [story2, story2_2, story2_3, story2_4, story2_5],
    description:
      "Mars Group vinh dự đồng hành cùng Generali trong hành trình “Kết nối trăm điểm tin cậy”, mang không khí sôi động đến các văn phòng GenCasa trên toàn quốc. Với sản phẩm LEO nhồi bông và LEO móc khóa được thiết kế đồng bộ, chúng tôi góp phần lan tỏa thông điệp tích cực và tạo nên những trải nghiệm đáng nhớ cho khách hàng, đối tác và đội ngũ Generali.",
  },
  {
    id: 3,
    title: "Sự chăm chút của Mars Group",
    cardTitle: "Câu Chuyện Mars Group",
    cardImage: story3,
    images: [story3, story3_2],
    description:
      "Phía sau mỗi sản phẩm là những ngày làm việc khẩn trương của đội ngũ Mars Group. Khi thời gian gấp rút, các bộ phận luôn sát cánh hỗ trợ nhau để hoàn thành từng công đoạn đúng kế hoạch, từ sản xuất, kiểm tra chất lượng đến đóng gói. Chính tinh thần đồng đội ấy giúp mỗi đơn hàng được bàn giao đúng tiến độ mà vẫn giữ trọn sự chỉn chu trong từng chi tiết.",
  },
  {
    id: 4,
    title: "Trải nghiệm cùng Manulife",
    cardTitle: "Câu Chuyện Manulife",
    cardImage: story4,
    images: [story4, story4_2, story4_3, story4_4, story4_5],
    description:
      "Manulife mang đến các hoạt động trải nghiệm và cộng đồng nhằm khuyến khích lối sống khỏe mạnh và gắn kết mọi người. Mars Group góp phần hoàn thiện chương trình bằng những sản phẩm quà tặng chất lượng, được thiết kế đồng bộ với hình ảnh thương hiệu.",
  },
];
