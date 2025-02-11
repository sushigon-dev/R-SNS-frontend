"use client";

import Link from "next/link";
import Image from "next/image";
import { LoginButton, RegisterButton, Account } from "@/components/auth";

const isLogin = true;

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background divide-y border-b border-border">
      <div className="flex justify-between px-4 lg:px-6">
        <div className="flex items-center space-x-4 md:space-x-10 pt-2">
          <Link href="/">
            <Image
              src="/logo/R-SNS.svg"
              alt="logo"
              width={40}
              height={40}
              className="w-32 m-2 mt-4"
            />
          </Link>
          <nav className="flex items-center gap-4 text-sm pt-2">
            <Link
              href="/about"
              className="font-medium text-secondary-foreground hover:text-gray-700"
            >
              About
            </Link>
            <Link
              href="/main"
              className="font-medium text-secondary-foreground hover:text-gray-700"
            >
              Posts
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isLogin ? (
            <Account
              username="寿限無寿限無五却のすりきれ海砂利水魚の水行末雲来末風来末食う寝る処に住む処
              藪ら柑子の藪柑子パイポパイポパイポのシューリンガンシューリンガンのグーリンダイグーリンダイのポンポコピーのポンポコナーの長久命の長助"
              userlink="/profile"
              avatarSrc="/oauth_logo/github.svg"
              avaterAlt="JD"
              avaterFallback="JD"
            />
          ) : (
            <>
              <LoginButton className="bg-backgroung text-primary border border-primary hover:bg-gray-200" />
              <RegisterButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
