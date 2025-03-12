import React from "react";
import { getTodos } from "../../api/todo-api";
import { todo } from "node:test";
import TodoItem from "./TodoItem";

const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
