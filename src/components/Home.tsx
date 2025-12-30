import { useState } from "react";
// import { sum } from "../sum";

const Home = (props: number) => {
  const item = props.item;

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Home</h1>

      <button
        onClick={() =>
          import("../sum").then((module) => setNum(module.default(3, 4)))
        }
      >
        Add 3,4
      </button>

      <p>{num}</p>
      <p>{item}</p>
    </div>
  );
};

export default Home;
