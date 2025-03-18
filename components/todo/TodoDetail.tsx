"use client";

import { useTodoItemQuery } from "../../query/useTodoQuery";
import LoadingIndicator from "../LoadingIndicator";
import TodoItem from "./TodoItem";

interface TodoDetailProps {
  id: string;
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
