import { getActivities, getActivityById } from "@/src/services/activityService";
import { Activity } from "@/src/types/activity";
import { useQuery } from "@tanstack/react-query";

export function useActivities() {
  return useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });
}

export function useActivity(id: number) {
  return useQuery<Activity>({
    queryKey: ["activity", id],
    queryFn: () => getActivityById(id),
    enabled: !!id,
  });
}
