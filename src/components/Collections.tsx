import { COLLECTIONS } from "../data";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Collection } from "../types";

interface CollectionsProps {
  onSelectCollection: (collection: Collection) => void;
}

export default function Collections({ onSelectCollection }: CollectionsProps) {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with standard luxury layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="text-left">
            <span className="text-[10px] font-bold tracking-widest text-[#7c142b] uppercase block mb-1">
              BỘ SƯU TẬP ĐẶC TUYỂN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-text font-bold tracking-tight">
              Giải Pháp Quà Tặng Đỉnh Cao
            </h2>
            <p className="text-sm text-charcoal-text/60 mt-2 font-light">
              Lựa chọn giải pháp phù hợp phù hợp nhất cho mục tiêu quan hệ đối tác của bạn.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#7c142b] uppercase hover:text-muted-gold transition-colors pb-1 border-b border-[#7c142b] hover:border-muted-gold"
            >
              Xem Tất Cả Dự Án
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Columns Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col)}
              className="group bg-cream-bg rounded-sm overflow-hidden border border-secondary-brand/5 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-350 flex flex-col h-full cursor-pointer"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-text">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.93]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float Badge */}
                {col.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2.5 py-1 rounded-sm bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-widest text-[#7c142b] shadow-sm">
                      {col.badge}
                    </span>
                  </div>
                )}

                {/* Cover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text/80 via-transparent to-transparent opacity-65 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Bottom title inside the image */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Card info body */}
              <div className="p-6 flex flex-col flex-grow justify-between text-left">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-charcoal-text/75 font-light leading-relaxed">
                    {col.description}
                  </p>

                  {/* Highlights Bullet lists */}
                  {col.highlights && (
                    <ul className="space-y-2 pt-2">
                      {col.highlights.map((hlt, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-charcoal-text/70">
                          <span className="w-4 h-4 rounded-full bg-primary-brand/5 border border-primary-brand/10 flex items-center justify-center text-[#7c142b]">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="font-light">{hlt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Command action */}
                <div className="pt-6 border-t border-secondary-brand/10 flex items-center justify-between text-[#7c142b] group-hover:text-muted-gold transition-colors">
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Chi Tiết Sản Phẩm
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
