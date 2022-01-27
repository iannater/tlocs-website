import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Tab from "./tab";
import MobileTab from "./mobileTab";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ingredients = [
  {
    title: "first",
    description: "its a bun",
  },
  {
    title: "Condiments",
    description:
      "This trio of jalapeno sauce, mustard, and mayo combines for the perfect dressing.",
  },
  {
    title: "Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Onions",
    description:
      "Perfectly diced onions sourced from the best farmeres in Texas",
  },
  {
    title: "Becon Wrapped Hot Dog!",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Steamed Bun",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "last",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
];

const Hotdog = () => {
  // const [showItem, setShowItem] = useState(false);
  const [resourceType, setResourceType] = useState(ingredients[6]);
  // const onClick = () => setShowItem(true);
  const firstIng = ingredients[0];
  const secondIng = ingredients[1];
  const thirdIng = ingredients[2];
  const fourthIng = ingredients[3];
  const fithIng = ingredients[4];
  const sixthIng = ingredients[5];
  const seventhIng = ingredients[6];

  useEffect(() => {}, [resourceType]);

  return (
    <div className="w-full">
      <div className="md:py-10">
        <div className="py-10">
          {/* desktop */}
          <h1 className="text-center text-6xl font-bold text-nmr-red font-nmr">
            CON TODO
          </h1>
          <p className="text-nmr-red text-center font-bold">
            Here’s What Makes Our Hotdogs Special:
          </p>
        </div>
        <div className="md:flex hidden flex-col items-center justify-center bg-footer bg-cover bg-no-repeat py-40 ">
          <div className="w-full max-w-3xl h-auto">
            <Image
              src="/images/home-hotdog.png"
              alt="ingredients image"
              layout="responsive"
              width={1235}
              height={507}
            />
            <div className="flex">
              <span className="flex w-14 h-14  relative bottom-40 left-0">
                <span className="animate-ping absolute inline-flex w-12 h-12 hover:w-14 hover:h-14 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(firstIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative bottom-60 left-8">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(secondIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative bottom-64 left-36">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(thirdIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative  bottom-64 left-60">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(fourthIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-60 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
              <span className="flex w-12 h-12 relative  bottom-64 left-80">
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
              <span className="flex w-12 h-12 relative  bottom-36 left-28">
                <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full  bg-red-400 opacity-30"></span>
                <button onClick={() => setResourceType(seventhIng)}>
                  <span className="relative inline-flex rounded-full w-12 h-12 border-4 border-red-800 border-solid bg-red-500 hover:w-14 hover:h-14  bg-opacity-40 justify-center items-center font-bold text-xl text-slate-300"></span>
                </button>
              </span>
            </div>
          </div>
          {/* <div className="flex flex-col justify-center items-center font-bold text-xl"> */}
          <div
            className="text-center text-nmr-lightBrown bg-redBg max-w-2xl w-full p-10 rounded-md mt-10"
            id="first"
          >
            <h1 className="font-nmr text-4xl">{resourceType.title}</h1>
            <h1 className="font-semibold text-lg">
              {resourceType.description}
            </h1>
          </div>
          {/* </div> */}
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
            />
          </div>
        </div>
        {/* <div className="hidden md:block  ">
          <div className="grid grid-cols-2">
            <div className="z-10">
              <Image
                src="/images/ingred.png"
                width={446}
                height={600}
                layout="responsive"
                alt="Image of Hotdog"
              />
            </div>
            <div
              id="boxesTrigger"
              // ref={(el) => (tabRef = el)}
              className="grid grid-cols-1 item-center lg:py-10 "
            >
              {ingredients.map((item, i) => (
                <Tab
                  key={i}
                  title={item.title}
                  description={item.description}
                />
              ))}
              <div className="text-center pr-10 pt-3 mlg:p-0">
                <button className="rounded-md bg-nmr-black text-white font-nmr p-1 md:px-2 md:py-2 xl:p-4">
                  {" "}
                  View Entire Menu
                </button>
              </div>
            </div>
          </div>
        </div> */}
        {/* mobile */}
        {/* <div className=" md:hidden ">
          <div className="grid grid-cols-1">
            <div className="z-10">
              <Image
                src="/images/ingred.png"
                width="446"
                height="600"
                layout="responsive"
                alt="image of Hotdog"
              />
            </div>
            <div className="grid grid-cols-1 item-center lg:py-10 gap-2">
              {ingredients.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-start even:justify-end pt-5  even:rounded-l-lg"
                >
                  <MobileTab
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hotdog;
