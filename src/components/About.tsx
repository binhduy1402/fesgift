import { COMPANY_STATS } from "../data";

export default function About() {

return (
<section id="our-story" className="bg-[#f8f5f0] py-20" >
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-14">
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
        NĂNG LỰC THỰC TẾ
      </span>

      <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-charcoal-text">
        Fesgift Qua Những Con Số
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-charcoal-text/70">
        Những con số tiêu biểu phản ánh năng lực triển khai,
        kinh nghiệm vận hành và mức độ tin tưởng của khách hàng
        doanh nghiệp trên toàn quốc.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {COMPANY_STATS.map((item) => (
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
            hover:-translate-y-3
            hover:shadow-xl
          "
        >
         <div className="text-5xl font-bold text-[#7c142b]">
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
