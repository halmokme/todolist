import React from 'react';
import styled from 'styled-components';

const StyledTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbd8e3;
  width: 18rem;
  height: 1.8rem;
  line-height: 1.8rem;
  margin: 50px auto;
  position: relative;
  .text {
    position: absolute;
    font-weight: 500;
    color: #777;
  }
  .tasks {
    width: 18rem;
    height: 1.8rem;
  }
  .tasks.on {
    background: #5DC8CD;
    animation: bar 2s;
    @keyframes bar {
      from {
        width: 20%;
      }
      to {
        width: 100%;
      }
    }
  }
  span {
    font-weight: 700;
    color: #455d7a;
  }
`

const Task = ({ taskCnt, todoList }) => {
  return (
    <StyledTask>
      {todoList?.map((todo, i) => 
        <div key={todo.id} className={taskCnt > i ? 'tasks on' : 'tasks'}></div>
      )}
      <div className='text'>
        <span>{taskCnt}</span> of  
        <span> {todoList.length}</span> tasks done
      </div>
    </StyledTask>
  );
};

export default Task;