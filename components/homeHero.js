import Image from "next/image";
import React from "react";

const homeHero = () => {
  return (
    <div className="flex flex-col justify-between min-h-[85vh] md:min-h-[90vh]">
      <div className="text-center text-white flex flex-col font-nmr font-bold p-10 md:p-0">
        <h3 className=" md:text-xl">T-Loc&apos;s World Famous</h3>
        <h1 className=" text-4xl md:text-9xl">SONORAN</h1>
        <h2 className="text-xl md:text-4xl">HOT DOGS</h2>
      </div>
      <div className="text-white text-center font-bold text-lg">
        <h1 className="animate-bounce">Scroll to Discover More</h1>
      </div>

      {/* <div className="bg-blue-500 ">
        <Image
          src="/images/dog.png"
          layout="responsive"
          width="7000"
          height="4600"
          alt="hot dog"
        />
      </div> */}
    </div>
  );
};

export default homeHero;
