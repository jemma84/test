import "./styles.css";
import React, { useState, useCallback } from "react";
import Todo from "./Todo";
import Number from "./Number";
import Counter from "./Counter";

export default function App() {
  console.log("Render App");

  //init number for Number and Counter
  const [number, setNumber] = useState(0);

  //handler function for Counter
  const increase = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  //handler function for Counter
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <Todo />
      <Number number={number} />
      <Counter incr={increase} decr={decrease} />
    </div>
  );
}
