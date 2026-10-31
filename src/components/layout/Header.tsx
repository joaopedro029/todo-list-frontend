"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bell, User } from "lucide-react";

export function Header() {
  type NavOptions = "ATIVIDADES" | "HOJE" | "ARQUIVADAS";

  const [isActive, setIsActive] = useState<NavOptions>("ATIVIDADES");

  return (
    <header className="w-full px-4 py-3 shadow-xs">
      <nav className="flex items-center justify-between w-full max-w-5xl m-auto">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            onClick={() => {
              setIsActive("ATIVIDADES");
            }}
          >
            <div className="flex md:hidden items-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
              ></Image>
              <div className="flex flex-col">
                <p className="text-[12px] text-[#434655] leading-none">
                  FocusFlow
                </p>
                <p className="text-[18px] text-[#131B2E] leading-none">
                  Minhas tarefas
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
              ></Image>
              <p className="text-[18px] text-[#131B2E]">FocusFlow</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className={`${isActive === "ATIVIDADES" ? " text-[#131B2E] font-semibold bg-[#EAEDFF] rounded-lg" : "font-medium text-[#434655]"}  px-4 py-2 text-[14px]`}
              onClick={() => {
                setIsActive("ATIVIDADES");
              }}
            >
              Atividades
            </Link>
            <Link
              href="/"
              className={`${isActive === "HOJE" ? " text-[#131B2E] font-semibold bg-[#EAEDFF] rounded-lg" : "font-medium text-[#434655]"}  px-4 py-2 text-[14px]`}
              onClick={() => {
                setIsActive("HOJE");
              }}
            >
              Hoje
            </Link>
            <Link
              href="/"
              className={`${isActive === "ARQUIVADAS" ? "text-[#131B2E] font-semibold bg-[#EAEDFF] rounded-lg" : "font-medium text-[#434655]"}  px-4 py-2 text-[14px]`}
              onClick={() => {
                setIsActive("ARQUIVADAS");
              }}
            >
              Arquivadas
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/" className="md:hidden">
            <Bell size={20} color="#434655"></Bell>
          </Link>

          <Link href="/" className="bg-primary rounded-full p-2">
            <User color="white" size={18}></User>
          </Link>
        </div>
      </nav>
    </header>
  );
}
