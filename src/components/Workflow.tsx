
import { WORKFLOW_STEPS } from "../data";

export default function Workflow() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 text-white"
      style={{
        background:
          "linear-gradient(135deg, #6b0d22 0%, #8f1231 50%, #7c142b 100%)",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-[25rem] w-[25rem] rounded-full bg-[#d4af37]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-2 block text-[11px] font-bold tracking-[0.3em] text-[#f1d58a] uppercase">
            TIÊU CHUẨN ĐỒNG BỘ
          </span>

          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl">
            Quy Trình Làm Việc Chuyên Nghiệp
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#ffd7db]">
            Đảm bảo chất lượng chế tác thủ công và tiến độ giao hàng tuyệt đối
            thông qua 6 giai đoạn tiêu chuẩn của FESGift.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="
                group
                relative
                rounded-xl
                border
                border-white/15
                bg-white/[0.06]
                p-6
                text-center
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#d4af37]/60
                hover:bg-white/[0.10]
                hover:shadow-2xl
              "
            >
              {/* Connector */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="absolute right-[-18%] top-6 hidden h-[1px] w-[35%] bg-white/20 lg:block" />
              )}

              {/* Number */}
              <div
                className="
                  mx-auto mb-5
                  flex h-12 w-12
                  items-center justify-center
                  rounded-md
                  border border-[#d4af37]
                  text-[#f1d58a]
                  font-serif
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#d4af37]
                  group-hover:text-[#6b0d22]
                "
              >
                {step.num}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-sm font-bold tracking-widest uppercase text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed text-[#ffd7db] transition-colors duration-300 group-hover:text-white">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-white/15 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                Bạn có nhu cầu thiết kế riêng biệt?
              </h4>

              <p className="mt-1 text-sm text-[#ffd7db]">
                Đội ngũ thiết kế 3D sẵn sàng phác thảo ý tưởng miễn phí trong
                vòng 24 - 48 giờ làm việc.
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                bg-[#d4af37]
                px-6
                py-3
                text-xs
                font-bold
                tracking-widest
                uppercase
                text-[#6b0d22]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e5c250]
                hover:shadow-xl
              "
            >
              Đăng Ký Bản Vẽ 3D Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
