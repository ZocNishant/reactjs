import React from "react";
import { useState } from "react";

const State = () => {
  const [val, setVal] = useState(12);

  return (
    <div className="m-2">
      <h1>{val}</h1>
      <button
        onClick={() => setVal((prev) => prev + 1)}
        className="bg-blue-500 px-3 py-3 rounded-md"
      >
        Change
      </button>
    </div>
  );
};

export default State;
