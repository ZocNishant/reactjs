import React from "react";
import { FaArrowRight } from "react-icons/fa";

const State = () => {
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 rounded-lg bg-zinc-700">
        <img
          className="w-full h-full object-cover overflow-hidden rounded-lg"
          src="https://images.unsplash.com/photo-1724277228191-0cf4c80ee56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span className="absolute cursor-pointer flex rounded-full bg-[#dadada8b] items-center justify-center w-8 h-8 bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <FaArrowRight size={"0.8em"} />
        </span>
      </div>
    </div>
  );
};

export default State;
