
import { PHILOSOPHY_ITEMS } from "../data";
import { Gift, Award, Fingerprint } from "lucide-react";

const renderIcon = (name: string) => {
  const props = {
    className:
      "w-7 h-7 text-[#d4af37] transition-transform duration-300 group-hover:scale-110",
  };

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

const shortTitles = ["TÂM", "TẦM", "TÍN"];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#faf7f2] py-24"
    >
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c142b]/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-2 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
            TRIẾT LÝ THƯƠNG HIỆU
          </span>

          <h2 className="font-serif text-4xl font-bold text-[#2c2c2c]">
            Triết Lý 3T
          </h2>

          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">
            Tâm · Tầm · Tín
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Golden Line */}
          <div className="absolute left-1/2 top-20 hidden h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {PHILOSOPHY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#7c142b]/10
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                {/* Circle marker */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#faf7f2] shadow-sm">
                  {renderIcon(item.iconName)}
                </div>

                {/* Main Label */}
                <div className="mb-2 font-serif text-3xl font-bold text-[#7c142b]">
                  {shortTitles[index]}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#2c2c2c]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
