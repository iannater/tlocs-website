import Image from "next/image";
import React from "react";

const aboutHero = () => {
  return (
    <div className="p-20">
      <div className=" p-10 text-center  font-bold text-white">
        <h2 className="text-2xl pb-5">Adipisicing quis amet et</h2>
        <h1 className="text-7xl font-nmr">WHO WE ARE</h1>
      </div>
      <div>
        <Image src="/vid.png" width="1000" height="600" />
      </div>
    </div>
  );
};

export default aboutHero;
