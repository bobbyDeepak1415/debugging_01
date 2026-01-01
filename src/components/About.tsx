import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");

      const response = res.data;

      setProducts(response);
      console.log(response);
    } catch (e) {
      console.log("failes To fetch", e);
    }
  };

  useEffect(() => {
    
    fetchData();
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
