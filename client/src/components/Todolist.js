import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const StyledTodoList = styled.ul`
  padding: 0;
  text-align: center;
  width: 90%;
  margin: auto;
  list-style: none;
`

const Todolist = ({ todoList, edit, setEdit, countTasks }) => {
  return (
    <StyledTodoList>
      {todoList?.map(todo => <Todo key={todo.id} id={todo.id} todo={todo.todos} edit={edit} setEdit={setEdit} countTasks={countTasks} />)}
    </StyledTodoList>
  );
};

export default Todolist;