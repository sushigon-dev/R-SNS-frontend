"use client";

import Image from "next/image";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { LoginButton, RegisterButton } from "@/components/auth";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zenkakuGothicNew",
  display: "swap",
});

function RootPage() {
  return (
    <>
      <div className="fixed right-6 bottom-0 w-10/12 h-5/6 z-[-1] opacity-30 overflow-hidden">
        <Image
          src="/logo/R-SNS_mark.svg"
          alt="R-SNS-mark"
          layout="fill"
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-items-start gap-6 px-4 md:px-10 pt-10">
        <p
          className={`text-5xl font-bold leading-normal bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 bg-clip-text text-transparent ${zenKakuGothicNew.className}`}
        >
          みんなで続ける力を育てる。
          <br />
          習慣共有SNSで
          <br className="block md:hidden" />
          モチベーションUP
        </p>
        <p className="text-lg text-secondary-foreground leading-normal">
          習慣づけたいことを投稿して、目標達成の進捗を記録。
          <br />
          コメントでアドバイスや励ましをもらいながら、みんなと一緒に続ける力を育てましょう！
        </p>
        <div className="flex items-center gap-6 m-4">
          <LoginButton className="bg-backgroung text-primary text-sm md:text-xl border p-7 border-primary hover:bg-gray-200" />
          <RegisterButton className="text-xl p-7">今すぐ始める</RegisterButton>
        </div>
      </div>
    </>
  );
}

export default RootPage;
