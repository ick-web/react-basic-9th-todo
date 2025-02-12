import { useParams,Link } from 'react-router'
import styled from 'styled-components';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import { SAMPLE_TODOS } from '../constants/sample-todos';

export const TodoDetailPage = () => {
    const { id } = useParams();

    const targetTodoItem = SAMPLE_TODOS.find((todo) => todo.id === id)

  return (
    <div>
    <TodoItem
     id={targetTodoItem.id} 
    text={targetTodoItem.text} 
    completed={targetTodoItem.text}
    />

    <ActionButton $bgColor="#242424">
        <link to="/">뒤로가기</link>
    </ActionButton>
    </div>
  )
}

const GoBackLink = styled(Link)`
    display: block;
    margin-top: 1rem;
    background-color: #242424;
    color: white;
    text-decoration: none;

`
