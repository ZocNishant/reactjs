import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg overflow-hidden">
        <div className="w-52 h-32 bg-zinc-300"></div>
        <div className="w-full px-3 py-4">
          <h2>Pasa k xa</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo enim
            sapiente ab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
