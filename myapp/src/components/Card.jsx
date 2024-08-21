import React from "react";

const Card = () => {
  const data = [
    {
      name: "Nischal",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,sapiente",
    },
    {
      name: "Atti Vayo",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,sapiente",
    },
    {
      name: "Aafnai Sansar Ma",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,sapiente",
    },
    {
      name: "Khaseka Tara",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,sapiente",
    },
  ];

  const handleCLickEvent = () => {
    alert("Pasa K xa");
  };

  return (
    <div className="w-full h-screen bg-zinc-700 flex flex-col gap-10 items-center justify-center">
      {data.map((item, index) => (
        <div className="song px-3 py-2 bg-zinc-500 rounded">
          <h3 className="font-semibold text-xl w-60">{item.name}</h3>
          <p className="text-xs mt-2">{item.description}</p>
          <button
            onClick={handleCLickEvent}
            className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-400 mt-3 rounded-md"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
