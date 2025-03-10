"use client";

import { useEffect, useState } from "react";
import { Todo } from "../../../../types/todo.type";

const CSRpage = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data: Todo[] = await response.json();

      setData(data);
    };

    getData();
  }, []);

  return <div>CSRpage: {JSON.stringify(data)}</div>;
};

export default CSRpage;
