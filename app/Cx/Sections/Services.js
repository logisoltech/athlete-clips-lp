import Image from "next/image";
import { anton } from "../Font/Font";

const cards = [
  {
    title: "Dynamic Reels",
    image: "/card-1.png",
    alt: "Dynamic soccer reel preview",
    imageClassName: "scale-[1.16] object-[42%_34%]",
  },
  {
    title: "Pro Quality Videos",
    image: "/card-2.png",
    alt: "Pro quality sports video preview",
    accent: (
      <div className="absolute left-1/2 top-14 h-0 w-0 -translate-x-1/2 border-x-16 border-t-24 border-x-transparent border-t-[#ff4a3a]" />
    ),
  },
  {
    title: "Slow-Mo & Effects",
    image: "/card-3.jpg",
    alt: "Slow motion soccer edit preview",
  },
];

const Services = () => {
  return (
    <section
      className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10"
      style={{ backgroundColor: "#2d204e" }}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className={`${anton.className} text-center text-[2.4rem] leading-none text-white uppercase sm:text-[3.5rem]`}
        >
          Services We Offer
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-xl bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-[280px] sm:h-[320px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={card.imageClassName ?? "object-cover"}
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.38)_100%)]" />

                <h3
                  className={`${anton.className} absolute left-1/2 top-4 w-full -translate-x-1/2 px-4 text-center text-[1.65rem] leading-none text-white uppercase sm:text-[1.9rem]`}
                >
                  {card.title}
                </h3>

                {card.accent ?? null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;