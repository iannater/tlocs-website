import Image from "next/image";
import React from "react";
import { BsChevronDoubleDown } from "@react-icons/all-files/bs/BsChevronDoubleDown";

const homeHero = () => {
  return (
    <div className="min-h-screen bg-redBg bg-cover bg-no-repeat flex flex-col justify-center md:justify-start  items-center">
      {/* <Image src="/images/red-bg.png" layout="fill" priority className="z-0" /> */}
      <div className="w-full flex flex-col items-center font-nmr font-bold md:absolute md:top-28  z-10 ">
        <h3 className="text-nmr-lightBrown md:text-xl">
          T-Loc&apos;s World Famous
        </h3>
        {/* <h1 className=" text-4xl md:text-9xl">SONORAN</h1> */}
        <div className="py-2 w-full max-w-4xl h-auto  ">
          <Image
            src="/images/sonoran.png"
            layout="responsive"
            width={1060}
            height={181}
            alt="Sonoran Image"
            priority
          />
        </div>
        <div>
          <h2 className="text-nmr-lightBrown text-xl md:text-5xl">HOT DOGS</h2>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center text-nmr-lightBrown pb-5 border-shadow w-full gap-3 absolute bottom-0 ">
        <h1>Scroll to Discover More</h1>
        <BsChevronDoubleDown className="animate-bounce h-6 w-6" />
      </div>
      <div className="w-full md:max-w-4xl h-auto absolute bottom-0 z-0 ">
        <Image
          src="/images/home-hotdog.png"
          layout="responsive"
          width={1235}
          height={507}
          alt="hot dog"
          // className="bg-blue-300 "
        />
      </div>
    </div>
  );
};

export default homeHero;
