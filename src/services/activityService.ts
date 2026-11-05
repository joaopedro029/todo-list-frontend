import { api } from "./api";

export async function getActivities() {
  const { data } = await api.get("/app/activity/get-all");

  return data.data;
}

export async function getActivityById(id: number) {
  const { data } = await api.get(`/app/activity/${id}`);

  return data.data;
}
