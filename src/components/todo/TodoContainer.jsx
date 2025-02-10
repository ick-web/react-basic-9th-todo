import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";



const TodoContainer = () => {
  

  return (
    <TodoContainerWrapper>
      <TodoDashboard />
      <TodoList/>
      
      <TodoForm />
    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default TodoContainer;
