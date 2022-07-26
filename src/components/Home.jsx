import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import "./style.css"

import { ProfileItem } from "./Profile";

export function Home() {
  
  const [todos, setTodos] = useState([]);

  
  const taskRef = useRef();
  const descriptionRef = useRef();

  const agregarTarea = () => {
    
    const task = taskRef.current.value;
    const description = descriptionRef.current.value;

    console.log(task);
    console.log(description);

    if (task.trim() === "") return;
    console.log("Agregando tarea ...");

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        task: task,
        description: description
      };

      return [...prevTodos, newTask];
    });
    taskRef.current.value = null;
    descriptionRef.current.value = null;
  };

    const eliminar=(id)=>{
        console.log(id)
        const newTodos= todos.filter(todo=> todo.id!==id);
        setTodos(newTodos);
    }

    

  return (
    <Fragment>
      <h1 className="container m-4">Notas Adhesivas!!</h1>
        <div className="row" >
      <div className="input-group">
        <div className="col-12  col-md-6 col-lg-3 " >

        <input
          type="text"
          ref={taskRef}
          className="form-control"
          placeholder="Ingrese una tarea"
        />
        </div>

        <div className="col-12  col-md-6 col-lg-3 ms-4" >

        <input
          type="text"
          ref={descriptionRef}
          className="form-control"
          placeholder="descripción de la tarea"
        />
        </div>
        {/* aqui va el checkList */}
        <div className="form-check col-12 col-md-6 col-lg-2 ms-5 mt-2" >
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" for="flexCheckIndeterminate">
            Importante!
        </label>

        </div>

        <div className="col-12 col-md-6 col-lg-3 d-grid gap-2 col-3 mx-auto" >

        {/* Boton agregar */}
        <button className="btn btn-dark ms-2" onClick={agregarTarea}>
         agregar 
        </button>
        </div>
        </div>

      </div>

      {/* Cargar post it*/}
      <div>
        <ul>
        
          {todos.map((todo) => (
            <ProfileItem
              todo={todo}
              key={todo.id}
              eliminar={eliminar}
              
            ></ProfileItem>
          ))}
          
        </ul>
      </div>

      
    </Fragment>
  );
}