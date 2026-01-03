import React from "react";
import Hero from "../Hero";
import ErrorBoundary from "../ErrorBoundary";

function ErrorBoun() {
  return (
    <div>
      <h1>Error Boun</h1>
      <Hero heroName="Batman" />
      <Hero heroName="Superman" />

      <Hero heroName="Joker" />
    </div>
  );
}

export default ErrorBoun;
