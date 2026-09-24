import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-75 max-w-350 items-center justify-between overflow-hidden rounded-xl border border-[#24272d] bg-[#15171c] px-8 py-10 sm:px-10 lg:px-12">

        {/* Left Content */}
        <div>
          {/* Small Heading */}
          <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-[#ccff00] sm:text-xs">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-112.5 text-xs leading-5 text-[#8d929c] sm:text-sm">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <Link
            href="/workouts"
            className="mt-6 inline-flex items-center rounded-md bg-[#ccff00] px-5 py-2.5 text-[10px] font-bold uppercase text-black transition hover:bg-[#b9e600] sm:text-xs"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Right Image */}
        <div className="hidden shrink-0 md:block">
          <Image
            src="/images/banner-image.png"
            alt="Workout exercise"
            width={260}
            height={260}
            className="h-57.5 w-57.5 object-contain lg:h-65 lg:w-65"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;