"use client";

import Link from "next/link";
import Image from "next/image";
import { AuthField, AuthAccountField } from "@/components/auth";

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
        <AuthAccountField loginButtonClassName="bg-backgroung text-primary border border-primary hover:bg-gray-200" />
      </div>
    </header>
  );
}

export default Header;
