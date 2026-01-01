import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("from about");
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return <h1>About</h1>;
};

export default About;
