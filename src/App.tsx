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
import { Collection, Inquiry } from "./types";
import { X, Check, ArrowRight, ShieldCheck, Database, Trash2, CheckCircle } from "lucide-react";

export default function App() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [prefilledProduct, setPrefilledProduct] = useState<string>("");
  const [showAdminConsole, setShowAdminConsole] = useState(false);
  const [adminInquiries, setAdminInquiries] = useState<Inquiry[]>([]);

  // Function to scroll to the inquiry contact form
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler when user wants more details about a specific project or sample
  const handlePrefillInquiry = (productTitle: string) => {
    setPrefilledProduct(productTitle);
    scrollToContact();
  };

  // Pre-fill from collection detail lightbox modal
  const handleCollectionInquire = (title: string) => {
    setPrefilledProduct(`Báo giá sỉ bộ sản phẩm: ${title}`);
    setSelectedCollection(null);
    scrollToContact();
  };

  // Fetch inquiries from localStorage to show in secret console
  const handleOpenAdminConsole = () => {
    const list = JSON.parse(localStorage.getItem("fesgift_inquiries") || "[]");
    setAdminInquiries(list);
    setShowAdminConsole(true);
  };

  // Update inquiry status in mock console
  const handleUpdateStatus = (id: string, newStatus: "new" | "processing" | "quoted" | "completed") => {
    const list = JSON.parse(localStorage.getItem("fesgift_inquiries") || "[]") as Inquiry[];
    const updated = list.map((inq) => {
      if (inq.id === id) {
        return { ...inq, status: newStatus };
      }
      return inq;
    });
    localStorage.setItem("fesgift_inquiries", JSON.stringify(updated));
    setAdminInquiries(updated);
  };

  // Delete inquiry entry
  const handleDeleteInquiry = (id: string) => {
    const list = JSON.parse(localStorage.getItem("fesgift_inquiries") || "[]") as Inquiry[];
    const filtered = list.filter((inq) => inq.id !== id);
    localStorage.setItem("fesgift_inquiries", JSON.stringify(filtered));
    setAdminInquiries(filtered);
  };

  return (
    <div className="relative min-h-screen bg-cream-bg text-charcoal-text selection:bg-primary-brand selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Navbar onInquireClick={scrollToContact} />

      {/* 2. Hero Section */}
      <Hero
        onDiscoverClick={() => {
          const sec = document.getElementById("collections");
          if (sec) sec.scrollIntoView({ behavior: "smooth" });
        }}
        onConsultClick={scrollToContact}
      />

      {/* 3. Về FESGift Narrative Segment */}
      <About />

      {/* 4. Triết Lý 3T Visual Statement */}
      <Philosophy />

      {/* 5. Exclusive Collection Gallery Grid */}
      <Collections onSelectCollection={setSelectedCollection} />

      {/* 6. Professional Workflow (translucent grid on deep red canvas) */}
      <Workflow />

      {/* 7. Case Study Portfolio with filter categories */}
      <Projects onInquireWithProject={handlePrefillInquiry} />

      {/* 8. Editorial Testimonials */}
      <Testimonials />

      {/* 9. Contact / Lead Retrieval Form */}
      <ContactForm
        prefilledProduct={prefilledProduct}
        onClearPrefill={() => setPrefilledProduct("")}
      />

      {/* 10. Footer and Directories */}
      <Footer />

      {/* Floating Action Badge showing Admin Console access */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenAdminConsole}
          className="flex items-center gap-2 p-3.5 rounded-full bg-charcoal-text text-white hover:bg-[#7c142b] transition-all tracking-wider text-xs font-semibold shadow-2xl group border border-white/10"
          title="Bấm để xem danh sách yêu cầu vừa gửi (Admin Demo)"
        >
          <Database className="w-4.5 h-4.5 text-muted-gold group-hover:rotate-12 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-300 ease-out whitespace-nowrap text-[10px] tracking-widest uppercase">
            Admin Console (Demo)
          </span>
        </button>
      </div>

      {/* Lightbox Modal: Collection Detail specifications */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-charcoal-text/65 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedCollection(null)}
          />

          <div className="relative bg-white max-w-2xl w-full rounded-sm shadow-2xl border border-secondary-brand/10 overflow-hidden z-10 animate-scaleUp">
            
            {/* Close */}
            <button
              onClick={() => setSelectedCollection(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/85 hover:bg-white text-charcoal-text transition-all shadow-md"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/10] relative w-full bg-charcoal-text">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="inline-block px-2 py-0.5 rounded-sm bg-[#7c142b] text-white text-[9px] font-bold tracking-widest uppercase mb-2">
                  Bộ Sưu Tập Đặc Biệt
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 text-left space-y-6">
              <div className="space-y-3">
                <p className="text-sm text-charcoal-text/75 font-light leading-relaxed">
                  {selectedCollection.description}
                </p>
                <p className="text-xs text-charcoal-text/55 font-light leading-relaxed">
                  Với kinh nghiệm cung cấp lâu năm, FESGift cam kết tối ưu hóa chi phí sản xuất trực tiếp tại xưởng để đảm bảo mức chiết khấu cực kỳ cạnh tranh tốt nhất thị trường cho doanh nghiệp trong đại hội.
                </p>
              </div>

              {selectedCollection.highlights && (
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold tracking-widest text-[#7c142b] uppercase">
                    Đặc điểm & Tiêu chuẩn đóng gói:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCollection.highlights.map((hlt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-text">
                        <span className="w-5 h-5 rounded-full bg-primary-brand/5 border border-primary-brand/10 flex items-center justify-center text-[#7c142b]">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="font-light">{hlt}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-xs text-charcoal-text">
                      <span className="w-5 h-5 rounded-full bg-primary-brand/5 border border-primary-brand/10 flex items-center justify-center text-[#7c142b]">
                        <ShieldCheck className="w-3 h-3" />
                      </span>
                      <span className="font-light">Thẻ chứng nhận quà sành điệu</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-secondary-brand/10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleCollectionInquire(selectedCollection.title)}
                  className="w-full inline-flex items-center justify-center px-5 py-3 bg-primary-brand hover:brightness-110 text-white text-xs font-bold tracking-widest rounded-sm transition-all uppercase gap-2"
                  style={{ backgroundColor: "#7c142b" }}
                >
                  Yêu Cầu Catalog & Báo Giá Sỉ
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 border border-secondary-brand/20 hover:bg-cream-bg text-charcoal-text text-xs font-bold tracking-widest rounded-sm transition-all uppercase"
                >
                  Quay Lại danh mục
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Slide-over Panel: Persistent Admin inquiries dashboard demo */}
      {showAdminConsole && (
        <div className="fixed inset-0 z-50 overflow-hidden text-left">
          <div className="absolute inset-0 overflow-hidden">
            {/* Backdrop Filter */}
            <div
              className="absolute inset-0 bg-charcoal-text/50 backdrop-blur-sm transition-opacity"
              onClick={() => setShowAdminConsole(false)}
            />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md transform transition-all duration-500 ease-in-out">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl border-l border-secondary-brand/10">
                  
                  {/* Slider Header */}
                  <div className="bg-charcoal-text p-6 text-white flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold tracking-wide font-serif text-white">
                        Hệ Thống Quản Lý Lead
                      </h3>
                      <p className="text-[10px] text-white/50 tracking-wider uppercase mt-1">
                        Inquiries Dashboard (Demo persist)
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAdminConsole(false)}
                      className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slider Body */}
                  <div className="flex-1 p-6 relative">
                    {adminInquiries.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-96 text-center text-charcoal-text/40 space-y-3">
                        <Database className="w-12 h-12 text-muted-gold/40" />
                        <p className="text-sm font-medium">Chưa nhận được yêu cầu nào</p>
                        <p className="text-xs font-light max-w-xs leading-relaxed">
                          Hãy điền thông tin và bấm gửi bên mục liên hệ báo giá để trải nghiệm cơ chế lưu trữ tự động.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <div className="flex justify-between items-center bg-cream-bg p-3 border border-secondary-brand/10 rounded-sm">
                          <span className="text-[11px] font-bold text-charcoal-text/50 tracking-wider uppercase">Tổng số lượng lead</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#7c142b] text-white">{adminInquiries.length}</span>
                        </div>

                        <div className="space-y-4">
                          {adminInquiries.map((inq, idx) => (
                            <div
                              key={inq.id}
                              className="bg-cream-bg/40 border border-secondary-brand/10 rounded-sm p-4 space-y-3 shadow-inner hover:border-primary-brand/30 transition-all"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="text-left">
                                  <h4 className="text-xs font-bold text-charcoal-text uppercase">{inq.fullName}</h4>
                                  <p className="text-[10px] font-mono text-charcoal-text/60 mt-0.5">{inq.email} | {inq.phone}</p>
                                </div>
                                
                                {/* Status badge Selector */}
                                <select
                                  value={inq.status}
                                  onChange={(e) => handleUpdateStatus(inq.id, e.target.value as any)}
                                  className="text-[9px] font-bold tracking-wider uppercase bg-white border border-secondary-brand/10 px-2.5 py-1 rounded-sm text-charcoal-text focus:outline-none"
                                >
                                  <option value="new">🆕 Mới</option>
                                  <option value="processing">⚙️ Đang xử lý</option>
                                  <option value="quoted">💰 Đã báo giá</option>
                                  <option value="completed">✅ Hoàn tất</option>
                                </select>
                              </div>

                              <div className="p-2.5 bg-white rounded-sm border border-secondary-brand/5 text-xs text-charcoal-text/80 font-light leading-relaxed">
                                {inq.message || <span className="italic text-charcoal-text/40">Không để lại lời nhắn thêm</span>}
                              </div>

                              <div className="flex items-center justify-between text-[10px] text-charcoal-text/40 pt-1">
                                <span>{new Date(inq.createdAt).toLocaleString("vi-VN")}</span>
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="text-red-600 hover:text-red-700 transition-colors inline-flex items-center gap-1 font-semibold uppercase text-[9px] tracking-wider"
                                >
                                  <Trash2 className="w-3 h-3" />
                                  Xoá
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Slider option footer */}
                  <div className="bg-cream-bg p-6 border-t border-secondary-brand/10">
                    <button
                      onClick={() => {
                        localStorage.removeItem("fesgift_inquiries");
                        setAdminInquiries([]);
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest uppercase rounded-sm gap-2 transition-all"
                    >
                      Xóa Toàn Bộ Đống Inquiries
                    </button>
                    <p className="text-[9px] text-charcoal-text/40 text-center mt-2">
                      * Dữ liệu lưu an toàn tại Client Storage để giữ riêng tư cho người dùng thử nghiệm.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
