import axios from "axios";
import React, { useEffect, useState } from "react";

type Product = {
  title: string;
  id: number;
};

function About() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      const controller=new AbortController()

      try{

        const res = await fetch("https://dummyjson.com/products"{
          signal:controller.signal
        });
        const response = await res.json();
        setProducts(response.products);
      }catch(e){
        console.log("failed to fetch",e)
      }
    };
    

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
}

export default About;
