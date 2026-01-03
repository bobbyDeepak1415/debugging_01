import axios from "axios";
import React, { useEffect, useState } from "react";

type Product = {
  title: string;
  id: number;
};

function About() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      
      const res = await axios.get("https://dummyjson.com/products");

      if (isMounted) {
        setProducts(res.data.products);
      }
    };

    fetchData();

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
}

export default About;
