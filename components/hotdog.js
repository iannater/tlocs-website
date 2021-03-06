import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Hotdog = (props) => {
  // SEETTING STATE TO THE LAST ELEMENT IN THE DATA
  const [resourceType, setResourceType] = useState(
    props.hotdogs[0].ingredients[6]
  );
  // SEETTING EACH INDEX OF THE INGREDIENTS ARRAY TO CALL WHEN RESOURCES GET SET
  const firstIng = props.hotdogs[0].ingredients[0];
  const secondIng = props.hotdogs[0].ingredients[1];
  const thirdIng = props.hotdogs[0].ingredients[2];
  const fourthIng = props.hotdogs[0].ingredients[3];
  const fithIng = props.hotdogs[0].ingredients[4];
  const sixthIng = props.hotdogs[0].ingredients[5];
  const seventhIng = props.hotdogs[0].ingredients[6];
  // USE EFFECT RENDERS THE RESOURCETYPE WHEN IT GETS A NEW VALUE
  // ONCLICK WILL SET THE STATE WITH THE INDEX
  useEffect(() => {
    // console.log(resourceType);
  }, [resourceType]);

  return (
    <div className="w-full">
      <div className="md:py-10">
        {/* title */}
        <div className="py-10">
          <h1 className="text-center text-6xl font-bold text-nmr-red font-nmr">
            {props.homePages[0].hotdogTitle}
          </h1>
          <p className="text-nmr-red text-center font-bold">
            {props.homePages[0].hotdogSubtitle}
          </p>
        </div>
        {/* desktop */}
        <div className="md:flex hidden flex-col items-center justify-center bg-footer bg-cover bg-no-repeat py-40 ">
          <div className="w-full max-w-3xl h-auto">
            <Image
              src="/images/ux-dog.png"
              alt="ingredients image"
              layout="responsive"
              priority
              width={1235}
              height={534}
            />
            <div className="flex">
              <span className="flex w-14 h-14  relative bottom-48 left-0">
                <span className="animate-ping absolute inline-flex w-12 h-12 hover:w-14 hover:h-14 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(firstIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative bottom-64 left-8">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(secondIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative bottom-72 left-36">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(thirdIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative  bottom-80 left-60">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(fourthIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative  bottom-72 left-80">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(fithIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative  bottom-64 left-96">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(sixthIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative  bottom-36 left-14">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(seventhIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-40 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
            </div>
          </div>
          {/* card for the ingredients */}
          <div
            className="text-center text-nmr-lightBrown bg-redBg max-w-2xl w-full p-10 rounded-md mt-10"
            id="first"
          >
            <h1 className="font-nmr text-4xl">{resourceType.name}</h1>
            <h1 className="font-semibold text-lg">
              {resourceType.description}
            </h1>
          </div>
        </div>
        {/* mobile  */}
        <div className="flex md:hidden justify-center bg-footer bg-cover bg-no-repeat py-10">
          <div className="w-full max-w-5xl h-auto">
            <Image
              src="/images/ingredients.png"
              alt="ingredients image"
              layout="responsive"
              width={1280}
              height={960}
              quality="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotdog;
