import story1 from "../assets/story1.jpg";
import story1_2 from "../assets/story1-2.jpg";
import story1_3 from "../assets/story1-3.jpg";
import story2 from "../assets/story2.jpg";
import story2_2 from "../assets/story2-2.jpg";
import story2_3 from "../assets/story2-3.jpg";
import story2_4 from "../assets/story2-4.jpg";
import story2_5 from "../assets/story2-5.jpg";
import story3 from "../assets/story3.jpg";
import story3_2 from "../assets/story3-2.jpg";
import story4 from "../assets/story4.jpg";
import story41 from "../assets/story4-1.jpg";
import story4video1 from "../assets/story4.mp4";
import story4video2 from "../assets/story4-2.mp4";


export interface Story {
  id: number;
  title: string;
  cardTitle: string;
  cardImage: string;
  images: string[];
  videos?: string[];
  imageFit?: "cover" | "contain";
  description: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Kết nối cùng Generali",
    cardTitle: "Kết nối cùng Generali",
    cardImage: story1,
    images: [story1, story1_2, story1_3],
    imageFit: "contain",
    description:
      "Mars Group vinh dự đồng hành cùng Generali trong hành trình “Kết nối trăm điểm tin cậy”, mang không khí sôi động đến các văn phòng GenCasa trên toàn quốc. Với sản phẩm LEO nhồi bông và LEO móc khóa được thiết kế đồng bộ, chúng tôi góp phần lan tỏa thông điệp tích cực và tạo nên những trải nghiệm đáng nhớ cho khách hàng, đối tác và đội ngũ Generali.",
  },
  {
    id: 2,
    title: "365 ngày - Không bỏ lỡ một sinh nhật",
    cardTitle: "365 ngày - Không bỏ lỡ một sinh nhật",
    cardImage: story2,
    images: [story2, story2_2, story2_3, story2_4, story2_5],
    imageFit: "cover",
    description:
      "Với hệ thống quản lý ngày đặc biệt và mạng lưới giao hoa tại 34 tỉnh thành, Mars Group đảm bảo mỗi khách hàng VIP của quý khách đều nhận được món quà đúng ngày sinh nhật – thay mặt quý khách, mang thương hiệu đến gần trái tim khách hàng hơn.",
  },
  {
    id: 3,
    title: "Sự chăm chút của Mars Group",
    cardTitle: "Câu Chuyện Mars Group",
    cardImage: story3,
    images: [story3, story3_2],
    imageFit: "cover",
    description:
      "Phía sau mỗi sản phẩm là những ngày làm việc khẩn trương của đội ngũ Mars Group. Khi thời gian gấp rút, các bộ phận luôn sát cánh hỗ trợ nhau để hoàn thành từng công đoạn đúng kế hoạch, từ sản xuất, kiểm tra chất lượng đến đóng gói. Chính tinh thần đồng đội ấy giúp mỗi đơn hàng được bàn giao đúng tiến độ mà vẫn giữ trọn sự chỉn chu trong từng chi tiết.",
  },
  {
    id: 4,
    title: "Từ ý tưởng đến sản phẩm hoàn thiện",
    cardTitle: "Từ ý tưởng đến sản phẩm hoàn thiện",
    cardImage: story41,
    images: [story4],
    videos: [
      story4video1,
      story4video2,
  ],
    imageFit: "cover",
    description:
      "Nhân Dịp 30/4 kỉ niệm 51 năm giải phóng miền Nam thống nhất đất nước, Mars Group cùng khách hàng tạo nên sản phẩm tuyệt vời – mỗi mascot là một phiên bản được customize theo đúng bộ nhận diện thương hiệu của quý khách.",
  },
];
