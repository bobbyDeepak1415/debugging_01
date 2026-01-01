import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("from about");
    }, 1200);
  }, []);
};

export default About;
