import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Tab from "./tab";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ingredients = [
  {
    title: "Diced Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Diced Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Diced Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Diced Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Diced Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
  {
    title: "Diced Tomatoes",
    description:
      "Perfectly diced tomatoes sourced from the best farmeres in Texas",
  },
];

const hotdog = () => {
  const tabRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const firstItem = tabRef.children[0];
    const sndItem = tabRef.children[1];
    console.log(firstItem);

    gsap.fromTo(
      "#boxes",
      {
        x: -450,
      },
      {
        scrollTrigger: {
          trigger: "#boxesTrigger",
          start: "top 50%",
          end: "10% 20% ",
          toggleActions: "play none none reverse",
          markers: false,
          scrub: true,
        },
        x: -10,
        stagger: 0.2,
        duration: 1,
      }
    );
    return;
  });
  return (
    <div className="w-full">
      <div className="md:py-10">
        <div className="py-10">
          <h1 className="heading font-nmr">CON TODO</h1>
          <p className="sub">Here’s What Makes Our Hotdogs Special:</p>
        </div>
        <div className="hidden md:block ">
          <div className="grid grid-cols-2">
            <div className="z-10">
              <Image
                src="/ingredients.png"
                width="446"
                height="600"
                layout="responsive"
                alt="image of hotdog"
              />
            </div>
            <div
              id="boxesTrigger"
              ref={(el) => (tabRef = el)}
              className="grid grid-cols-1 item-center lg:py-10"
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
        </div>
      </div>
    </div>
  );
};

export default hotdog;
