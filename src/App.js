import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './MyComponents/About';

function App() {

 
  let initTodo;
  if (localStorage.getItem("todos)") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
//this is used to save your previous todos while reloading
  const onDelete = (todo) => {
    console.log("i am on delete of todo");
    //  let index = todos.indexOf(todo);
    //  todos.splice(index,1);
    // deleting this way does not work in react so we have to use state as a set todo

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.getItem("todos", JSON.stringify(todos));//while deleting orr adding todos are also stored as in local storage
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc);
    
    const myTodo = {
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos));
  }, [todos]);
//when todos are changed useeffect is called
  return (
    <div className="$pink-600" style={{fontFamily:"'Times New Roman', Times, serif",backgroundColor:"#912d59"}}>
      <Router>
        <Header title=" My_Todos_List" />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo}  />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}> 
          </Route>
          <Route  exact path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
        {/* <Todo/> */}
      </Router>
    </div>
  );
}

export default App;
