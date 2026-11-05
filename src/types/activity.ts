import { Task } from "./task";

export type Activity = {
  id: number;
  name: string;
  icon?: string;
  tasks: Task[];
};
