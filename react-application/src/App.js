import { useState } from 'react';
import './App.css';

export const App=()=>{
  const [todos, modifyList]=useState([{id: 1, task: "Testing"}]);
  const [todo, setTodo]=useState({id:null, task: null});

  const handleTodoId=({target})=>{
    setTodo({id:target.value, task:todo.task});
  }

  const handleTodoTask=({target})=>{
    setTodo({id:todo.id, task:target.value});
  }
  
  const handleKey=({key})=>{
    if(key==="Enter") handleListAddToDo();
  }

  const handleListAddToDo=()=>{
    console.log(todo);
    modifyList(todos=>[...todos, todo]);
    setTodo({id:0, task:""});
    document.getElementById("newTodoId").value=null;
    document.getElementById("newTodoTask").value=null;
  }

  const handleListRemoveToDo=(id)=>{
    modifyList(todos.filter(task=>task.id!==id));
  }
  
  return (
    <div className="App">
      <h1 className='heading'>To Do List</h1>
      <ul className='list'>
        { todos.map((todo)=>(
            <li key={todo.id}>
              <div>{todo.id} - {todo.task}</div>
              <button className='btn' onClick={()=>handleListRemoveToDo(todo.id)}>Remove</button>
            </li>
          )) }
      </ul>
      <title>Todo Id: </title>
      <input type="number" className='inputBox' name="newTodoId" id="newTodoId" placeholder='Todo Id' onChange={handleTodoId} />
      <title>Todo Task: </title>
      <input type="text" className='inputBox' id="newTodoTask" name="newTodoTask" placeholder='Todo Task' onChange={handleTodoTask} onKeyDown={handleKey} />
      <button type="submit" className='btn' onClick={handleListAddToDo}>Add</button>
    </div>
  );
}

export default App;
