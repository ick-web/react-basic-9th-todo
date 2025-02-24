import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import { deleteTodo, toggleTodoCompleted } from "../../api/todo-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoItem = ({ completed, text, id }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: toggleTodoMutate } = useMutation({
    mutationFn: ({ id, completed }) => toggleTodoCompleted(id, completed),
    onSettled: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
  });

  const { mutate: deleteTodoMutate } = useMutation({
    mutationFn: deleteTodo,
    onSettled: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
  });

  const navigateAfterDelete = (id) => {
    deleteTodoMutate(id);

    navigate("/");
  };

  return (
    <TodoItemWrapper>
      <TodoItemLink to={`/todos/${id}`} $completed={completed}>
        {text}
      </TodoItemLink>

      <TodoItemActions>
        <ActionButton
          onClick={() => toggleTodoMutate({ id, completed })}
          $bgColor={completed ? "#242424" : "#582be6"}
        >
          {completed ? "취소하기" : "완료하기"}
        </ActionButton>

        <ActionButton
          onClick={() => navigateAfterDelete(id)}
          $bgColor="#ff4033"
        >
          삭제하기
        </ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoItemLink = styled(Link)`
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};

  &:hover {
    text-decorations: underline;
  }
`;

const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background-color: ${({ $bgColor = "#e6582b" }) => $bgColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  word-break: keep-all; // 글자 깨지지않게
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
