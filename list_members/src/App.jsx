import React from "react";
import "./index.css";
const App = () => {
  const names = [
    "abebe",
    "abebe",
    "yohannes",
  ];
  return (
    <div className="list">
      <ul class="myul">
        <h2>members </h2>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
