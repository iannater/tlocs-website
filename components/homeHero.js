import Image from "next/image";
import React from "react";

const homeHero = () => {
  return (
    <div className="min-h-screen bg-redBg bg-no-repeat bg-cover grid grid-rows-2 items-center">
      <div className="text-center text-white font-nmr font-bold p-10 md:p-0 md:pt-40 justify-self-center">
        <h3 className=" md:text-xl">T-Loc&apos;s World Famous</h3>
        <h1 className=" text-4xl md:text-9xl">SONORAN</h1>
        <h2 className="text-xl md:text-4xl">HOT DOGS</h2>
      </div>

      {/* <div>
        <Image
          src="/images/dog.png"
          layout="responsive"
          width="4000"
          height="2600"
          alt="hot dog"
        />
      </div> */}
      <div className="text-white text-center flex justify-center self-end font-bold text-lg pb-5 ">
        <div>
          <h1 className="animate-bounce">Scroll to Discover More</h1>
        </div>
      </div>
    </div>
  );
};

export default homeHero;
