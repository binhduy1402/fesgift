
import { useState, useEffect } from "react";

import LuxuryBackground from "./components/LuxuryBackground";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Collections from "./components/Collections";
import Capabilities from "./components/Capabilities";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import { Collection } from "./types";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";
import story1 from "./assets/story1.jpg";
import story1_2 from "./assets/story1-2.jpg";
import story2 from "./assets/story2.jpg";
import story3 from "./assets/story3.jpg";

export default function App() {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const [prefilledProduct, setPrefilledProduct] = useState("");
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentStoryImage, setCurrentStoryImage] = useState(0);
  const [pauseStorySlide, setPauseStorySlide] = useState(false);

  const stories = {
  1: {
    title: "Gắn kết cùng Sun Life",
      images: [
        story1,
        story1_2,
      ],
    description:
      "Sun Life mong muốn mang đến những món quà ý nghĩa dành cho khách hàng và đối tác. MARS đồng hành từ khâu tư vấn, thiết kế đến sản xuất để tạo nên bộ quà tặng mang dấu ấn thương hiệu.",
  },

  2: {
    title: "Kết nối cùng Generali",
    images: [
        story2,
    ],
    description:
      "Với Mars Group, quà tặng không chỉ là một món quà mà còn là cầu nối giữa thương hiệu và khách hàng. Trong dự án cùng Generali, chúng tôi mang đến giải pháp quà tặng và vật phẩm sự kiện được thiết kế đồng bộ, góp phần lan tỏa thông điệp thương hiệu và tạo nên những khoảnh khắc đáng nhớ cho người tham dự.",
  },

  3: {
    title: "Sự chăm chút của Mars Group",
    images: [
        story3,
    ],
    description:
      "Với Mars Group, đúng tiến độ luôn đi cùng chất lượng. Đội ngũ chúng tôi không ngừng phối hợp và hoàn thiện từng sản phẩm bằng sự chỉn chu, để mỗi món quà khi trao đi đều thể hiện trọn vẹn giá trị và hình ảnh thương hiệu của doanh nghiệp.",
  },
} as const;
  useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    rootMargin: "0px 0px -150px 0px",
  }
);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

const handleCollectionInquire = (title: string) => {
  setPrefilledProduct(`Báo giá sỉ bộ sản phẩm: ${title}`);
  setSelectedCollection(null);
  scrollToContact();
};

const closeStory = () => {
  setSelectedStory(null);
  setCurrentStoryImage(0);
};

useEffect(() => {
  if (!selectedStory) return;
  if (pauseStorySlide) return;

  const story =
    stories[selectedStory as keyof typeof stories];

  const timer = setInterval(() => {
    setCurrentStoryImage((prev) =>
      (prev + 1) % story.images.length
    );
  }, 4000);

  return () => clearInterval(timer);

  }, [
      selectedStory,
      currentStoryImage,
      pauseStorySlide,
  ]);

return (
  <div className="relative min-h-screen bg-cream-bg text-charcoal-text selection:bg-primary-brand selection:text-white">

    <LuxuryBackground />

    <Navbar onInquireClick={scrollToContact} />

      <Hero
        onDiscoverClick={() => {
          const section = document.getElementById("collections");

          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        onConsultClick={scrollToContact}
      />

      <Collections />

      <About />

      <Philosophy
        onOpenStory={(storyId) => {
          setSelectedStory(storyId);
          setCurrentStoryImage(0);
        }}
      />

      <Capabilities />

      <ContactForm
        prefilledProduct={prefilledProduct}
        onClearPrefill={() => setPrefilledProduct("")}
      />

      <Footer />

      {/* Collection Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <div
            className="fixed inset-0 bg-charcoal-text/70 backdrop-blur-md"
            onClick={() => setSelectedCollection(null)}
          />

          <div
            className="
              relative
              z-10
              w-full
              max-w-3xl
              overflow-hidden
              rounded-2xl
              border
              border-[#7c142b]/10
              bg-white
              shadow-2xl
            "
          >
            <button
              onClick={() => setSelectedCollection(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                rounded-full
                bg-white/90
                p-2
                transition-colors
                hover:bg-white
              "
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    mb-3
                    inline-block
                    rounded-full
                    bg-[#7c142b]
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                  "
                >
                  Bộ Sưu Tập Nổi Bật
                </span>

                <h3 className="font-serif text-3xl font-bold text-white">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6 p-8">
              <p className="text-sm leading-relaxed text-charcoal-text/75">
                {selectedCollection.description}
              </p>

              {selectedCollection.highlights && (
                <div>
                  <h4
                    className="
                      mb-4
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#7c142b]
                    "
                  >
                    Điểm Nổi Bật
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCollection.highlights.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-charcoal-text/80
                          "
                        >
                          <Check className="h-4 w-4 text-[#7c142b]" />
                          {item}
                        </div>
                      )
                    )}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-charcoal-text/80
                      "
                    >
                      <ShieldCheck className="h-4 w-4 text-[#7c142b]" />
                      Kiểm soát chất lượng đầu ra
                    </div>
                  </div>
                </div>
              )}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-[#7c142b]/10
                  pt-6
                  sm:flex-row
                "
              >
                <button
                  onClick={() =>
                    handleCollectionInquire(
                      selectedCollection.title
                    )
                  }
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary-brand
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Yêu Cầu Báo Giá

                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() =>
                    setSelectedCollection(null)
                  }
                  className="
                    rounded-xl
                    border
                    border-[#7c142b]/15
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                  "
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
{/* Story Modal */}
{selectedStory && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
    onClick={closeStory}
  >
      <div
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setPauseStorySlide(true)}
          onMouseLeave={() => setPauseStorySlide(false)}
          className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
      {stories[selectedStory as keyof typeof stories].images.length > 0 ? (
        <>
          <img
            src={
              stories[selectedStory as keyof typeof stories]
                .images[currentStoryImage]
            }
            alt={stories[selectedStory as keyof typeof stories].title}
            className="
                h-64
                w-full
                rounded-b-2xl
                object-cover
                transition-all
                duration-500
            "
          />
      
          <div className="flex justify-center gap-2 py-4">
            {stories[selectedStory as keyof typeof stories].images.map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryImage(index)}
                  className={`rounded-full transition-all duration-300 ${
                      currentStoryImage === index
                      ? "h-2 w-8 bg-[#7c142b]"
                      : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              )
            )}
          </div>
        </>
      ) : (
        <div className="flex h-64 items-center justify-center bg-[#f7f5f2]">
          <span className="text-gray-400">
            Hình sẽ cập nhật
          </span>
        </div>
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#7c142b]">
          {stories[selectedStory as keyof typeof stories].title}
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          {stories[selectedStory as keyof typeof stories].description}
        </p>

        <button
          onClick={closeStory}
          className="mt-8 w-full rounded-xl bg-[#7c142b] py-3 font-semibold text-white transition active:scale-95"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
