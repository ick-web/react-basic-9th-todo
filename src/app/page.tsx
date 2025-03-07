import Link from "next/link";
import React from "react";
import { getTodos } from "../../api/todo-api";

const Homepage = async () => {
  const todos = await getTodos();

  return (
    <div>
      Homepage
      <Link href="/detail">Detail Page</Link>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            {text} {completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
