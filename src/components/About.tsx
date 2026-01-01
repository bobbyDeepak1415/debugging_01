import { useEffect, useState } from "react";

const About = () => {

  const [products,setProducts]=useState([])

  const fetchData=()=>{

    const res = axios.get("https://api.escuelajs.co/api/v1/products");


  }

  useEffect(() => {
      
    
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;

// hide logs during initial additional invocations
