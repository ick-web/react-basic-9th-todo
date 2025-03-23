"use client";

import React, { useId } from "react";
import { Todo } from "../../types/todo.type";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToggleTodoMutation } from "../../query/useTodoMutation";
import TodoDeleteButton from "./TodoDeleteButton";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { completed, id, title } = todo;
  const checkboxId = useId();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;

    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex flex-row items-center justify-between p-2 rounded-md border">
      <div className="flex flex-row gap-4 items-center">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
      </div>

      <Link
        href={`/${id}`}
        className={cn("hover:underline", { "line-through": completed })}
      >
        <h2>{title}</h2>
      </Link>

      <div className="space-x-2">
        <Button
          onClick={() => toggleTodoCompleted({ id, completed: !completed })}
          variant="outline"
        >
          {completed ? "취소" : "완료"}
        </Button>
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
