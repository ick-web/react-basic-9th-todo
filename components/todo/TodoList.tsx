"use client";

import { useTodosQuery } from "../../query/useTodoQuery";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos } = useTodosQuery();

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
