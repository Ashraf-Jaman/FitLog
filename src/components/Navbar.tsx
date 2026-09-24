"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { scrollToLibrary } from "@/lib/scroll";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <header className="w-full border-b border-[#1d1f24] bg-[#0d0f12]">
      <nav className="flex min-h-16 w-full items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-20">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={120}
            height={38}
            className="h-auto w-22.5 sm:w-30"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">

          {/* Workouts */}
          <button
            type="button"
            onClick={scrollToLibrary}
            className="rounded-full px-5 py-2 text-sm font-medium text-[#8b8d91] transition-all hover:text-[#ccff00]"
          >
            Workouts
          </button>

          {/* My Plan */}
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-[#182c0d] text-[#ccff00]"
                    : "text-[#8b8d91] hover:text-[#ccff00]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* Plan */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="hidden text-sm text-[#8b8d91] sm:inline">
              Plan
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="hidden text-sm text-[#8b8d91] sm:inline">
              Saved
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#35383e] px-1.5 text-xs text-[#a5a7ab]">
              0
            </span>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-center gap-8 border-t border-[#17191d] py-3 sm:gap-12 md:hidden">

        {/* Workouts */}
        <button
          type="button"
          onClick={scrollToLibrary}
          className="text-sm font-medium text-[#8b8d91] transition-colors hover:text-[#ccff00]"
        >
          Workouts
        </button>

        {/* My Plan */}
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                active
                  ? "text-[#ccff00]"
                  : "text-[#8b8d91] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;