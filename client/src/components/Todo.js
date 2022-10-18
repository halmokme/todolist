import React from 'react';
import styled from 'styled-components';

const StyledTodo = styled.li`
  list-styled: none;
  border-bottom: 1px solid #777;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5DC8CD;
  font-style: italic;
`


const Todo = ({ todo }) => {
  return (
    <StyledTodo>
      <div>
        <div>{todo}</div>        
      </div>
    </StyledTodo>
  );
};

export default Todo;