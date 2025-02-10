import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { ActionButton } from "./TodoItem";

const TodoForm = () => {
const {addTodos} = useContext(TodoContext)

  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodos(todoText);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <TodoFormWrapper onSubmit={handleSubmit}>
      <TodoFormInput type="text" value={todoText} onChange={handleChangeTodoText} placeholder="할 일을 입력하세요"/>
      <SubmitButton type="submit" $bgColor="#582be6">제출하기</SubmitButton>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoFormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  flex: 8;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #582be6;
    outline: none;
  }
`;

// 상속해서 이름 바꾸기
const SubmitButton = styled(ActionButton)`
flex: 1;
text-align: center;
`



export default TodoForm;
