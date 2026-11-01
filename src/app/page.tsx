import { ActivityCard } from "../components/activities/ActivityCard";
import { Activity } from "../types/activity";

export default function Home() {
  const activities: Activity[] = [
    {
      name: "Desenvolvimento",
      icon: "Code",
      tasks: [
        { name: "Aprender WebSocket", completed: false },
        { name: "Implementar autenticação JWT", completed: true },
        { name: "Estudar arquitetura MVC", completed: true },
        { name: "Criar testes unitários", completed: false },
        { name: "Estudar Next.js", completed: false },
      ],
    },
    {
      name: "Estudos",
      icon: "GraduationCap",
      tasks: [
        { name: "Estudar estrutura de dados", completed: true },
        { name: "Resolver exercícios de lógica", completed: true },
        { name: "Revisar conceitos de banco de dados", completed: false },
        { name: "Estudar inglês", completed: false },
      ],
    },
    {
      name: "Atividade física",
      icon: "Dumbbell",
      tasks: [
        { name: "Fazer treino de musculação", completed: true },
        { name: "Correr por 30 minutos", completed: false },
        { name: "Alongar após o treino", completed: true },
        { name: "Beber 2 litros de água", completed: false },
        { name: "Fazer caminhada", completed: false },
        { name: "Descansar adequadamente", completed: true },
      ],
    },
    {
      name: "Organização pessoal",
      icon: "CalendarDays",
      tasks: [
        { name: "Organizar tarefas da semana", completed: true },
        { name: "Revisar gastos mensais", completed: false },
        { name: "Organizar ambiente de trabalho", completed: true },
        { name: "Planejar compromissos", completed: false },
        { name: "Limpar arquivos desnecessários", completed: false },
        { name: "Definir metas para o próximo mês", completed: false },
        { name: "Revisar objetivos pessoais", completed: true },
      ],
    },
  ];

  return (
    <section className="w-full px-4 max-w-240 md:p-0 mt-8 m-auto">
      <div className="flex flex-wrap w-full gap-y-6 justify-between">
        {activities.map((item) => (
          <ActivityCard
            key={item.name}
            name={item.name}
            icon={item.icon}
            tasks={item.tasks}
          ></ActivityCard>
        ))}
      </div>
    </section>
  );
}
