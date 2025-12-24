import { sum } from "../sum";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => alert(sum(3, 4))}>Add 3,4</button>
    </div>
  );
};

export default Home;
