import Image from "next/image";
import { anton } from "../Font/Font";

const Hero = () => {
  return (
    <section
      className="relative z-20 overflow-visible"
      style={{ backgroundColor: "#2d204e" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-0 h-7 w-[52%] -skew-x-38 bg-cyan-400/80 sm:h-8" />
        <div className="absolute left-[-3%] top-5 h-10 w-[62%] -skew-x-38 bg-[#5a428f]/70 sm:top-6 sm:h-12" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(45,32,78,0)_0%,rgba(38,27,65,0.96)_100%)]" />
        <div className="absolute -left-[5%] bottom-6 h-16 w-[75%] -skew-x-34 bg-[#3b2a63]/90" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-78px)] max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[540px] lg:px-10 lg:py-16">
        <div className="relative z-10 max-w-[620px]">
          <h1
            className={`${anton.className} max-w-[620px] text-[2.4rem] leading-[0.92] text-white uppercase sm:text-[3.4rem] lg:text-[4.15rem]`}
          >
            Professional Sports
            <br />
            Highlight Reels
          </h1>

          <p className="mt-4 max-w-[360px] text-lg leading-7 text-white/90 sm:text-[1.55rem] sm:leading-9">
            Serious about playing college sports? This step isn&apos;t optional.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 text-white">
            <span className="text-xl font-semibold sm:text-[2rem]">
              Get your professional
            </span>
            <a
              href="https://athleteclips.com/package-pricing-2/"
              className="rounded-full bg-[#ff9b3f] px-5 py-2 text-base font-bold text-white transition hover:bg-[#ffa654] sm:text-lg"
            >
              Highlight Reel
            </a>
          </div>

          <p
            className={`${anton.className} mt-7 text-[1.6rem] leading-tight text-white uppercase sm:text-[2.25rem]`}
          >
            Use the code{" "}
            <span className="text-[#ff8f24]">&ldquo;Athlete 20&rdquo;</span> Get
            20% Off
          </p>
        </div>

        <div className="relative mt-8 h-[400px] w-full overflow-visible sm:h-[500px] lg:absolute lg:inset-y-0 lg:right-[-40%] lg:mt-6 lg:h-full lg:w-[64%]">
          <Image
            src="/hero-image.png"
            alt="Soccer player kicking a ball"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-contain object-bottom lg:object-bottom-right"
            style={{ transform: "scaleX(-1) scale(1.5)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;