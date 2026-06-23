
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Collections from "./components/Collections";
import Workflow from "./components/Workflow";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import { Collection } from "./types";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function App() {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const [prefilledProduct, setPrefilledProduct] = useState("");

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrefillInquiry = (productTitle: string) => {
    setPrefilledProduct(productTitle);
    scrollToContact();
  };

  const handleCollectionInquire = (title: string) => {
    setPrefilledProduct(`Báo giá sỉ bộ sản phẩm: ${title}`);
    setSelectedCollection(null);
    scrollToContact();
  };

  return (
    <div className="relative min-h-screen bg-cream-bg text-charcoal-text selection:bg-primary-brand selection:text-white">

      <Navbar onInquireClick={scrollToContact} />

      <Hero
        onDiscoverClick={() => {
          const sec = document.getElementById("collections");
          if (sec) sec.scrollIntoView({ behavior: "smooth" });
        }}
        onConsultClick={scrollToContact}
      />

      <About />

      <Philosophy />

      <Collections onSelectCollection={setSelectedCollection} />

      <Workflow />

      <Projects onInquireWithProject={handlePrefillInquiry} />

      <Testimonials />

      <ContactForm
        prefilledProduct={prefilledProduct}
        onClearPrefill={() => setPrefilledProduct("")}
      />

      <Footer />

      {selectedCollection && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-charcoal-text/65 backdrop-blur-md"
            onClick={() => setSelectedCollection(null)}
          />

          <div className="relative bg-white max-w-2xl w-full rounded-sm shadow-2xl border border-secondary-brand/10 overflow-hidden z-10">

            <button
              onClick={() => setSelectedCollection(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/85 hover:bg-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/10] relative w-full bg-charcoal-text">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-2 py-1 rounded-sm bg-[#7c142b] text-white text-[9px] font-bold uppercase mb-2">
                  Bộ Sưu Tập Đặc Biệt
                </span>

                <h3 className="font-serif text-3xl font-bold text-white">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-sm text-charcoal-text/75">
                {selectedCollection.description}
              </p>

              {selectedCollection.highlights && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-[#7c142b] mb-3">
                    Đặc điểm nổi bật
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCollection.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-xs"
                      >
                        <Check className="w-3 h-3 text-[#7c142b]" />
                        {item}
                      </div>
                    ))}

                    <div className="flex items-center gap-2 text-xs">
                      <ShieldCheck className="w-3 h-3 text-[#7c142b]" />
                      Kiểm soát chất lượng đầu ra
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-secondary-brand/10 flex gap-4">
                <button
                  onClick={() =>
                    handleCollectionInquire(selectedCollection.title)
                  }
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-primary-brand text-white text-xs font-bold uppercase gap-2"
                >
                  Yêu Cầu Báo Giá
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => setSelectedCollection(null)}
                  className="px-5 py-3 border border-secondary-brand/20 text-xs font-bold uppercase"
                >
                  Đóng
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
