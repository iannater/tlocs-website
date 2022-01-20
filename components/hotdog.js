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
    <div className="hidden md:block container py-10">
      <div className="py-10">
        <h1 className="heading font-nmr">CON TODO</h1>
        <p className="sub">Here’s What Makes Our Hotdogs Special:</p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="z-10">
          <Image
            src="/ingredients.png"
            width="700"
            height="1200"
            alt="image of hotdog"
          />
        </div>
        <div
          id="boxesTrigger"
          ref={(el) => (tabRef = el)}
          className="flex flex-col justify-between py-10 item-center"
        >
          {ingredients.map((item, i) => (
            <Tab key={i} title={item.title} description={item.description} />
          ))}
          <div className="text-center pr-10">
            <button className="rounded-md bg-nmr-black text-white font-nmr px-2 py-2">
              {" "}
              View Entire Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hotdog;
