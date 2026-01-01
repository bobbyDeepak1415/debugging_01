import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("memory leaks");
    }, 1500);
  });

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
