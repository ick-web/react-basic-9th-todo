"use client";

import React from "react";
import { Todo } from "../../types/todo.type";
import { deleteTodo, toggleTodoCompleted } from "../../api/todo-api";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;

  return (
    <article>
      <Link href={`/${id}`}>
        <h2>{text}</h2>
      </Link>
      <p>{completed ? "완료" : "미완료"}</p>

      <div>
        <button onClick={() => toggleTodoCompleted(id, !completed)}>
          {completed ? "취소" : "완료"}
        </button>
        <button onClick={() => deleteTodo(id)}>삭제하기</button>
      </div>
    </article>
  );
};

export default TodoItem;
