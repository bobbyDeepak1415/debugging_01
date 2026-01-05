import React from "react";

type HeroType = {
  heroName: string;
};

function Hero({ heroName }: HeroType) {
  if (heroName === "Joker") {
    throw new Error();
  }

  return (
    <>
      <h1>{heroName}</h1>
    </>
  );
}

export default Hero;
