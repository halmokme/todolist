import React, { useState } from 'react';
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
  .edit {
    height: 4px;
    width: 70%;
    border: none;
    border-bottom: 1px solid #777;
  }
`


const Todo = ({ todo, id, edit, setEdit, countTasks }) => {

  const [editData, setEditData] = useState('')
  const [checked, setChecked] = useState(false);

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

  const handleEdit = (e) => {
    setEdit(!edit);
    if(edit) window.location.reload();
    const config = {
      method: 'put',
      url: 'http://localhost:3001',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "id":id,
        "todoList": editData,
      })
    };
    axios(config)
    .then(data => console.log(JSON.stringify(data.data)))
    .catch((err) => console.log(err))
  }

  const handleInput = (e) => {
    setEditData(e.target.value);
  }

  const handleChecked = (e) => {
    countTasks(e.target.checked);
    setChecked(!checked);
  }

  return (
    <StyledTodo>
      <div className='contents'>
        <input type='checkbox' className='checkbox' checked={checked} onChange={handleChecked} />
        {!edit 
          ? <div className='font'>{todo}</div>
          : <input className='edit' type='text' value={editData} onChange={handleInput} />
        }
      </div>
      <div className='imgs'>
        <img src={!edit ? './images/edit.png' : './images/edit2.gif'} alt="edit" onClick={handleEdit} />
        <img src='./images/delete.png' alt="delete" onClick={handleDelete} />
      </div>
    </StyledTodo>
  );
};

export default Todo;