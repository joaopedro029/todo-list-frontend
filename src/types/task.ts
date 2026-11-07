export type Task = {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  activityId: number;
};

export type updatedDataType = {
  name?: string;
  description?: string;
  success?: boolean;
};
