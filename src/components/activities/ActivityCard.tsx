import { Activity } from "@/src/types/activity";
import { ArrowRight, ChevronRight, Code, EllipsisVertical } from "lucide-react";
import Link from "next/link";

export function ActivityCard({ name, icon, tasks }: Activity) {
  const tasksCompleted = tasks.filter((task) => task.completed);
  const tasksIncomplete = tasks.filter((task) => !task.completed);

  return (
    <div className="w-full md:max-w-76 bg-white rounded-xl p-6 shadow-xs shadow-gray/0.01">
      <div className="flex items-center gap-3 md:gap-2 h-10">
        <div className=" w-10 h-full flex items-center justify-center bg-[#EAEDFF] rounded-lg">
          <Code width={16} color="#004AC6"></Code>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="h-10 flex flex-col justify-between md:justify-center">
            <h2 className="text-[16px] md:text-[18px] leading-none text-[#131B2E] font-medium">
              {name}
            </h2>
            <p className="md:hidden tracking-[0.44px] font-medium leading-none text-[12px] text-[#434655]">
              {tasksCompleted.length}/{tasks.length} tarefas concluídas
            </p>
          </div>

          <div className="flex">
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <EllipsisVertical width={16} color="#434655"></EllipsisVertical>
            </div>
            <div className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
              <ChevronRight width={20} color="#434655"></ChevronRight>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <div className="hidden md:flex items-center justify-between mb-1">
          <p className="text-[12px] tracking-[0.24px] text-[#434655] font-medium">
            {tasksCompleted.length} de {tasks.length} tarefas concluídas
          </p>
          <p className="text-[12px] text-[#131B2E] font-semibold">
            {Math.floor((tasksCompleted.length / tasks.length) * 100)}%
          </p>
        </div>
        <div className="h-1.5 w-full bg-[#EAEDFF]">
          <div
            style={{
              width: `${(tasksCompleted.length / tasks.length) * 100}%`,
            }}
            className={`h-full bg-[#004AC6] rounded-full`}
          ></div>
        </div>
      </div>
      <div className="hidden md:flex flex-col mt-6">
        <h3 className="uppercase text-[#434655] text-[11px] tracking-[0.55px] font-medium">
          Próxima tarefa
        </h3>
        <div className="flex flex-col mt-1 gap-1.5 w-full"></div>
      </div>
      <div className="hidden md:flex mt-8">
        <Link href="/" className="flex items-center gap-1">
          <p className="text-[#004AC6] text-[14px] font-medium">Ver tarefas</p>
          <ArrowRight color="#004AC6" width={15}></ArrowRight>
        </Link>
      </div>

      <div className="flex md:hidden justify-between items-center bg-[#F2F3FF] rounded-lg px-3 py-2.5 mt-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-4 h-4 bg-[#E2E7FF] rounded-sm">
            <input
              type="radio"
              className="appearance-none border border-[#004AC6] checked:border-[#004AC6] checked:ring-1 checked:ring-inset checked:ring-white checked:bg-[#004AC6] w-2.5 h-2.5 rounded-full bg-white"
            />
          </div>

          <p className="text-[#131B2E] text-[13px]">{tasks[0]?.name}</p>
        </div>
        <div className="text-[#004AC6] text-[11px] font-semibold tracking-[0.44px] bg-[#DBE1FF] rounded-full px-2 py-0.5">
          {Math.floor((tasksCompleted.length / tasks.length) * 100)}%
        </div>
      </div>
    </div>
  );
}
