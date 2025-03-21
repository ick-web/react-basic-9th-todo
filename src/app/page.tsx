import React from "react";
import TodoList from "../../components/todo/TodoList";
import TodoForm from "../../components/todo/TodoForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getTodos } from "../../api/todo-api";
import TodoFilterSwitch from "../../components/todo/TodoFilterSwitch";

const Homepage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", "all"],
    queryFn: () => getTodos(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos("completed"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container p-2 mx-auto space-y-4">
          <TodoForm />
          <div className="flex flex-row justify-end">
            <TodoFilterSwitch />
          </div>
          <TodoList />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default Homepage;
