import axios from "axios";
import React, { useEffect, useState } from "react";

type Product = {
  title: string;
  id: number;
};

function About() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        setProducts(res.data.products);
      } catch (err) {
        console.log("failed to fetch", err);
      }
    };

    fetchData();

    return () => controller.abort();
  });

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
