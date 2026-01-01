// import React from 'react'

import { useState } from "react";

function Todo() {


    const [item,setItem]=useState("")

    const handleClick=()=>{
        
    }
    
  return (
    <div>
      <h1>Todo</h1>

<input value={item} onChange={(e)=>setItem(e.target.value)}></input>
<button onClick={handleClick}>Add</button>

    </div>
  );
}

export default Todo;
