import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s",
      name: "Pasa",
      description: "Lorem Ipsum - Lorem Ipsum",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s",
      name: "Pasay",
      description: "Lorem Ipsum - Lorem Ipsum",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center gap-10 justify-center bg-zinc-200">
      <div className="bg-zinc-100 rounded-lg overflow-hidden">
        <div className="w-52 h-32 bg-zinc-300"></div>
        <div className="w-full px-3 py-4">
          <h2>Pasa k xa</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias
            labore eius mollitia voluptatum in pariatur doloremque molestiae
            modi! Totam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
