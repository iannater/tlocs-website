import Image from "next/image";
import React from "react";
import Tab from "./tab";

// import styles from "../styles/Home.module.css";

const hotdog = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="py-10">
        <h1 className="heading font-nmr">CON TODO</h1>
        <p className="sub">Here’s What Makes Our Hotdogs Special:</p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="bg-red-500">
          <Image
            src="/ingredients.png"
            width="500"
            height="1000"
            alt="image of hotdog"
          />
        </div>
        <div className=" flex flex-col space-y-2 pt-4">
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
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
