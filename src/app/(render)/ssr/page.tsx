import React from 'react'
import { Todo } from '../../../../types/todo.type';

const SSRpage = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await response.json();

  return (
    <div>SSRpage: {JSON.stringify(data)}</div>
  )
}

export default SSRpage