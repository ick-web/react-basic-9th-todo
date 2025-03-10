import React from "react";
import { Todo } from "../../../../types/todo.type";

const ISRpage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    next: { revalidate: 5 },
  });
  const data: Todo[] = await response.json();

  return <div>ISRpage: {JSON.stringify(data)}</div>;
};

export default ISRpage;
