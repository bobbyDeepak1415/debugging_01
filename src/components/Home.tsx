import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => import("../sum").then((module) => module.sum(3, 4))}
      >
        Add 3,4
      </button>
      <p>{num}</p>
    </div>
  );
};

export default Home;
