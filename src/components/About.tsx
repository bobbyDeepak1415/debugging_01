import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    
    const handleClick=()=>console.log("clicked")

    window.addEventListener("click",handleClick)

    

  }, []);

  return <h1>About</h1>;
};

export default About;
