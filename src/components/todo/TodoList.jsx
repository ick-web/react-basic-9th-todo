import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoCompleted, deleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          completed={completed}
          text={text}
          toggleTodoCompleted={toggleTodoCompleted}
          deleteTodo={deleteTodo}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
