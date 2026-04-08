import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Nav = () => {
  return (
    <nav
      className="relative overflow-hidden px-4 py-4 sm:px-6 lg:px-10"
      style={{ backgroundColor: "#2d204e" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[32%] top-0 h-full w-28 -skew-x-[28deg] bg-[#4d377f]/35" />
        <div className="absolute left-[50%] top-0 h-full w-24 -skew-x-[28deg] bg-[#5a428f]/30" />
        <div className="absolute bottom-0 left-[42%] h-3 w-28 -skew-x-[40deg] bg-cyan-400/70" />
      </div>

      <div className="relative mx-auto flex min-h-[78px] max-w-7xl items-center justify-between">
        <a href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Athlete Clips"
            width={92}
            height={72}
            priority
            className="h-auto w-[78px] sm:w-[92px]"
          />
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="mailto:info@athleteclips.com"
            aria-label="Email Athlete Clips"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#6f6f79] transition hover:bg-white hover:text-[#2d204e]"
          >
            <HiOutlineMail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;