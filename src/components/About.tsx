import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("memory leaks");
    }, 1500);

    return () => {
      // clearInterval(timer)
    };
  });

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;

// hide logs during initial additional invocations
