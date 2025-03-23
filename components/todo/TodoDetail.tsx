"use client";

import { useTodoItemQuery } from "../../query/useTodoQuery";
import { Todo } from "../../types/todo.type";
import LoadingIndicator from "../LoadingIndicator";
import TodoItem from "./TodoItem";

interface TodoDetailProps {
  id: Todo["id"];
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);

  if (!todo) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
