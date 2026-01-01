import { useEffect } from "react";

const About = () => {

  const runFunc=()=>{
console.log("clicked")
  }

  const click=document.addEventListener("click",runFunc)

  
  
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;

// hide logs during initial additional invocations
