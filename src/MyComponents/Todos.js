import React from 'react'
import {TodoItem} from './TodoItem'
//props v pass krr ste hn orr todos orr ondelete ko single single v pass krr skte hn "{todos,onDelete}""
const Todos = (props) => {
  return (
    <div className ="container">
     <h3 className = "my-3">Todos List</h3>
    {props.todos.length==0? "no todos to display":
    //map is used for array of objects and key is used in map function as remove warning of each child should have key 
    props.todos.map((todo)=>{
      return(
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete ={props.onDelete} />
        <hr/>
        </>
      )
    }
  
    )}
    </div>
  )
}

export default Todos
