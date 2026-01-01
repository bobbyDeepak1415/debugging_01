import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(res.data);
    } catch (e) {
      console.log("failed to fetch", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <ul>
        {products.map((product, id) => {
          return <li key={id}>{product}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;

// hide logs during initial additional invocations
