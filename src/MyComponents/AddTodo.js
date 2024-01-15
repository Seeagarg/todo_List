import React, { useState } from "react";

const AddTodo = (props) => {
    const[title , setTitle]=  useState("");
    const[desc , setDesc]=  useState("");

    
    const submit =(e)=>{
        e.preventDefault();//using this page will not reload
        if(!title || !desc){
          alert("Title or Description cannot be blank");
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
  return (
    <div className = "container shadow-lg p-3 mb-5 bg-body rounded my-5 " style={{width:"50%",backgroundColor:"blue"}}>
        <h3>Add a Todo</h3>
      <form onSubmit = {submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value ={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="write your todo item"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
           Description
          </label>
          <input
            type="text"
            value = {desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="write description about your todo item"
          />
        </div>
       
        <button type="submit"  className="btn btn-sm" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
