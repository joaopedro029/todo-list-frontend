"use client";

import { TaskCard } from "@/src/components/tasks/TaskCard";
import { PrimaryButton } from "@/src/components/ui/PrimaryButton";
import type { Activity } from "@/src/types/activity";
import { Task } from "@/src/types/task";
import { ArrowLeft, Dot, EllipsisVertical, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Activity() {
  const data: Activity = {
    name: "Desenvolvimento",
    icon: "Code",
    tasks: [
      {
        name: "Aprender WebSocket",
        description: "testando sososxnoixc csuicsuscsug",
        completed: true,
      },
      { name: "Implementar autenticação JWT", completed: true },
      { name: "Estudar arquitetura MVC", completed: true },
      { name: "Criar testes unitários", completed: true },
      { name: "Estudar Next.js", completed: true },
    ],
  };
  const [activity, setActivity] = useState(data);

  function toggleStatusTask(task: Task) {
    setActivity((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.map((item2) => {
          return item2.name === task.name
            ? { ...item2, completed: !task.completed }
            : item2;
        }),
      };
    });
  }

  const completedTasks = activity.tasks?.filter((task) => task.completed);
  const incompleteTasks = activity.tasks?.filter((task) => !task.completed);

  return (
    <section className="bg-background w-full px-4 max-w-240 md:p-0 m-auto">
      <div className="flex flex-col gap-8 my-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft></ArrowLeft>
            <p>Voltar para as atividades</p>
          </Link>
          <EllipsisVertical className="md:hidden"></EllipsisVertical>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-xs shadow-gray/0.01 flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-[12px]">
              <div className="hidden md:flex items-center gap-1">
                <span className="text-primary uppercase  bg-[#E2E7FF] rounded-full px-2.5 py-0.5 font-semibold">
                  Workspace
                </span>
                <Dot color="#C3C6D7"></Dot>
                <span className="text-[#434655]">Foco semanal</span>
              </div>

              <div className="flex md:hidden items-center gap-0.5 w-fit text-primary uppercase bg-[#E2E7FF] rounded-full px-2.5 py-0.5 tracking-[0.55px] font-semibold">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mx-1"></div>
                <span>Workspace</span>
                <Dot></Dot>
                <span>Foco semanal</span>
              </div>
            </div>
            <h1 className="text-[#131B2E] text-[30px] font-semibold">
              Programação
            </h1>
            <div className="flex md:hidden">
              <PrimaryButton
                name="+ Nova tarefa"
                verticalPaddingPx={12}
              ></PrimaryButton>
            </div>
          </div>

          <div className="hidden md:flex items-start gap-2">
            <button className="rounded-lg bg-[#F2F3FF] px-4 py-2 text-[#131B2E] text-[14px] font-medium">
              Editar atividade
            </button>

            <button className="rounded-lg bg-[#F2F3FF] px-4 py-2">
              <Trash color="red" width={15}></Trash>
            </button>

            <PrimaryButton
              name="+ Nova tarefa"
              verticalPaddingPx={8}
              horizontalPaddingPx={16}
            ></PrimaryButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2>
            Pendentes <span>{incompleteTasks.length}</span>
          </h2>
          <p>Prioridade em execução</p>
        </div>
        {incompleteTasks?.map((task) => (
          <TaskCard
            key={task.name}
            task={task}
            fnToggleStatusTask={toggleStatusTask}
          ></TaskCard>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center justify-between">
          <h2>
            Concluídas <span>{completedTasks.length}</span>
          </h2>
          <p>Histórico recente</p>
        </div>
        {completedTasks?.map((task) => (
          <TaskCard
            key={task.name}
            task={task}
            fnToggleStatusTask={toggleStatusTask}
          ></TaskCard>
        ))}
      </div>
    </section>
  );
}
