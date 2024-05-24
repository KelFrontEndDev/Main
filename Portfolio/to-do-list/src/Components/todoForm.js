import React from 'react'

function ToDoForm() {
  return (
    <form className='ToFoForm'>
        <input type='text' className='todo-input' placeholder='What is the task today?'/>
        <button type='submit' className='todo-btn'>Add Task</button>
    
    </form>
  )
}

export default ToDoForm