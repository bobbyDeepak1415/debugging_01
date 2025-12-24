import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      
      <p>{num}</p>
    </div>
  );
};

export default Home;
