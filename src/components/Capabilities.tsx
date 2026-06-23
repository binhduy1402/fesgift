import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Thiết Kế Riêng Theo Thương Hiệu",
    description:
      "Mỗi bộ quà được phát triển dựa trên nhận diện thương hiệu, thông điệp và mục tiêu truyền thông riêng của doanh nghiệp.",
  },
  {
    number: "02",
    title: "In Logo & Cá Nhân Hóa",
    description:
      "Logo, tên khách hàng hoặc thông điệp tri ân được thể hiện đồng nhất trên từng chi tiết sản phẩm và bao bì.",
  },
  {
    number: "03",
    title: "Sản Xuất Theo Yêu Cầu",
    description:
      "Linh hoạt số lượng, chất liệu, ngân sách và tiến độ cho từng chiến dịch quà tặng doanh nghiệp.",
  },
  {
    number: "04",
    title: "Đóng Gói Cao Cấp",
    description:
      "Thiết kế hộp quà đồng bộ, chỉn chu và nâng cao trải nghiệm mở hộp cho người nhận.",
  },
  {
    number: "05",
    title: "Giao Hàng Toàn Quốc",
    description:
      "Đảm bảo chất lượng và tiến độ giao hàng cho các chương trình tri ân, hội nghị và sự kiện.",
  },
  {
    number: "06",
    title: "Đồng Hành Từ Ý Tưởng Đến Hoàn Thiện",
    description:
      "Tư vấn, thiết kế, sản xuất và bàn giao trong một quy trình thống nhất, minh bạch.",
  },
];

export default function Capabilities() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#fffdf9] py-24"
    >
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#7c142b]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-2 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
            NĂNG LỰC TRIỂN KHAI
          </span>

          <h2 className="font-serif text-4xl font-bold text-[#1f1f1f]">
            Vì Sao Doanh Nghiệp Chọn FESGift
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Không chỉ là quà tặng, FESGift mang đến giải pháp xây dựng hình ảnh
            thương hiệu thông qua những trải nghiệm được thiết kế riêng.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="
                group
                rounded-2xl
                border
                border-[#7c142b]/10
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="mb-6 font-serif text-4xl font-bold text-[#c9a227]">
                {item.number}
              </div>

              <h3 className="mb-3 text-lg font-bold text-[#1f1f1f]">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-[#c9a227] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl luxury-gradient p-10 text-center text-white">
          <h3 className="font-serif text-3xl font-bold">
            Bạn đang tìm giải pháp quà tặng cho doanh nghiệp?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
            Hãy chia sẻ nhu cầu của bạn, đội ngũ FESGift sẽ tư vấn giải pháp phù
            hợp và xây dựng báo giá theo yêu cầu hoàn toàn miễn phí.
          </p>

          <button
            onClick={scrollToContact}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-8
              py-4
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[#7c142b]
              transition-all
              hover:-translate-y-1
            "
          >
            Nhận Tư Vấn Miễn Phí
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
