import axios from "axios";
import React, { useEffect, useState } from "react";

function About() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>About</h1>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
}

export default About;
