import logo from "../assets/logo.png";
import { BRAND_INFO, NAVIGATION_LINKS } from "../data";
import { ArrowRight, Phone, Mail, Award, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-text text-white/80 border-t border-white/5 relative z-10 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Brand profile column */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="inline-flex items-center">
  <img
    src={logo}
    alt="FESGift"
    className="h-16 w-auto"
  />
</a>
            <p className="text-xs text-white/55 leading-relaxed font-light max-w-sm">
              © {currentYear} FESGift. Crafting Heritage & Grace in Every Gift. Chúng tôi tự hào lưu giữ giá trị tinh hoa văn hoá thuần Việt và nâng tầm trải nghiệm gắn kết giữa các tập đoàn hàng đầu.
            </p>
            
            {/* Certifications or trust badges */}
            <div className="flex items-center gap-4 pt-1 text-white/45 text-[10px]">
              <span className="flex items-center gap-1.5 font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4.5 h-4.5 text-muted-gold" />
                100% Nâng tầm trải nghiệm
              </span>
            </div>
          </div>

          {/* Quick links: ABOUT US */}
          <div className="md:col-span-2.5">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
              VỀ FESGIFT
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#our-story" className="text-white/60 hover:text-white transition-colors font-light">
                  Câu Chuyện Phía Sau
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-white/60 hover:text-white transition-colors font-light">
                  Triết Lý 3T độc quyền
                </a>
              </li>
              <li>
                <a href="#collections" className="text-white/60 hover:text-white transition-colors font-light">
                  Bộ Sưu Tập Tiêu Biểu
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/60 hover:text-white transition-colors font-light">
                  Dự án đã thực hiện
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links: SUPPORT */}
          <div className="md:col-span-2.5">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
              HỖ TRỢ KHÁCH HÀNG
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors font-light">
                  Vận Chuyển & Giao Hàng
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors font-light">
                  Liên Hệ Giao dịch
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors font-light">
                  Điều Khoản Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors font-light">
                  Chính Sách Chiết Khấu Sỉ
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links: LEGAL */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
                CHÍNH SÁCH PHÁP LÝ
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#contact" className="text-white/60 hover:text-white transition-colors font-light">
                    Chính Sách Bảo Mật
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/60 hover:text-white transition-colors font-light">
                    Cam kết chất lượng
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 space-y-3 text-xs">
  <div>
    <p className="text-white/40 uppercase tracking-wider mb-1">
      Email
    </p>
    <p className="text-white/80">
      contact@fesgift.com
    </p>
  </div>

  <div>
    <p className="text-white/40 uppercase tracking-wider mb-1">
      Website
    </p>
    <p className="text-white/80">
      www.fesgift.com
    </p>
  </div>

  <div>
    <p className="text-white/40 uppercase tracking-wider mb-1">
      Hotline
    </p>
    <p className="text-white/80">
      090x xxx xxx
    </p>
</div>

</div>
</div>

{/* Lower footer note */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p className="font-light">
            © {currentYear} FESGift. All Rights Reserved. Designed with Heritage & Grace.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-white transition-colors font-light flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-muted-gold" />
              Tiếng Việt (Vietnam)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
