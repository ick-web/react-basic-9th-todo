import React from "react";
import { Todo } from "../../../../types/todo.type";

const SSGpage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    cache: "force-cache",
  });
  const data: Todo[] = await response.json();

  return <div>SSGpage: {JSON.stringify(data)}</div>;
};

export default SSGpage;
