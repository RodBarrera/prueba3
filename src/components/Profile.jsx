

import React from "react";
import "./style.css"

/* recibe los datos x props */
export function ProfileItem ({ todo,eliminar}) {
  const {id, task, description } = todo;
  const functionEliminar=()=>{
    eliminar(id)
  }



/* configuracion post it y boton para eliminar */  
  return <li>
      <a href="#">
        <button className="botonX"  onClick={functionEliminar}><i class="bi bi-trash-fill"></i></button>
        <h2>{task}</h2>
        <p>{description}</p>

      </a>
    </li>
    
}










