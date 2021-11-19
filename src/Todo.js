import React, { useState } from "react";
export default function Todo(props) {
  console.log("Render Todo");

  const [items, setItems] = useState([
    "1. Some todo",
    "2. Some todo",
    "3. Some todo"
  ]);

  const add = () => {
    setItems([...items, "One more todo"]);
  };

  return (
    <div>
      <h2>My Todo</h2>
      {items.map((item) => {
        return <p>{item}</p>;
      })}
      <button onClick={add}>Add Todo</button>
    </div>
  );
}
