import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import styled from "styled-components";
import { getTodoItem } from "../api/todo-api";
import TodoItem, { ActionButton } from "../components/todo/TodoItem";

export const TodoDetailPage = () => {
  const { id } = useParams();
  const {
    data: todoItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: getTodoItem,
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>error fetching todos - {error}</div>;
  }

  return (
    <DetailPageWrapper>
      {todoItem ? (
        <TodoItem
          id={todoItem.id}
          text={todoItem.text}
          completed={todoItem.text}
        />
      ) : (
        <p>해당하는 데이터를 찾을 수 없습니다.</p>
      )}

      <BackLink to="/">
        <ActionButton $bgColor="#242424">뒤로가기</ActionButton>
      </BackLink>
    </DetailPageWrapper>
  );
};

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BackLink = styled(Link)`
  flex: 1;

  button {
    width: 100%;
  }
`;

export default TodoDetailPage;
