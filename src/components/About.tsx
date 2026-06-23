import { Eye, Award } from "lucide-react";

export default function About() {
const stats = [
{
value: "500+",
label: "Dự án hoàn thành",
},
{
value: "100+",
label: "Khách hàng doanh nghiệp",
},
{
value: "50.000+",
label: "Sản phẩm đã giao",
},
{
value: "5+",
label: "Năm kinh nghiệm",
},
];

return (
<section id="our-story" className="bg-[#f8f5f0] py-20" >
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-14">
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
        FESGIFT QUA NHỮNG CON SỐ
      </span>

      <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-charcoal-text">
        Đối Tác Đồng Hành Của Nhiều Doanh Nghiệp
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-charcoal-text/70">
        Chúng tôi mang đến các giải pháp quà tặng doanh nghiệp
        được thiết kế riêng theo nhận diện thương hiệu và mục tiêu
        của từng chiến dịch.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            bg-white
            p-8
            text-center
            shadow-sm
            border
            border-[#7c142b]/10
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
          "
        >
          <div className="text-4xl font-bold text-[#7c142b]">
            {item.value}
          </div>

          <div className="mt-3 text-sm text-charcoal-text/70">
            {item.label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
);
}
