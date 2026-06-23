mport { ArrowRight, Quote } from "lucide-react";

const testimonials = [
{
company: "Doanh Nghiệp FMCG",
content:
"FESGift giúp chúng tôi triển khai hơn 2.000 phần quà khách hàng trong thời gian ngắn với chất lượng đồng đều và chuyên nghiệp.",
},
{
company: "Tập Đoàn Công Nghệ",
content:
"Đội ngũ tư vấn nhanh, thiết kế chỉn chu và hiểu rõ cách truyền tải hình ảnh thương hiệu qua từng sản phẩm.",
},
{
company: "Doanh Nghiệp Tài Chính",
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
];

export default function Capabilities() {
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

    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">
      {clientLogos.map((logo) => (
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
            <div className="text-xs font-bold tracking-widest text-[#7c142b] uppercase">
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
