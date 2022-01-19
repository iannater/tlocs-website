import Image from "next/image";
import React from "react";

const aboutHero = () => {
  return (
    <div className="px-20 min-h-screen flex flex-col justify-center">
      <div className="p-10 text-center  font-bold text-white">
        <h2 className="text-2xl pb-5">Adipisicing quis amet et</h2>
        <h1 className="text-7xl font-nmr">WHO WE ARE</h1>
      </div>
      <div className="text-center">
        <Image
          alt="image"
          src="/vid.png"
          width="800"
          height="400"
          className="h-[400px] w-[800]"
        />
      </div>
    </div>
  );
};

export default aboutHero;
