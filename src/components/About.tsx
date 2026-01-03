import axios from "axios";
import React, { useEffect, useState } from "react";

function About() {

  const [products,setProducts]=useState([])

  useEffect(()=>{

    const fetchData=async()=>{
      const res = await fetch("https://dummyjson.com/products");
      const response=await res.json()
      set
    }

  })

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default About;
