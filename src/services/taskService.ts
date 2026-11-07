import { updatedDataType } from "../types/task";
import { api } from "./api";

type UpdateDataParams = {
  updatedData: updatedDataType;
  id: number;
};

export async function updateTask({ updatedData, id }: UpdateDataParams) {
  console.log("oii");
  const { data } = await api.put(`/app/task/update/${id}`, { updatedData });

  return data;
}
