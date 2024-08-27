import React, { useState } from "react";
import Card from "./components/Card";
import State from "./components/State";

const App = () => {
  const data = [
    {
      name: "Sarah",
      profession: "Painter",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Pasi",
      profession: "Dude",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Yo Women",
      profession: "Artist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Tyo Women",
      profession: "Rapper",
      image:
        "https://images.unsplash.com/photo-1523944339743-0fe06f079939?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [realdata, setRealdata] = useState();

  const handleFriendsButton = () => {
    setRealdata((previousData) => {
      return previousData.map((item, index) => {
        if (index === 2) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      {/* <Card /> */}
      <div className="w-full h-screen bg-zinc-200 flex gap-4 items-center justify-center">
        {realdata.map((item, index) => (
          <State key={index} handleClick={handleFriendsButton} values={item} />
        ))}
      </div>
    </>
  );
};

export default App;
