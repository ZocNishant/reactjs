import React from "react";
import { useState } from "react";

const State = () => {
  const [val, setVal] = useState([
    { name: "Nishant", age: 22 },
    { name: "Nishan", age: 21 },
    { name: "Nisha", age: 33 },
  ]);
  return (
    <div className="p-5">
      {val.map((item) => (
        <>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </>
      ))}
      <button
        onClick={() =>
          val.map((item) =>
            item.name === "Nishant" ? { name: "Nishant", age: 20 } : item
          )
        }
        className="px-3 py-2 rounded-lg bg-green-500 cursor-pointer "
      >
        Change
      </button>
    </div>
  );
};

export default State;
