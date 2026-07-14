import { useState, useEffect, FormEvent } from "react";
import { Phone, Mail, HelpCircle, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "../data";
import zaloIcon from "../assets/zalo.svg";

interface ContactFormProps {
  prefilledProduct?: string;
  onClearPrefill?: () => void;
}

export default function ContactForm({ prefilledProduct, onClearPrefill }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const DELAY_SECONDS = 120;

  useEffect(() => {
    if (!prefilledProduct) return;

    setMessage(
      `Tôi cần nhận tư vấn báo giá chi tiết và chiết khấu cho dòng sản phẩm quà tặng: "${prefilledProduct}". Xin cám ơn!`
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [prefilledProduct]);

  useEffect(() => {
    if (!isSubmitSuccess || countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitSuccess, countdown]);

  useEffect(() => {
    const lastSubmit = localStorage.getItem("fesgift_last_submit");
    if (!lastSubmit) return;

    const diff = Date.now() - Number(lastSubmit);
    const remaining = DELAY_SECONDS - Math.floor(diff / 1000);

    if (remaining > 0) {
      setIsSubmitSuccess(true);
      setCountdown(remaining);
    }
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const lastSubmit = localStorage.getItem("fesgift_last_submit");
    if (lastSubmit) {
      const diff = Date.now() - Number(lastSubmit);
      if (diff < DELAY_SECONDS * 1000) {
        const remaining = Math.ceil((DELAY_SECONDS * 1000 - diff) / 1000);
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;

        setErrMessage(
          `Bạn vừa gửi yêu cầu. Vui lòng thử lại sau ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.`
        );
        return;
      }
    }

    if (website.trim() !== "") {
      return;
    }

    if (!fullName.trim() || !company.trim() || !phone.trim()) {
      setErrMessage("Vui lòng điền đầy đủ thông tin bắt buộc (*).");
      return;
    }

    setIsSubmitting(true);
    setErrMessage("");

    try {
      const response = await fetch("https://duynpb1.app.n8n.cloud/webhook/fesgift-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          company,
          phone,
          email,
          message,
          website,
        }),
      });

      if (!response.ok) {
        throw new Error("Không gửi được dữ liệu");
      }

      localStorage.setItem("fesgift_last_submit", Date.now().toString());
    } catch (error) {
      console.error(error);
      setErrMessage("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitSuccess(true);
    setCountdown(DELAY_SECONDS);
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
    setWebsite("");
    setIsSubmitting(false);

    if (onClearPrefill) {
      onClearPrefill();
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#fbf2e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white shadow-[0_45px_120px_rgba(124,20,43,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-10 xl:p-16 relative flex flex-col justify-center bg-[#fff8ef]">
            <div className="mb-8 text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#7c142b] uppercase block mb-1">
                NHẬN TƯ VẤN MIỄN PHÍ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-text font-bold tracking-tight">
                Nhận Báo Giá Quà Tặng Doanh Nghiệp
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-text/65 leading-relaxed mt-2 font-light">
                Chia sẻ nhu cầu của doanh nghiệp, đội ngũ Mars Group sẽ liên hệ tư vấn và đề xuất giải pháp phù hợp trong vòng 2 giờ làm việc.
              </p>
            </div>

            {isSubmitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-8 text-center flex flex-col items-center justify-center space-y-4 animate-scaleUp max-w-full mx-auto">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-emerald-900">
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800/80 font-light max-w-full mx-auto leading-relaxed">
                  Cám ơn quý khách đã tin tưởng dịch vụ của Mars Group. Chuyên viên của Mars Group sẽ chủ động liên hệ trực tiếp đến quý khách qua số điện thoại/Zalo/Email trong thời gian sớm nhất.
                </p>
                <p className="text-sm text-emerald-700">
                  Quý khách có thể gửi yêu cầu mới sau
                </p>
                <button
                  disabled={countdown > 0}
                  onClick={() => {
                    if (countdown > 0) return;
                    setErrMessage("");
                    setIsSubmitSuccess(false);
                  }}
                  className={`w-full sm:w-auto min-w-[220px] px-6 py-3 rounded-sm transition-all duration-300 ${
                    countdown > 0
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed font-mono text-lg tracking-[0.25em] font-bold"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold tracking-widest uppercase"
                  }`}
                >
                  {countdown > 0 ? formatTime(countdown) : "GỬI THÊM YÊU CẦU MỚI"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />

                {errMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-xs text-red-700 font-medium rounded-sm">
                    {errMessage}
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
                    Họ và Tên (*)
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
                      Tên doanh nghiệp (*)
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Công ty ABC"
                      className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
                      Số điện thoại (*)
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0901234567"
                      className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase">
                      Lời Nhắn / Yêu Cầu Chế Tác
                    </label>
                    {prefilledProduct && (
                      <span className="text-[10px] font-semibold text-primary-brand bg-primary-brand/10 px-2 py-0.5 rounded-sm">
                        Đang quan tâm: {prefilledProduct}
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Yêu cầu riêng về màu sắc, in dập logo, số lượng set hay ngân sách chi tiết..."
                    className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary-brand hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold tracking-widest rounded-sm transition-all uppercase shadow-md hover:shadow-lg"
                    style={{ backgroundColor: "#7c142b" }}
                  >
                    {isSubmitting ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
                  </button>
                  <p className="text-center text-[11px] text-charcoal-text/50 mt-3">
                    Chuyên viên Mars Group sẽ phản hồi trong vòng 2 giờ làm việc.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="relative lg:col-span-5 overflow-hidden p-6 sm:p-8 lg:p-10 text-white bg-[#200b18] shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#7c142b]/95 via-[#230b14]/95 to-[#0f050d]/100" />
            <div className="absolute left-[-20%] top-10 h-56 w-56 rounded-full bg-[#c9a227]/30 blur-3xl pointer-events-none" />
            <div className="absolute right-[-15%] bottom-0 h-72 w-72 rounded-full bg-[#7c142b]/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-10">
              <div className="inline-flex items-center justify-center rounded-full border border-[#c9a227]/35 bg-white/15 px-4 py-2 mb-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffebc9] shadow-sm">
                ĐẶT NGAY – ƯU ĐÃI THƯƠNG HIỆU
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Quà tặng doanh nghiệp
                <br />
                thiết kế chuẩn thương hiệu
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mt-4 max-w-md">
                Chúng tôi hỗ trợ lựa chọn quà tặng sáng tạo, đóng gói sang trọng và triển khai đúng tiến độ để thương hiệu của bạn được nâng tầm mỗi lần trao quà.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="flex items-center gap-3 rounded-3xl border border-white/25 bg-white/15 px-4 py-3 shadow-lg shadow-black/20">
                  <Phone className="w-4 h-4 text-[#c9a227]" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/85">Hotline</div>
                    <div className="text-base font-semibold text-white">{BRAND_INFO.hotline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-3xl border border-white/25 bg-white/15 px-4 py-3 shadow-lg shadow-black/20">
                  <Mail className="w-4 h-4 text-[#c9a227]" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/85">Email</div>
                    <div className="text-base font-semibold text-white">{BRAND_INFO.email}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/35 flex items-center justify-center text-[#f7e2a8] shadow-lg shadow-black/20">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffe4b5] uppercase leading-none">Hỗ trợ 24/7 Hotline</p>
                  <a
                    href={`tel:${BRAND_INFO.hotline}`}
                    className="text-lg font-extrabold tracking-wide text-white hover:text-[#f8d48e] transition-colors block mt-1"
                  >
                    {BRAND_INFO.hotline}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center shadow-lg shadow-black/15">
                  <img src={zaloIcon} alt="Zalo" className="w-[26px] h-[26px] object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffe4b5] uppercase leading-none">Zalo Tư Vấn</p>
                  <a
                    href="https://zalo.me/0931133790"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-extrabold tracking-wider text-white hover:text-[#f8d48e] transition-colors block mt-1"
                  >
                    0931 133 790
                  </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/35 flex items-center justify-center text-[#f7e2a8] shadow-lg shadow-black/20">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffe4b5] uppercase leading-none">Email Phòng Giao dịch</p>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-xs text-white/90 hover:text-[#f8d48e] transition-colors block mt-1 font-sans">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/35 flex items-center justify-center text-[#f7e2a8] shadow-lg shadow-black/20">
                  <HelpCircle className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffe4b5] uppercase leading-none">Địa chỉ làm việc</p>
                  <p className="text-xs font-medium text-white/95 mt-1">{BRAND_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
