import { Eye, Award } from "lucide-react";

export default function About() {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Left Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-xl border border-secondary-brand/10 p-2 bg-cream-bg">
              <img
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop"
                alt="Chế tác quà tặng thủ công FESGift"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              {/* Gold decorative line */}
              <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-muted-gold/40 pointer-events-none" />
            </div>
          </div>

          {/* About Right Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#7c142b] uppercase block mb-1">
                VỀ FESGIFT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-text font-bold tracking-tight">
                Tâm Huyết Trong Từng Chi Tiết
              </h2>
            </div>

            <p className="text-sm text-charcoal-text/75 leading-relaxed font-light">
              FESGift khởi nguồn từ khát khao nâng tầm nghệ thuật tặng quà tại Việt Nam. Chúng tôi không chỉ cung cấp những sản phẩm bao bì hữu hình, mà còn tự hào là người gieo duyên, đồng hành bền bỉ giúp các tập đoàn lớn truyền tải trọn vẹn sự tinh tế và thông điệp tri ân sâu sắc nhất đến khách hàng VIP của mình.
            </p>

            <div className="space-y-6 pt-4 border-t border-secondary-brand/10">
              
              {/* Vision Card */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-cream-bg border border-muted-gold/20 rounded-sm flex items-center justify-center text-primary-brand shadow-sm">
                  <Eye className="w-5 h-5 text-[#7c142b]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-charcoal-text uppercase">
                    Tầm Nhìn
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-text/70 mt-1 font-light leading-relaxed">
                    Trở thành biểu tượng của sự sang trọng, tinh tế và uy tín hàng đầu tại Việt Nam trong lĩnh vực cung ứng giải pháp quà tặng cao cấp cho doanh nghiệp.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-cream-bg border border-muted-gold/20 rounded-sm flex items-center justify-center text-primary-brand shadow-sm">
                  <Award className="w-5 h-5 text-[#7c142b]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-charcoal-text uppercase">
                    Sứ Mệnh
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-text/70 mt-1 font-light leading-relaxed">
                    Kiến tạo những giá trị tinh thần bền vững thông qua giải pháp quà tặng độc bản sáng tạo, kết nối chân tình và tôn vinh văn hóa bản địa quý giá.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
