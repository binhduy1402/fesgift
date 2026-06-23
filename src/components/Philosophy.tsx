export default function Philosophy() {
return (
<section id="philosophy" className="relative overflow-hidden bg-white py-24" >
<div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c142b]/5 blur-3xl" />
<div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    <div className="max-w-4xl mx-auto text-center">

      <span className="mb-3 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
        CÂU CHUYỆN THƯƠNG HIỆU
      </span>

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2c2c2c]">
        Mỗi Món Quà Là Một
        <span className="block text-[#7c142b]">
          Trải Nghiệm Thương Hiệu
        </span>
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-gray-600">
        FESGift không chỉ cung cấp quà tặng doanh nghiệp.
        Chúng tôi giúp doanh nghiệp truyền tải giá trị thương hiệu
        thông qua những sản phẩm được thiết kế riêng,
        chỉn chu và phù hợp với từng đối tượng nhận quà.
      </p>

      <p className="mt-6 text-base leading-relaxed text-gray-500">
        Từ ý tưởng, thiết kế, sản xuất đến giao hàng,
        mọi chi tiết đều được chăm chút nhằm tạo nên
        dấu ấn chuyên nghiệp và cảm xúc tích cực
        cho người nhận.
      </p>

    </div>

    <div className="mt-20">

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl border border-[#7c142b]/10 bg-[#faf7f2] p-8 text-center">
          <div className="text-4xl font-bold text-[#7c142b]">
            01
          </div>

          <h3 className="mt-4 font-semibold text-[#2c2c2c]">
            Ý Tưởng
          </h3>
        </div>

        <div className="rounded-2xl border border-[#7c142b]/10 bg-[#faf7f2] p-8 text-center">
          <div className="text-4xl font-bold text-[#7c142b]">
            02
          </div>

          <h3 className="mt-4 font-semibold text-[#2c2c2c]">
            Thiết Kế
          </h3>
        </div>

        <div className="rounded-2xl border border-[#7c142b]/10 bg-[#faf7f2] p-8 text-center">
          <div className="text-4xl font-bold text-[#7c142b]">
            03
          </div>

          <h3 className="mt-4 font-semibold text-[#2c2c2c]">
            Sản Xuất
          </h3>
        </div>

        <div className="rounded-2xl border border-[#7c142b]/10 bg-[#faf7f2] p-8 text-center">
          <div className="text-4xl font-bold text-[#7c142b]">
            04
          </div>

          <h3 className="mt-4 font-semibold text-[#2c2c2c]">
            Giao Hàng
          </h3>
        </div>

      </div>

    </div>

  </div>
</section>
);
}
