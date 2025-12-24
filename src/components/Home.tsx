import { useState } from "react";
import { sum } from "../sum";

const Home = () => {

  const [num,setNum]=useState("")

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setNum(sum(3, 4))}>Add 3,4</button>
      <p>{num}</p>
    </div>
  );
};

export default Home;
