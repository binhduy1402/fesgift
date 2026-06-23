import { PHILOSOPHY_ITEMS } from "../data";
import { Gift, Award, Fingerprint } from "lucide-react";

// Helper to render icons dynamically
const renderIcon = (name: string) => {
  const props = { className: "w-6 h-6 text-[#7c142b]" };
  switch (name) {
    case "Gift":
      return <Gift {...props} />;
    case "Award":
      return <Award {...props} />;
    case "Fingerprint":
      return <Fingerprint {...props} />;
    default:
      return <Gift {...props} />;
  }
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-cream-bg/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-text inline-block relative pb-4">
            Triết Lý 3T: Tâm - Tầm - Tín
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-muted-gold" />
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-text/60 tracking-wider uppercase mt-3 font-semibold">
            Kim chỉ nam trong từng nét vẽ và nhịp chỉ đúc kết di sản
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PHILOSOPHY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-secondary-brand/5 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-primary-brand/5 border border-primary-brand/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary-brand/10 transition-colors">
                {renderIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold tracking-wider text-charcoal-text uppercase mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-charcoal-text/75 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central Graphic Section */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white/80 p-4 rounded-sm border border-secondary-brand/10 shadow-lg relative overflow-hidden group">
            {/* Elegant Background Gold Grid pattern or custom graphics */}
            <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#FAF9F6] relative flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1612541892881-b230a6d5396d?q=80&w=800&auto=format&fit=crop"
                alt="Đóng dấu sáp phong bì cao cấp"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-brand/5 group-hover:bg-transparent transition-colors duration-300" />
              
              {/* Subtle visual branding seal in center */}
              <div className="absolute w-24 h-24 rounded-full border border-muted-gold/40 bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full border border-dashed border-primary-brand/30 flex flex-col items-center justify-center">
                  <span className="font-serif text-xs font-bold text-primary-brand tracking-widest leading-none">
                    GIFT
                  </span>
                  <span className="text-[7px] uppercase font-semibold text-muted-gold tracking-widest mt-1">
                    Heritage
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
