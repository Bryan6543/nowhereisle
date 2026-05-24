"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { navLinks } from "@/app/lib/navLinks";

export default function HeadTop() {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // Main header Container */}
      <header
        className={clsx(
          "fixed top-10 left-0 right-0 z-9999 transition-all duration-300 w-[80%] m-auto bg-transparent",
        )}
      >
        <div
          className={clsx(
            "hidden sm:flex mx-auto px-6 flex-row-reverse sm:flex-row items-center justify-between transition-all duration-500",
            scrolled ? "opacity-0 -translate-y-20" : "",
          )}
        >
          <Link
            href={"/home"}
            className={clsx("text-2xl font-bold transition-all duration-300")}
          >
            <Image
              src={"/nowhereislelogo.png"}
              width={1000}
              height={1000}
              alt=""
              className={clsx("w-auto transition-all duration-300 h-25")}
            />
          </Link>

          {/* nav bar desktop*/}
          <nav className="items-center gap-8 hidden sm:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "group font-medium text-sm transition-all duration-300 hover:opacity-75 relative inline-block py-1",
                )}
                target={item.isExternal ? "_blank" : undefined}
              >
                {item.label}

                {/* Animated Underline */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
        </div>
        {/* Scrolled Navigation bar */}
        <div
          onClick={() => setIsActive(!isActive)}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className={clsx(
            "mx-auto -translate-y-15 px-6 flex items-center justify-end transition-all duration-500 ease-in-out",
            scrolled ? "" : "opacity-0 translate-y-20",
          )}
        >
          <div
            className={clsx(
              "bg-black text-white rounded-2xl flex gap-2 px-3 transition-all duration-1000 ease-in-out",
              isActive ? " w-200 gap-5 " : "w-30 gap-2",
            )}
          >
            <Image
              className="p-3 w-15 h-15 object-container hover:opacity-80"
              src={"/logo.png"}
              alt=""
              width={100}
              height={100}
            />
            {isActive ? (
              <nav
                className={clsx(
                  "items-center gap-8 flex duration-500 transition-all overflow-hidden",
                  isActive ? "" : "opacity-0 ",
                )}
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      "group font-medium text-xs transition-all duration-300 hover:opacity-70 whitespace-nowrap",
                    )}
                  >
                    {item.label}
                    <div className="group-hover:w-full transition-all duration-300 bg-white w-0 h-0.5 opacity-60" />
                  </Link>
                ))}
              </nav>
            ) : (
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="w-5 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
                <div className="w-5 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
                <div className="w-5 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="fixed sm:hidden top-10 left-10">
          <div
            onClick={() => setIsActive(!isActive)}
            className={clsx(
              "bg-black text-white rounded-2xl flex gap-2 px-3 transition-all duration-1000 ease-in-out text-center",
              isActive ? " w-70 h-70 gap-5 " : "w-30 gap-2",
            )}
          >
            {isActive ? (
              <></>
            ) : (
              <Image
                className={clsx(
                  "p-3 w-15 h-15 object-container hover:opacity-80",
                  isActive ? "opacity-0" : "opacity-100",
                )}
                src={"/logo.png"}
                alt=""
                width={100}
                height={100}
              />
            )}

            {isActive ? (
              <nav
                className={clsx(
                  "items-center py-5 gap-2 flex flex-col  duration-500 transition-all overflow-hidden text-center text-lg",
                  isActive ? "" : "opacity-0 ",
                )}
              >
                <Link
                  className="group font-medium text-xs transition-all duration-300 hover:opacity-70 whitespace-nowrap"
                  href={"/home"}
                >
                  <p className="text-lg">Home</p>
                </Link>
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      "group font-medium text-base transition-all duration-300 hover:opacity-70 whitespace-nowrap ",
                    )}
                  >
                    {item.label}
                    <div className="group-hover:w-full transition-all duration-300 bg-white w-0 h-0.5 opacity-60" />
                  </Link>
                ))}
              </nav>
            ) : (
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="w-5 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
                <div className="w-5 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
                <div className="w-5 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
