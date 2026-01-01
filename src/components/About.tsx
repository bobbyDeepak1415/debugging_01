import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      const result = res.data;
      setProducts(result);
      console.log(result);
    } catch (e) {
      console.log("failed to fetch", e);
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>About</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;

// hide logs during initial additional invocations
