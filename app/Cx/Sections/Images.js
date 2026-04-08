import Image from "next/image";
import { anton } from "../Font/Font";

const Images = () => {
  return (
    <section
      className="relative z-10 overflow-visible pb-10 sm:pb-14"
      style={{ backgroundColor: "#2d204e" }}
    >
      <div className="absolute right-4 top-[81%] hidden h-48 w-1 -translate-y-1/2 bg-cyan-400 lg:block" />

      <div className="mx-auto max-w-7xl px-0 lg:px-10">
        <div className="relative z-0 mx-auto w-[108%] max-w-none -translate-x-[4%] lg:w-[116%] lg:-translate-x-[6%]">
          <Image
            src="/3-images.png"
            alt="Athletes playing on the field"
            width={1600}
            height={520}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:flex lg:justify-end lg:px-0 lg:pt-0">
          <div className="max-w-[520px] text-center lg:-mt-48 lg:text-right">
            <h2
              className={`${anton.className} text-[2rem] leading-[0.95] text-white sm:text-[2.8rem]`}
            >
              Talent Gets You On The Field. Visibility Gets You Recruited.
            </h2>

            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Turn your plays into EPIC highlight reels!
            </p>

            <a
              href="https://athleteclips.com/package-pricing-2/"
              className="mt-5 inline-flex rounded-xl bg-[#ff9b3f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ffa654]"
            >
              Get Your Video Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;