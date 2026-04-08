import Image from "next/image";
import { anton } from "../Font/Font";

const CTA1 = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[120px] w-full sm:h-[150px] lg:h-[170px]">
        <Image
          src="/CTA-1.png"
          alt="Upgrade your intro cards today"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative z-10 flex h-full items-center px-5 sm:px-8 lg:px-10">
          <div>
            <h2
              className={`${anton.className} max-w-[360px] text-[1.5rem] leading-none text-white uppercase sm:max-w-[520px] sm:text-[2.2rem]`}
            >
              Upgrade Your Intro Cards Today!
            </h2>

            <a
              href="https://athleteclips.com/package-pricing-2/"
              className="mt-3 inline-flex rounded-full bg-[#ff9b3f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#ffa654]"
            >
              Get Your Video Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA1;