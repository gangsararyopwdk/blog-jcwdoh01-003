"use client";

import Link from "next/link";
import Image from "next/image";
import { navs } from "./static";
import { useAuthStore } from "@/stores/authStore";

const Navbar = () => {
  const { user, signOut } = useAuthStore();

  return (
    <div className="w-full bg-black">
      <div className="w-full max-w-[1440px] h-[54px] mx-auto px-16">
        <div className="w-full h-full flex items-center">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="relative w-[235px] h-[32px]">
              <Image
                src="/static/logo/logo-white.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex flex-row items-center gap-[30px]">
              {navs.map((nav) => (
                <Link key={nav.id} href={nav.url}>
                  <h2 className="text-sm leading-[24px] text-white uppercase">
                    {nav.label}
                  </h2>
                </Link>
              ))}
            </div>

            {user.username ? (
              <div className="flex flex-row items-center gap-[16px]">
                <p className="font-mono text-base text-white">
                  Halo, {user.username}
                </p>

                <button
                  className="p-[8px_16px] bg-white rounded-[2px] cursor-pointer"
                  onClick={() => signOut()}
                >
                  <p className="p-0 font-mono text-base text-black">Sign Out</p>
                </button>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-[16px]">
                <Link href="/sign-in">
                  <button className="p-[8px_24px] bg-white rounded-[2px] cursor-pointer">
                    <p className="p-0 font-mono text-base text-black">
                      Sign In
                    </p>
                  </button>
                </Link>

                <Link href="/sign-up">
                  <button className="p-[8px_24px] bg-white rounded-[2px] cursor-pointer">
                    <p className="p-0 font-mono text-base text-black">
                      Sign Up
                    </p>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
