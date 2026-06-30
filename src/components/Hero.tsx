import { useEffect, useRef, useState } from "react";

import hero1 from "../assets/hero01.jpg";
import hero2 from "../assets/hero02.jpg";
import hero3 from "../assets/hero03.jpg";
import hero4 from "../assets/hero04.jpg";

import zaloQR from "../assets/zalo-qr.png";

  const heroImages = [
          hero1,
          hero2,
          hero3,
          hero4,
        ];

export default function Hero({

}: HeroProps) {
  
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const element = heroRef.current;

  if (!element) return;

const handleAnimationIteration = () => {
  setCurrentImage((prev) => (prev + 1) % heroImages.length);
};

  element.addEventListener(
    "animationiteration",
    handleAnimationIteration
  );

  return () => {
    element.removeEventListener(
      "animationiteration",
      handleAnimationIteration
    );
  };
}, []);
  return (
    <section className="gold-pattern relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#faf7f2] to-white pt-24 pb-20 md:pt-36 md:pb-28">
      
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
                    0931 133 790
                  </a>
                </div>
              
                <a
                  href="https://zalo.me/0931133790"
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
                    font-['Playfair_Display']
                    font-black
                    text-[#222]
                    leading-none
                    tracking-[-0.03em]
                    text-[clamp(3rem,6vw,4.8rem)]
                  "
                >
                  Mars Group
                </span>
              
                <span
                  className="
                    mt-2
                    block
                    font-['Playfair_Display']
                    italic
                    font-bold
                    text-[#7c142b]
                    leading-[0.92]
                    tracking-[-0.02em]
                    text-[clamp(2.5rem,5vw,4rem)]
                  "
                >
                    Kiến Tạo
                    <br />
                    Dấu Ấn Thương Hiệu
                </span>
              </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#555]">
              Mars Group đồng hành cùng doanh nghiệp tạo nên những bộ quà tặng mang
              dấu ấn thương hiệu riêng, từ ý tưởng, thiết kế đến sản xuất và bàn giao
              trên toàn quốc.
            </p>

            {/* USP */}
            <div className="mt-6 grid grid-cols-2 gap-3">
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
            {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onConsultClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#7c142b]
                  px-7
                  py-3
                  text-xs
                  font-bold
                  tracking-widest
                  uppercase
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Nhận Báo Giá Ngay
                <ArrowRight className="h-4 w-4" />
              </button>
              */}

              {/*<button
                onClick={onDiscoverClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-[#d4af37]
                  px-7
                  py-3
                  text-xs
                  font-bold
                  tracking-widest
                  uppercase
                  text-[#7c142b]
                  transition-all
                  duration-300
                  hover:bg-[#d4af37]
                  hover:text-[#6b0d22]
                "
              >
                Xem Bộ Sưu Tập
              </button>
            </div>*/}
          </div>

              {/* Right Image */}
            <div className="lg:col-span-6">
              <div
                  ref={heroRef}
                  className="relative hero-float"
                >
            
                <div className="overflow-hidden rounded-2xl border border-[#7c142b]/10 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full">
                    {heroImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Hero ${index + 1}`}
                        className={`
                          absolute
                          inset-0
                          h-full
                          w-full
                          rounded-xl
                          object-cover
                        
                          transition-all
                          duration-[900ms]
                          ease-out
                        
                          ${
                            currentImage === index
                              ? "opacity-100 translate-y-0 scale-100 z-10"
                              : "opacity-0 -translate-y-12 scale-[1.03] z-0"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
            
                {/* Floating Card */}
                {/*
                <div className="absolute -bottom-6 left-6 hero-card-float rounded-xl border border-[#d4af37]/20 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-md">
                  <div className="text-2xl font-serif font-bold text-[#7c142b]">
                    TƯ VẤN MIỄN PHÍ
                  </div>
            
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    THEO NHẬN DIỆN THƯƠNG HIỆU
                  </div>
                </div>
                */}
            
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
