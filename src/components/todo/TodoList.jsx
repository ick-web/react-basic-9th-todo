import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: todoText, completed: false },
      ...todos,
    ]);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    // todo.id가 내가 찾는 id와 같이 않을때 true를 반환하여 그대로 남겨둠
    const filteredTodos = todos.filter((todo) => todo.id !== id );

    setTodos(filteredTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={handleChangeTodoText} />
        <button type="submit">제출하기</button>

        <ul>
          {todos.map(({ id, text, completed }) => (
            <li key={id}>
              <p
                style={{
                  textDecoration: completed ? "line-through" : "none",
                }}
              >
                {text}
              </p>
              <div>
                <button onClick={() => handleToggleCompleted(id)}>
                {completed ? "취소하기" : "완료하기"}
              </button>

              <button onClick={() => handleDelete(id)}>삭제하기</button>
              </div>
              
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
