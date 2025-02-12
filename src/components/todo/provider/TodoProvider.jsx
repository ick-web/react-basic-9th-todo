import { useState } from "react"
import { TodoContext } from "../../../context/TodoContext"
import { SAMPLE_TODOS } from "../../../constants/sample-todos";


export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (text) => {
    setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
  };

  const toggleTodoCompleted = (id) => {
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

  const deleteTodo = (id) => {
    // todo.id가 내가 찾는 id와 같이 않을때 true를 반환하여 그대로 남겨둠
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };
    return (
      <TodoContext.Provider value={{ todos,addTodos, deleteTodo, toggleTodoCompleted }}>
        {children}
      </TodoContext.Provider>
    )
  }

  export default TodoProvider;