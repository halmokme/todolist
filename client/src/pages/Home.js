import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Todolist from '../components/Todolist';
import Task from '../components/Task';
import axios from 'axios';

const StyledForm = styled.form`
  max-width: 600px;
  margin: 60px auto;
  padding: 20px;
  background: white;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    margin: 20px 0;
    color: #777;
  }
  .user__input {
    display: flex;
    justify-content: center;
    gap: 3px;
    button {
      border: 1px solid #5DC8CD;
      background-color: #5DC8CD;
      // outline: none;
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
      color: white;
    }
    button:hover {
      box-shadow: 0 -80px 0 0 rgba(0,0,0,0.25) inset;
    }
  }
  input {
    display: block;
    width: 80%;
    padding: 8px 10px;
    outline: none;
    text-align: center;
    border: 1px solid rgb(218, 218, 173);
    color: #5DC8CD;
    font-size: 1em;
    font-style: italic;
    font-weight: 500;
  }
`

const Home = () => {

  const [todos, setTodos] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [taskCnt, setTaskCnt] = useState(0);

  const handleInput = (e) => {
    setTodos(e.target.value);
  } 

  const handleSubmit = (e) => {
    if(edit) e.preventDefault();
    const todoData = e.target.text.value;
    axios.post('http://localhost:3001/', { todoData })
  }

  const countTasks = (isChecked) => {
    if (isChecked) {
      setTaskCnt(prevCnt => prevCnt + 1);
    } else {
      setTaskCnt(prevCnt => prevCnt - 1);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/').then(data => {
      setTodoList(data.data);
    })
  }, [])

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>TO DO LIST</h2>
      <div className='user__input'>
        <input 
          type='text' 
          name='text'
          value={todos}
          onChange={handleInput}
          autoFocus
        ></input>
        <button type='submit'>+</button>
      </div>
      <Todolist todoList={todoList} edit={edit} setEdit={setEdit} countTasks={countTasks} />
      <Task taskCnt={taskCnt} todoList={todoList} />
    </StyledForm>
  );
};

export default Home;