import { WORKFLOW_STEPS } from "../data";

export default function Workflow() {
  return (
    <section id="process" className="py-20 bg-primary-brand text-white relative overflow-hidden" style={{ backgroundColor: "#7c142b" }}>
      {/* Background organic light glows */}
      <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] rounded-full bg-white/5 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-muted-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest text-[#ffbabf] uppercase block mb-1">
            TIÊU CHUẨN ĐỒNG BỘ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Quy Trình Làm Việc Chuyên Nghiệp
          </h2>
          <p className="text-sm text-[#ffbabf] font-light leading-relaxed">
            Đảm bảo chất lượng chế tác thủ công và tiến độ giao hàng tuyệt đối qua 6 giai đoạn tiêu chuẩn.
          </p>
        </div>

        {/* 6 Steps Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 lg:gap-4">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="relative bg-white/5 border border-white/10 hover:border-muted-gold/40 hover:bg-white/10 p-6 rounded-sm transition-all duration-300 text-center group"
            >
              {/* Sequential Indicator Line */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute right-[-15%] top-[1.8rem] w-1/4 h-[1px] bg-white/10 group-hover:bg-muted-gold/30 z-0 pointer-events-none" />
              )}

              {/* Box Number */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-muted-gold text-muted-gold font-serif text-sm font-semibold tracking-wide mb-4 group-hover:bg-muted-gold group-hover:text-primary-brand transition-all shadow-inner">
                {step.num}
              </div>

              {/* Stage Title */}
              <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 text-white">
                {step.title}
              </h3>

              {/* Stage Short Description */}
              <p className="text-[11px] leading-relaxed text-[#ffbabf]/80 font-light line-clamp-3 group-hover:text-white transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Promise slogan banner below */}
        <div className="mt-16 pt-8 border-t border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
              Bạn có nhu cầu thiết kế riêng biệt?
            </h4>
            <p className="text-xs text-[#ffbabf]/75 font-light mt-0.5">
              Đội ngũ thiết kế 3D sẵn sàng phác thảo ý tưởng miễn phí từ 24h - 48h làm việc.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-white/25 hover:bg-white hover:text-primary-brand text-white text-[11px] font-bold tracking-widest uppercase transition-colors rounded-sm"
          >
            Đăng Ký Bản Vẽ 3D Free
          </a>
        </div>

      </div>
    </section>
  );
}
