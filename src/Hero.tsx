import React from "react";

type HeroProps = {
  heroName: string;
};

function Hero({ heroName }: HeroProps) {
  if (heroName === "Joker") {
    throw new Error("not a hero");
  }

  return <div>{heroName}</div>;
}

export default Hero;
