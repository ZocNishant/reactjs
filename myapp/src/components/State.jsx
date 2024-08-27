import React from "react";

const State = ({ values, handleClick }) => {
  const { name, profession, image } = values;

  return (
    <div className="w-52 bg-white rounded-lg overflow-hidden">
      <div className="w-full h-32 bg-sky-200">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h4 className="text-sm">{profession}</h4>
        <button
          onClick={handleClick}
          className=" mt-4 px-3 py-2 text-xs text-white bg-blue-500 rounded-lg font-semibold"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default State;
