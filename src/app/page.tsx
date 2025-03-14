import React from "react";
import TodoList from "../../components/todo/TodoList";
import TodoForm from "../../components/todo/TodoForm";

const Homepage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto space-y-4">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default Homepage;
