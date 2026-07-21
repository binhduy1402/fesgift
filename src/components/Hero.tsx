import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import hero1 from "../assets/hero01.avif";
import hero2 from "../assets/hero02.avif";
import hero3 from "../assets/hero03.jpg";
import hero4 from "../assets/hero04.jpg";

import zaloQR from "../assets/zalo-qr.png";

const heroImages = [
          hero1,
          hero2,
          hero3,
          hero4,
        ];

interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({
  onDiscoverClick,
  onConsultClick,
}: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const handleAnimationIteration = () => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    };

    element.addEventListener("animationiteration", handleAnimationIteration);

    return () => {
      element.removeEventListener("animationiteration", handleAnimationIteration);
    };
  }, []);

  return (
    <section className="gold-pattern relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#faf7f2] to-white pt-24 pb-16 md:pt-28 md:pb-24">
      
      {/* Background Effects */}
      <div className="absolute left-[-10%] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#7c142b]/5 blur-3xl pointer-events-none" />
      <div className="absolute right-[-5%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">

          {/* Left Content */}
            <div className="lg:col-span-6">  

          {/* Hotline + QR */}
              <div className="flex w-full items-center justify-between rounded-2xl border border-[#c49b47]/15 bg-[#faf8f4]/70 px-5 py-2.5 shadow-[0_6px_20px_rgba(124,20,43,0.08)] backdrop-blur-sm">
                <div className="flex flex-1 flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8d8d]">
                    Hotline
                  </span>
              
                  <a
                    href="tel:0931133790"
                    className="mt-1 text-[1.3rem] font-bold leading-none text-[#7c142b]"
                  >
                    0903 731 769
                  </a>
                </div>
              
                <a
                  href="https://zalo.me/2446504417439174890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-8 shrink-0"
                >
                  <img
                    src={zaloQR}
                    alt="QR Zalo"
                    className="h-[52px] w-[52px] rounded-xl border border-[#c49b47]/20 bg-white p-1"
                  />
                </a>
              </div>

              <h1 className="mt-6">
                    <span
                      className="
                        block
                        font-['Lora']
                        font-bold
                        text-[#222]
                        leading-[1]
                    
                        text-[2.35rem]
                        sm:text-[2.8rem]
                        md:text-[3.5rem]
                        lg:text-[4rem]
                      "
                    >
                  Giải Pháp Quà Tặng
                </span>
              
                <span
                  className="
                    mt-3
                    block
                    font-['Lora']
                    italic
                    font-semibold
                    text-[#7c142b]
                
                    leading-[1.05]
                    tracking-[-0.04em]
                
                    text-[2.15rem]
                    sm:text-[2.45rem]
                    md:text-[3.1rem]
                    lg:text-[4rem]
                  "
                >
                  Nhanh Trong Tư Vấn
                  <br />
                  Chắc Trong Thực Thi
                </span>
              </h1>

            {/* USP */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Tư vấn miễn phí
              </span>

              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Thiết kế theo thương hiệu
              </span>

              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Sản xuất theo yêu cầu
              </span>

              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Giao hàng toàn quốc
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              <button
                onClick={onConsultClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#7c142b] px-8 py-3.5 text-sm font-semibold tracking-[0.2em] uppercase text-white shadow-[0_18px_45px_rgba(124,20,43,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Nhận Báo Giá Ngay
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

              {/* Right Image */}
            <div className="lg:col-span-6 mt-10 lg:mt-0">
              <div ref={heroRef} className="relative hero-float">
            
                <div className="overflow-hidden rounded-2xl border border-[#7c142b]/10 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <div className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-gradient-to-t from-[#7c142b]/20 via-transparent to-white/20" />
                    {heroImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Hero ${index + 1}`}
                        className={`hero-image absolute inset-0 h-full w-full rounded-xl object-cover ${
                          currentImage === index
                            ? "hero-image--active z-10"
                            : "hero-image--inactive z-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>         
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
