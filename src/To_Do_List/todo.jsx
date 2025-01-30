import style from './todo.module.css'
import React, { useState } from 'react';
function todo(){

    const [todo,setTodos]=useState(['First Task','Second Task']);

    function handletodo(){
         const task=document.getElementById('foodip').value;
         document.getElementById("foodip").value="";

         setTodos(t=> [...t,task]);
    }

    const removeTodo = (index) => {
    setTodos(todo.filter((_, i) => i !== index));
    };
    return(
        <div>
            <p><b>Todo List</b></p>
            <ul>
                {todo.map((todo,index)=>
                <li key={index} onClick={()=>{removeTodo(index)}}>{todo}</li>)}
            </ul>
             <input id="foodip" type='text' placeholder='Enter Your Task'></input>
             <button onClick={handletodo}> Submit</button>
        </div>
    );
}
export default todo;