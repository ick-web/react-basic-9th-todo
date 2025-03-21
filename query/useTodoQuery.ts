import { useQuery } from "@tanstack/react-query";
import { getTodoItem, getTodos } from "../api/todo-api";
import { FilterType } from "../store/useTodoFilterStore";

export const useTodosQuery = (filter: FilterType) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoItemQuery = (id: string) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });
};
