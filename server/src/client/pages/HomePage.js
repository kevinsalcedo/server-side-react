import React from "react";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <button onClick={() => console.log("Button pressed")}>Press me</button>
    </div>
  );
};

export default {
  component: Home
};
