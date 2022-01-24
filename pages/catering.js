import React from "react";
import Image from "next/image";
import Layout2 from "../components/layoutSd";
import Form from "../components/Form";

const info = [
  {
    title: "Fresh Ingredients",
    sub: "We use only the best ingrdients, making sure nothing is ever frozen and served perfect to you.",
    icon: "/images/chef.jpg",
  },
  {
    title: "World Class Chefs",
    sub: "Professional trained, and at the top of their class. Leave it to Miguel and Zulma to leave you without words.",
    icon: "/images/chef.jpg",
  },
  {
    title: "Attractive Selection",
    sub: "We have something for everyone and all ages. Let us know any restrictions and we will make sure to accomodate.",
    icon: "/images/selection.jpg",
  },
];

const Catering = () => {
  return (
    <div>
      <div className="pt-20 md:py-20 bg-yellowBg">
        <div className="px-10 md:px-40 text-center md:text-left">
          <div className="flex flex-col justify-center md:justify-start md:items-start md:max-w-md">
            <h2 className="font-nmr font-bold text-2xl">Welcome to</h2>
            <h1 className="text-[#D9453F] text-5xl font-bold font-nmr pb-2 ">
              T-Loc&apos;s Catering
            </h1>
            <p className="font-semibold pb-5 md:pb-10  ">
              Want to spread the love and show everyone what a T-Loc&apos;s hot
              dog is all about? We now cater for any sized party and any event.
            </p>
            <div>
              <button className="bg-[#D9453F] text-[#F1E8DC] rounded-md px-5 py-2 text-lg font-bold font-nmr">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 text-center py-20 px-10 md:px-40 gap-6 md:gap-4">
          {info.map((items, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="pb-4">
                <Image
                  src={items.icon}
                  alt="phone icon"
                  width={59}
                  height={59}
                />
              </div>
              <div className="max-w-xs">
                <h1 className="font-nmr text-3xl sm:text-2xl lg:text-3xl text-nmr-redTxt">
                  {items.title}
                </h1>
                <h2 className="font-semibold">{items.sub}</h2>
              </div>
            </div>
          ))}
        </div>
        <Form />
      </div>
    </div>
  );
};

Catering.Layout = Layout2;

export default Catering;
