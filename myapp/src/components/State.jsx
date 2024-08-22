import React, { useState } from "react";

const State = () => {
  const [ans, setAns] = useState(true);

  //   setAns(200);
  return (
    <div className="p-4">
      <h1>{ans.toString()}</h1>
      <button
        onClick={() => setAns(!ans)}
        className="px-2 py-2 bg-slate-400 text-xs rounded-xl text-red-700 m-2"
      >
        Change the value
      </button>
    </div>
  );
};

export default State;
