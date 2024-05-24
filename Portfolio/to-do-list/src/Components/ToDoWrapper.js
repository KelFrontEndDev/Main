import React, {useState} from 'react'
import ToDoForm  from './ToDoForm'
import {v4 as uuid4} from 'uuid';
uuid4(); 

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id:uuid4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }  
 return (
    <div className='TodoWrapper'>
        <ToDoForm addTodo={addTodo} />
    </div>
  )
}

export default ToDoWrapper