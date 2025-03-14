"use client";

import React from "react";
import { Todo } from "../../types/todo.type";
import { deleteTodo, toggleTodoCompleted } from "../../api/todo-api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;

  return (
    <article className="flex flex-row items-center justify-between p-2 rounded-md border">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", { "line-through": completed })}
      >
        <h2>{text}</h2>
      </Link>

      <div className="space-x-2">
        <Button
          onClick={() => toggleTodoCompleted(id, !completed)}
          variant="outline"
        >
          {completed ? "취소" : "완료"}
        </Button>
        <Button onClick={() => deleteTodo(id)} variant="destructive">
          삭제
        </Button>
      </div>
    </article>
  );
};

export default TodoItem;
