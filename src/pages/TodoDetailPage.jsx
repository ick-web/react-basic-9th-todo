import { useParams,Link } from 'react-router'
import styled from 'styled-components';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
// import { SAMPLE_TODOS } from '../constants/sample-todos';
import { TodoContext } from '../context/TodoContext';

export const TodoDetailPage = () => {
  // const { todos } = useContext(TodoContext);
    const { id } = useParams();

    const targetTodoItem = SAMPLE_TODOS.find((todo) => todo.id === id)

    if (!targetTodoItem){
      return <div>해당하는 데이터를 찾을 수 없습니다.</div>;
    }

  return (
    <DetailPageWrapper>
      {targetTodoItem ? (
        <TodoItem
     id={targetTodoItem.id} 
    text={targetTodoItem.text} 
    completed={targetTodoItem.text}
    />
      ) : (
        <p>해당하는 데이터를 찾을 수 없습니다.</p>
      )
    }
    
  <BackLink to="/">
    <ActionButton $bgColor="#242424">뒤로가기</ActionButton>
    </BackLink>
    </DetailPageWrapper>
  )
}

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const BackLink = styled(Link)`
  flex: 1;
  
  button {
    width: 100%;
  }
`

export default TodoDetailPage;
