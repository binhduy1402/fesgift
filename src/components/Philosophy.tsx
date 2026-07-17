import { stories } from "../data/stories";

interface PhilosophyProps {
  onOpenStory: (storyId: number) => void;
}

export default function Philosophy({
  onOpenStory,
}: PhilosophyProps) {
  return (
    <section id="philosophy" className="relative bg-white py-24">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c142b]/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-4xl mx-auto text-center reveal delay-150">
          <span className="mb-3 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
            CÂU CHUYỆN THƯƠNG HIỆU
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] text-[#2c2c2c]">
            Mỗi Món Quà
            <span
              className="
                block
                bg-gradient-to-r
                from-[#7c142b]
                to-[#c9a227]
                bg-clip-text
                text-transparent
              "
            >
              Là Một Trải Nghiệm
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-charcoal-text/70">
            Mars Group không chỉ cung cấp quà tặng doanh nghiệp.
            Chúng tôi giúp doanh nghiệp truyền tải giá trị thương hiệu
            thông qua những sản phẩm được thiết kế riêng,
            chỉn chu và phù hợp với từng đối tượng nhận quà.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 reveal delay-300">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => onOpenStory(story.id)}
                className="reveal group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={story.cardImage}
                    alt={story.cardTitle}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-center text-xl font-bold text-[#7c142b]">
                    {story.cardTitle}
                  </h3>

                  <p className="mt-2 text-center text-sm text-gray-500">
                    Chạm để xem câu chuyện
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
