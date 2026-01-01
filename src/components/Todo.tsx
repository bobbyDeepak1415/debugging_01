// import React from 'react'

import { useState } from "react";

function Todo() {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const handleClick = () => {
    setItems((prev) => [...prev, item]);

    setItem("");
  };

  const handleDelete = () => {
  };

  return (
    <div>
      <h1>Todo</h1>

      <input value={item} onChange={(e) => setItem(e.target.value)}></input>
      <button onClick={handleClick}>Add</button>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <span>{item}</span>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
