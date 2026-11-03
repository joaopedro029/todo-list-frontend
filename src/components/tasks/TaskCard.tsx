import { Task } from "@/src/types/task";
import { Pen, Trash } from "lucide-react";

type TaskCardProps = {
  task: Task;
  fnToggleStatusTask: (task: Task) => void;
};

export function TaskCard({ task, fnToggleStatusTask }: TaskCardProps) {
  return (
    <div className="bg-white px-6 py-4 rounded-xl flex justify-between items-start shadow-xs shadow-gray/0.01">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            fnToggleStatusTask(task);
          }}
        />
        <div>
          <h3
            className={`${task.completed ? "line-through text-[#737686]" : "text-[#131B2E]"} text-[16px]`}
          >
            {task.name}
          </h3>

          {task.description && (
            <p
              className={`${task.completed ? "text-[#C3C6D7]" : "text-[#434655]"} text-[13px]`}
            >
              {task.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Trash width={16} color="#434655"></Trash>
        <Pen width={16} color="#434655"></Pen>
      </div>
    </div>
  );
}
