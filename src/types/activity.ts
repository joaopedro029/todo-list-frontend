import { Task } from "./task";

export type Activity = {
  name: string;
  icon: string;
  tasks: Task[];
};
