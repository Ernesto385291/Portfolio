import Image from "next/image";
import type { Post } from "@/data/content";

// Each card gets a fixed tilt / lift / overlap so the arrangement is stable
// between renders rather than randomised on every request.
const ARRANGEMENT = [
  { rotate: "-7deg", translateY: "10px", marginLeft: "0" },
  { rotate: "4deg", translateY: "-14px", marginLeft: "-11%" },
  { rotate: "-3deg", translateY: "18px", marginLeft: "-9%" },
  { rotate: "6deg", translateY: "-8px", marginLeft: "-11%" },
];

export const CoverStrip = ({ items }: { items: Post[] }) => {
  const cards = items.filter((item) => item.Cover).slice(0, ARRANGEMENT.length);
  if (!cards.length) return null;

  return (
    <div
      aria-hidden="true"
      className="relative my-20 border-y border-border bg-dot-grid [background-size:8px_8px] py-14 md:my-24 md:py-20"
    >
      <div className="flex items-center justify-center">
        {cards.map((card, index) => {
          const { rotate, translateY, marginLeft } = ARRANGEMENT[index];
          return (
            <div
              key={card.id}
              style={{
                rotate,
                translate: `0 ${translateY}`,
                marginLeft: index === 0 ? undefined : marginLeft,
                zIndex: index % 2 === 0 ? 1 : 2,
              }}
              /* Outer radius 14px = inner radius 8px + 6px frame padding. */
              className="relative w-[38vw] max-w-[17rem] shrink-0 rounded-xl bg-card p-1.5 shadow-tilt"
            >
              <div className="image-outline relative aspect-4/3 overflow-hidden rounded-md">
                <Image
                  src={card.Cover!}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 272px, 38vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
