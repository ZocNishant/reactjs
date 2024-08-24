import React from "react";
import { useState } from "react";

const State = () => {
  const [val, setVal] = useState({ name: "Nishant", isBanned: false });
  return (
    <div className="m-3">
      <h1>name: {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>

      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        } px-3 py-2 rounded-lg text-yellow-100 cursor-pointer hover:bg-orange-500 hover:text-violet-500`}
      >
        Change
      </button>
    </div>
  );
};

export default State;
