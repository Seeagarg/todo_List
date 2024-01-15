import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

export const TodoItem = ({ todo , onDelete }) => {
  return (
    <div style={{fontFamily:"'Times New Roman', Times, serif"}}>

    <Card className="bg-dark text-light text-center bg-opacity-50 " style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="https://www.gettyimages.in/photos/to-do-list" /> */}
      <Card.Body>
        <Card.Title  className=" fs-2" >{todo.title}</Card.Title>
        <Card.Text>
        {todo.desc}
        </Card.Text>
        <Button variant="danger" onClick = { ()=>{onDelete(todo)}}> Delete </Button>
      </Card.Body>
    </Card>


      {/* <div class="card" style="width: 18rem;">
        <img src="https://www.gettyimages.in/photos/to-do-list" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{todo.title}</h5>
          <p class="card-text">{todo.desc}</p>
          <button className ='btn btn-sm btn-danger '  onClick = { ()=>{onDelete(todo)}}>Delete</button>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
      
      
      
      
       {/* Title:
      <h4>
      {todo.title}
      </h4>
      Desc:
      <p>{todo.desc}    
      </p>
      <button className ='btn btn-sm btn-danger '  onClick = { ()=>{onDelete(todo)}}>Delete</button> */}
    </div>
  );
};
//arrow function is used to pass a function so that ondelete function should not run on time of rendering

// export default TodoItem;
