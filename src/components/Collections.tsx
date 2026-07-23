import { useRef, useState } from "react";
import { COLLECTIONS } from "../data";
import { Collection } from "../types";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  CalendarDays,
  Crown,
  UsersRound,
  MoveHorizontal,
} from "lucide-react";

interface CollectionsProps {
  onSelectCollection: (collection: Collection) => void;
}

// Số thẻ xếp lớp phía sau thẻ chính (không tính thẻ đang xem)
const STACK_DEPTH = 2;
// Kéo quá ngưỡng này (px) thì coi như chuyển thẻ
const SWIPE_THRESHOLD = 80;

export default function Collections({ onSelectCollection }: CollectionsProps) {
  const total = COLLECTIONS.length;

  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [exitDir, setExitDir] = useState<"left" | "right" | null>(null);

  const startXRef = useRef(0);

  const current = COLLECTIONS[index];

  const getIcon = (icon?: string) => {
    switch (icon) {
      case "Users":
        return <Users className="h-5 w-5" />;
      case "CalendarDays":
        return <CalendarDays className="h-5 w-5" />;
      case "Crown":
        return <Crown className="h-5 w-5" />;
      case "UsersRound":
        return <UsersRound className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  const triggerExit = (dir: "left" | "right") => {
    if (transitioning) return;
    setExitDir(dir);
    setTransitioning(true);
  };

  const goNext = () => triggerExit("left");
  const goPrev = () => triggerExit("right");

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // opacity và transform cùng transition => onTransitionEnd bắn 2 lần, chỉ xử lý 1 lần theo transform
    if (e.propertyName !== "transform") return;
    if (!transitioning || !exitDir) return;
    setIndex((prev) =>
      exitDir === "left" ? (prev + 1) % total : (prev - 1 + total) % total
    );
    setTransitioning(false);
    setExitDir(null);
    setDragX(0);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (transitioning) return;
    e.preventDefault();
    setDragging(true);
    startXRef.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    // chặn cử chỉ cuộn trang mặc định của trình duyệt trong lúc kéo (đặc biệt trên mobile)
    e.preventDefault();
    setDragX(e.clientX - startXRef.current);
  };

  const handlePointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragX <= -SWIPE_THRESHOLD) {
      triggerExit("left");
    } else if (dragX >= SWIPE_THRESHOLD) {
      triggerExit("right");
    } else {
      setDragX(0);
    }
  };

  // style cho thẻ chính (đang kéo / đang bay ra)
  const frontTransform =
    transitioning && exitDir
      ? `translateX(${exitDir === "left" ? -520 : 520}px) rotate(${
          exitDir === "left" ? -12 : 12
        }deg)`
      : `translateX(${dragX}px) rotate(${dragX / 24}deg)`;

  const frontOpacity = transitioning && exitDir ? 0 : 1;

  const renderNav = () => (
    <>
      <button
        onClick={goPrev}
        aria-label="Bộ sưu tập trước"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b] transition-colors hover:bg-[#7c142b] hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        onClick={goNext}
        aria-label="Bộ sưu tập tiếp theo"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b] transition-colors hover:bg-[#7c142b] hover:text-white"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
      <span className="text-xs font-semibold tracking-widest text-gray-400">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </>
  );

  return (
    <section id="collections" className="luxury-section reveal bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
              4 NHÓM SẢN PHẨM
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2c2c2c] sm:text-4xl">
              Giải Pháp Quà Tặng Theo Từng Mục Tiêu
            </h2>
          </div>
        </div>

        {/* Drag carousel */}
        <div className="grid gap-6 md:gap-10 md:grid-cols-2 md:items-center">
          {/* Left: nội dung đổi theo thẻ hiện tại */}
          <div className="order-3 flex flex-col md:order-1">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b]">
                {getIcon(current.icon)}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                  {current.title}
                </h3>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#A8741A]">
                  {current.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              {current.description}
            </p>

            {current.highlights && (
              <ul className="mt-5 space-y-2.5">
                {current.highlights.map((item, i) => (
                  <li
                    key={i}
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

            {/* CTA */}
            <button
              onClick={() => onSelectCollection(current)}
              className="group mt-8 flex w-fit flex-col items-start gap-1.5"
            >
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7c142b] uppercase transition-colors duration-300 group-hover:text-[#A8741A] group-active:text-[#A8741A]">
                Khám Phá Bộ Sưu Tập
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
              </span>
              <span className="h-[1.5px] w-8 bg-[#7c142b] transition-all duration-300 ease-out group-hover:w-full group-hover:bg-[#d4af37] group-active:w-full group-active:bg-[#d4af37]" />
            </button>

            {/* Prev / Next + counter — desktop: nằm cuối cột trái như cũ */}
            <div className="mt-10 hidden items-center gap-4 md:flex">
              {renderNav()}
            </div>
          </div>

          {/* Prev / Next + counter — mobile: nằm ngay giữa ảnh và phần chữ cho dễ nhận biết đã đổi thẻ */}
          <div className="order-2 flex items-center gap-4 md:hidden">
            {renderNav()}
          </div>

          {/* Right: stack card kéo để lướt */}
          <div className="order-1 relative flex justify-center pr-10 pb-6 md:order-2 md:justify-end md:pr-12">
            {/* Hint kéo */}
            <div className="absolute -top-8 right-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
              Trượt để xem
              <MoveHorizontal className="h-3.5 w-3.5" />
            </div>

            <div className="relative h-[360px] w-full max-w-[280px] select-none overflow-visible">
              {/* Thẻ xếp lớp phía sau (chỉ để trang trí chiều sâu) */}
              {Array.from({ length: STACK_DEPTH }).map((_, i) => {
                const behindIndex = (index + i + 1) % total;
                const behind = COLLECTIONS[behindIndex];
                const depth = i + 1;
                return (
                  <div
                    key={behindIndex}
                    className="absolute inset-0 overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_15px_35px_rgba(15,15,15,0.06)]"
                    style={{
                      transform: `translateX(${depth * 16}px) translateY(${
                        depth * 10
                      }px) rotate(${depth * 3.5}deg)`,
                      transformOrigin: "bottom left",
                      zIndex: STACK_DEPTH - i,
                      opacity: 1 - depth * 0.18,
                    }}
                  >
                    <img
                      src={behind.image}
                      alt={behind.title}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                );
              })}

              {/* Thẻ chính - kéo được */}
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onTransitionEnd={handleTransitionEnd}
                className="absolute inset-0 z-10 cursor-grab touch-none overflow-hidden overscroll-contain rounded-[28px] border border-gray-100 bg-white shadow-[0_30px_70px_rgba(124,20,43,0.12)] active:cursor-grabbing"
                style={{
                  transform: frontTransform,
                  opacity: frontOpacity,
                  touchAction: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                  transition: dragging
                    ? "none"
                    : "transform 300ms ease-out, opacity 300ms ease-out",
                }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {current.badge && (
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-widest text-[#7c142b] shadow-sm">
                      {current.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
