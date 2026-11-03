"use client";

import { LoaderCircle, TrendingUp } from "lucide-react";
import { ActivityCard } from "../components/activities/ActivityCard";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Activity } from "../types/activity";
import { EmptyCardActivity } from "../components/activities/EmptyCardActivity";
import { useEffect, useState } from "react";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>();

  useEffect(() => {
    async function getActivities() {
      const response = await fetch(
        "http://localhost:3333/app/activity/get-all",
        {
          credentials: "include",
        },
      );

      const data = await response.json();

      setActivities(data.data);
    }
    getActivities();
  }, []);

  return (
    <section className="w-full px-4 max-w-240 md:p-0 mt-8 m-auto">
      <div className="flex items-end justify-between mb-8">
        <div className="flex md:flex-col items-center md:items-start gap-1.5 md:gap-0">
          <div className="hidden md:flex items-center gap-2">
            <span className="uppercase text-[11px] text-[#434655] tracking-[0.55px] font-medium">
              Visão geral
            </span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            <span className="text-[#434655] tracking-[0.44px] font-medium text-[11px] ">
              4 Áreas ativas
            </span>
          </div>
          <h1 className="text-[#131B2E] tracking-[-0.6px] md:tracking-[-0.9px] text-[24px] md:text-[36px] font-semibold leading-11">
            Atividades
          </h1>
          <div className="md:hidden bg-[#E2E7FF] rounded-full flex items-center justify-center h-5 px-2">
            <p className="text-primary text-[12px] tracking-[0.24px] font-medium">
              4 Ativas
            </p>
          </div>
          <p className="hidden md:block text-[#434655] text-[14px] leading-5.5 ">
            Organize suas áreas de foco e acompanhe seu progresso diário.
          </p>
        </div>
        <PrimaryButton
          name="+ Nova atividade"
          horizontalPaddingPx={16}
          verticalPaddingPx={10}
        ></PrimaryButton>
      </div>

      <div className="flex md:hidden justify-between w-full mb-4 bg-white rounded-xl p-4 shadow-xs shadow-gray/0.01">
        <div className="flex flex-col gap-1">
          <p className="text-[#434655] text-[12px] text-medium tracking-[0.24px] leading-4">
            Progresso diário geral
          </p>
          <p className="text-[#131B2E] text-[18px] font-semibold tracking-[-0.18px] leading-6">
            14 de 20 tarefas feitas
          </p>
          <div className="flex items-center gap-1">
            <TrendingUp color="#006E2D" width={15}></TrendingUp>
            <p className="text-[#006E2D] text-[11px] tracking-[0.44px] font-semibold ">
              70% do objetivo alcançado hoje
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-6">
        {activities?.map((item) => (
          <ActivityCard
            key={item.id}
            id={item.id}
            name={item.name}
            icon={item.icon}
            tasks={item.tasks}
          ></ActivityCard>
        ))}
        <EmptyCardActivity></EmptyCardActivity>
      </div>
    </section>
  );
}
