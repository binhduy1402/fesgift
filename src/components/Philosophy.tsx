import { useState } from "react";
import story1 from "../assets/story1.jpg";


export default function Philosophy() {
  const [showStory1, setShowStory1] = useState(false);
  const [showStory2, setShowStory2] = useState(false);
  const [showStory3, setShowStory3] = useState(false);
return (
<section
  id="philosophy"
  className="reveal relative overflow-hidden bg-white py-24"
>
<div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c142b]/5 blur-3xl" />
<div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    <div className="max-w-4xl mx-auto text-center">

      <span className="mb-3 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
        CÂU CHUYỆN THƯƠNG HIỆU
      </span>

      <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.3] text-[#2c2c2c]">
        Mỗi Món Quà Là Một
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
          Trải Nghiệm Thương Hiệu
        </span>
      </h2>

      <p className="mt-8 text-xl leading-relaxed text-gray-600">
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

<div className="mt-16 grid gap-8 md:grid-cols-3">

  {/* STORY 1 */}
  <button
    onClick={() => setShowStory1(true)}
    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="overflow-hidden">
      <img
        src={story1}
        alt="Story 1"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-5">
      <h3 className="text-center text-xl font-bold text-[#7c142b]">
        Câu chuyện Sunlife
      </h3>

      <p className="mt-2 text-center text-sm text-gray-500">
        Chạm để xem câu chuyện
      </p>
    </div>
  </button>

  {/* STORY 2 */}
  <button
    onClick={() => setShowStory2(true)}
    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="flex h-64 items-center justify-center bg-[#f7f5f2]">
      <div className="text-center">
        <div className="text-5xl">🖼️</div>

        <p className="mt-3 text-sm text-gray-400">
          Hình sẽ cập nhật
        </p>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-center text-xl font-bold text-[#7c142b]">
        Câu chuyện 02
      </h3>

      <p className="mt-2 text-center text-sm text-gray-500">
        Chạm để xem câu chuyện
      </p>
    </div>
  </button>

  {/* STORY 3 */}
  <button
    onClick={() => setShowStory3(true)}
    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="flex h-64 items-center justify-center bg-[#f7f5f2]">
      <div className="text-center">
        <div className="text-5xl">🖼️</div>

        <p className="mt-3 text-sm text-gray-400">
          Hình sẽ cập nhật
        </p>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-center text-xl font-bold text-[#7c142b]">
        Câu chuyện 03
      </h3>

      <p className="mt-2 text-center text-sm text-gray-500">
        Chạm để xem câu chuyện
      </p>
    </div>
  </button>

</div>


{/* POPUP STORY 1 */}
{showStory1 && (
  <div
    onClick={() => setShowStory1(false)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
    >
      <img
        src={story1}
        alt="Story 1"
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#7c142b]">
          Câu chuyện Sun Life
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">
          Sunlife với mong muốn mang đến những món quà tuyệt vời 
          đến Khách hàng của mình, do đó Sunllife chọn Mars để
          đồng hành trên hành trình đó.
        </p>

        <button
          onClick={() => setShowStory1(false)}
          className="mt-6 w-full rounded-xl bg-[#7c142b] py-3 font-semibold text-white transition transition active:scale-95"
        >
          Đóng
        </button>

      </div>
    </div>
  </div>
)}

{/* POPUP STORY 2 */}
{showStory2 && (
  <div
    onClick={() => setShowStory2(false)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
    >

      <div className="flex h-64 items-center justify-center bg-[#f7f5f2]">
        <span className="text-gray-400">
          Hình sẽ cập nhật
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#7c142b]">
          Câu chuyện 02
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">
          Nội dung câu chuyện sẽ được bổ sung sau khi hoàn thiện
          hình ảnh và thông tin dự án.
        </p>

        <button
          onClick={() => setShowStory2(false)}
          className="mt-6 w-full rounded-xl bg-[#7c142b] py-3 font-semibold text-white"
        >
          Đóng
        </button>

      </div>
    </div>
  </div>
)}

{/* POPUP STORY 3 */}
{showStory3 && (
  <div
    onClick={() => setShowStory3(false)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
    >

      <div className="flex h-64 items-center justify-center bg-[#f7f5f2]">
        <span className="text-gray-400">
          Hình sẽ cập nhật
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#7c142b]">
          Câu chuyện 03
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">
          Nội dung câu chuyện sẽ được cập nhật trong thời gian tới
          cùng với hình ảnh minh họa.
        </p>

        <button
          onClick={() => setShowStory3(false)}
          className="mt-6 w-full rounded-xl bg-[#7c142b] py-3 font-semibold text-white"
        >
          Đóng
        </button>

      </div>
    </div>
  </div>
)}

    </div>

  </div>
</section>
);
}
