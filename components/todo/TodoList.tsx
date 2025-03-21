"use client";

import { useTodosQuery } from "../../query/useTodoQuery";
import { useTodoFilterStore } from "../../store/useTodoFilterStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useTodosQuery(filter);

  return (
    <ul className="space-y-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
