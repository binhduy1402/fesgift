
import { COLLECTIONS } from "../data";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Collection } from "../types";

interface CollectionsProps {
  onSelectCollection: (collection: Collection) => void;
}

export default function Collections({
  onSelectCollection,
}: CollectionsProps) {
  return (
    <section id="collections" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
              BỘ SƯU TẬP ĐẶC TUYỂN
            </span>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2c2c2c] sm:text-4xl">
              Bộ Sưu Tập Quà Tặng Doanh Nghiệp
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              Thiết kế riêng theo thương hiệu, sản xuất theo yêu cầu và cá nhân
              hóa cho từng chiến dịch marketing, tri ân khách hàng và đối tác.
            </p>
          </div>

          <a
            href="#projects"
            className="
              inline-flex
              items-center
              gap-2
              border-b
              border-[#7c142b]
              pb-1
              text-xs
              font-bold
              tracking-widest
              uppercase
              text-[#7c142b]
              transition-colors
              hover:border-[#d4af37]
              hover:text-[#d4af37]
            "
          >
            Xem Dự Án Tiêu Biểu
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Collections Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-xl
                border
                border-[#7c142b]/10
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  referrerPolicy="no-referrer"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge */}
                {col.badge && (
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-widest text-[#7c142b] shadow-sm">
                      {col.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex h-full flex-col p-6">
                <p className="text-sm leading-relaxed text-gray-600">
                  {col.description}
                </p>

                {/* Highlights */}
                {col.highlights && (
                  <ul className="mt-5 space-y-3">
                    {col.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b]">
                          <Check className="h-3 w-3" />
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer */}
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <div className="flex items-center justify-between text-[#7c142b] transition-colors group-hover:text-[#d4af37]">
                    <span className="text-xs font-bold tracking-widest uppercase">
                      Xem Bộ Sưu Tập
                    </span>

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
