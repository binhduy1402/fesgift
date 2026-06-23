import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({ onDiscoverClick, onConsultClick }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-cream-bg via-cream-bg/60 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-[-10%] w-[35rem] h-[35rem] rounded-full bg-secondary-brand/5 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-[-5%] w-[30rem] h-[30rem] rounded-full bg-muted-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-primary-brand/5 border border-primary-brand/10 text-[10px] font-bold tracking-widest text-[#7c142b] uppercase">
                <Sparkles className="w-3 h-3 text-muted-gold fill-current" />
                Luxury Gifting Partner
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-charcoal-text font-serif font-bold tracking-tight">
              Giải Pháp Quà Tặng
              <span className="block italic text-primary-brand mt-1.5 font-normal font-serif">
                Doanh Nghiệp Toàn Diện
              </span>
            </h1>

            <p className="text-sm md:text-base text-charcoal-text/75 leading-relaxed max-w-xl font-light">
              Kiến tạo dấu ấn thương hiệu thông qua những món quà tinh tế, mang đậm giá trị văn hóa nghệ thuật và sự trân trọng tuyệt đối dành cho quý đối tác, khách hàng VIP.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-brand hover:brightness-110 text-white text-xs font-bold tracking-widest rounded-sm shadow-lg transition-all uppercase gap-2"
                style={{ backgroundColor: "#7c142b" }}
              >
                Khám Phá Bộ Sưu Tập
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onConsultClick}
                className="inline-flex items-center justify-center px-6 py-3 border border-muted-gold hover:bg-primary-brand hover:text-white hover:border-primary-brand text-charcoal-text text-xs font-bold tracking-widest rounded-sm transition-all uppercase"
              >
                Liên Hệ Tư Vấn
              </button>
            </div>
          </div>

          {/* Hero Right Image Frame with overlay metrics */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-xl aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-secondary-brand/10 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop"
                alt="FESGift Quà tặng cao cấp"
                className="w-full h-full object-cover rounded-sm filter brightness-[0.98]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float badge 5000+ Customers */}
            <div className="absolute bottom-[-1.5rem] left-4 sm:left-12 bg-white/95 backdrop-blur-md border border-muted-gold/20 p-4 sm:p-5 rounded-sm shadow-xl flex items-center gap-3.5 max-w-[240px] transform hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-sm bg-[#7c142b]/10 flex items-center justify-center text-primary-brand">
                <svg
                  className="w-5.1 h-5.1 text-primary-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5h-5.1a2 2 0 00-2 2v3.5a2.5 2.5 0 01-5 0V14a2 2 0 00-2-2H4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12H4.1M20 12h-5.1"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold text-primary-brand leading-none">
                  5000+
                </span>
                <span className="text-[10px] font-semibold text-charcoal-text/70 mt-1 uppercase tracking-wider leading-tight">
                  Khách hàng tin tưởng
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
