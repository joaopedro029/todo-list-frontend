import { updateTask } from "@/src/services/taskService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError: (error) => {
      console.error("Erro ao atualizar tarefa:", error);
    },
  });
}
