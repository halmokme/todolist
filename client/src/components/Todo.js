import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledTodo = styled.li`
  border-bottom: 1px solid #777;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  color: #5DC8CD;
  font-style: italic;
  .contents {
    display: flex;
    align-items: center;
    gap: 1rem;
    .font {
      overflow: visible;
      max-width: 400px;
    }
  }
  .imgs {
    display: flex;
    align-items: center;
    gap: 1rem
  }
  img {
    width: 0.9rem;
    height: 0.9rem;
    cursor: pointer;
  }
  .checkbox {
    width: 1.2rem;
    height: 1.2rem;
  }
`


const Todo = ({ todo, id }) => {

  const handleDelete = () => {
    const config = {
      method: 'delete',
      url: 'http://localhost:3001',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "id":id,
      })
    };
    axios(config)
    .then(data => window.location.reload())
    .catch((err) => console.log(err))
  }

  return (
    <StyledTodo>
      <div className='contents'>
        <input type='checkbox' className='checkbox' />
        <div className='font'>{todo}</div>
      </div>
      <div className='imgs'>
        <img src='./images/edit.png' alt="edit" />
        <img src='./images/delete.png' alt="delete" onClick={handleDelete} />
      </div>
    </StyledTodo>
  );
};

export default Todo;