import { useState } from "react";
import {
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "Giám đốc Marketing",
    company: "ABC Corporation",
    content:
      "FESGift giúp chúng tôi triển khai hơn 20.000 phần quà khách hàng trong thời gian ngắn với chất lượng đồng đều và chuyên nghiệp.",
  },
  {
    name: "Trần Hoàng Nam",
    role: "Trưởng phòng Nhân sự",
    company: "XYZ Group",
    content:
      "Đội ngũ tư vấn nhanh, thiết kế chỉn chu và hiểu rõ cách truyền tải hình ảnh thương hiệu qua từng sản phẩm.",
  },
  {
    name: "Lê Thanh Hương",
    role: "Giám đốc Kinh doanh",
    company: "Future Holdings",
    content:
      "Quà tặng cao cấp, đóng gói đẹp và đúng tiến độ. Đối tác của chúng tôi đánh giá rất cao trải nghiệm nhận quà.",
  },
];

const clientLogos = [
  "CLIENT 01",
  "CLIENT 02",
  "CLIENT 03",
  "CLIENT 04",
  "CLIENT 05",
  "CLIENT 06",
  "CLIENT 07",
  "CLIENT 08",

  "CLIENT 09",
  "CLIENT 10",
  "CLIENT 11",
  "CLIENT 12",
  "CLIENT 13",
  "CLIENT 14",
  "CLIENT 15",
  "CLIENT 16",
];

const logosPerPage = 8;

const logoPages = [];

for (let i = 0; i < clientLogos.length; i += logosPerPage) {
  logoPages.push(clientLogos.slice(i, i + logosPerPage));
}

export default function Capabilities() {
const [logoPage, setLogoPage] = useState(0);
const scrollToContact = () => {
const section = document.getElementById("contact");

if (section) {
  section.scrollIntoView({
    behavior: "smooth",
  });
}

};

return (
<section id="capabilities" className="relative overflow-hidden bg-[#fffdf9] py-24" >
<div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#7c142b]/5 blur-3xl" />
<div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c9a227]/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="mb-2 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
        KHÁCH HÀNG TIN TƯỞNG
      </span>

      <h2 className="font-serif text-4xl font-bold text-[#1f1f1f]">
        Đồng Hành Cùng Doanh Nghiệp
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        FESGift mang đến giải pháp quà tặng được thiết kế riêng,
        giúp doanh nghiệp tạo dấu ấn chuyên nghiệp với khách hàng,
        đối tác và nhân viên.
      </p>
    </div>

<div className="mb-16">

  <div className="flex items-center justify-center gap-4 mb-6">

    <button
      onClick={() =>
        setLogoPage(
          logoPage === 0
            ? logoPages.length - 1
            : logoPage - 1
        )
      }
      className="rounded-full border border-[#7c142b]/20 p-2 hover:bg-[#7c142b]/5"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>

    <button
      onClick={() =>
        setLogoPage(
          logoPage === logoPages.length - 1
            ? 0
            : logoPage + 1
        )
      }
      className="rounded-full border border-[#7c142b]/20 p-2 hover:bg-[#7c142b]/5"
    >
      <ChevronRight className="h-5 w-5" />
    </button>

  </div>

  <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
    {logoPages[logoPage].map((logo) => (
      <div
        key={logo}
        className="
          flex
          items-center
          justify-center
          rounded-2xl
          border
          border-[#7c142b]/10
          bg-white
          h-24
          text-xs
          font-bold
          tracking-widest
          text-[#7c142b]
        "
      >
        {logo}
      </div>
    ))}
  </div>

</div>

    <div className="mb-16 overflow-hidden rounded-3xl border border-[#7c142b]/10 bg-white shadow-sm">
  <div className="grid lg:grid-cols-2">

    {/* Image */}
    <div className="relative min-h-[320px]">
      <img
        src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200&auto=format&fit=crop"
        alt="Case Study"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-center p-10">
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
        CASE STUDY TIÊU BIỂU
      </span>

      <h3 className="mt-3 font-serif text-3xl font-bold text-[#1f1f1f]">
        Dự Án Quà Tặng Tết Doanh Nghiệp
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Triển khai hơn 20.000 bộ quà tặng được thiết kế riêng theo
        nhận diện thương hiệu cho chương trình tri ân khách hàng cuối năm.
      </p>

      <div className="mt-6 space-y-3">
        <div>✓ Thiết kế riêng theo thương hiệu</div>
        <div>✓ Sản xuất số lượng lớn</div>
        <div>✓ Giao hàng toàn quốc</div>
        <div>✓ Hoàn thành đúng tiến độ</div>
      </div>
    </div>

  </div>
</div>

    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="
            rounded-2xl
            border
            border-[#7c142b]/10
            bg-white
            p-8
            shadow-sm
          "
        >
          <Quote className="h-8 w-8 text-[#c9a227]" />

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {item.content}
          </p>

          <div className="mt-6 border-t border-[#7c142b]/10 pt-4">
              <div className="font-semibold text-[#2c2c2c]">
                {item.name}
              </div>
            
              <div className="mt-1 text-sm text-gray-500">
                {item.role}
              </div>
            
              <div className="mt-1 text-xs font-bold tracking-widest uppercase text-[#7c142b]">
                {item.company}
              </div>
            </div>
          </div>
      ))}
    </div>

    <div className="mt-16 rounded-3xl luxury-gradient p-10 text-center text-white">
      <h3 className="font-serif text-3xl font-bold">
        Nhận Tư Vấn Giải Pháp Quà Tặng
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
        Chia sẻ nhu cầu của doanh nghiệp, FESGift sẽ đề xuất giải pháp phù hợp và báo giá hoàn toàn miễn phí.
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
        Nhận Tư Vấn Ngay
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>

  </div>
</section>
);
}
