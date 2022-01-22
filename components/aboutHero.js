import Image from "next/image";
import React from "react";

const aboutHero = () => {
  return (
    <div className="md:p-20 py-20 md:min-h-screen flex flex-col items-center bg-redBg bg-cover bg-no-repeat">
      <div className="md:p-10 text-center font-bold text-white pb-5">
        <h2 className="md:text-2xl pb-5">Adipisicing quis amet et</h2>
        <h1 className="text-5xl md:text-7xl font-nmr">WHO WE ARE</h1>
      </div>
      <div className="text-center px-5 max-w-4xl  ">
        <Image alt="image" src="/vid.png" width="1093" height="563" />
      </div>
    </div>
  );
};

export default aboutHero;
