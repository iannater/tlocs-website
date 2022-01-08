import React from "react";
// import styles from "../styles/Home.module.css";

const hotdog = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="pb-10">
        <h1 className="heading">Con Todo</h1>
        <p className="sub">Here’s What Makes Our Hotdogs Special:</p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="bg-red-500 h-[200px]">picture</div>
        <div className="bg-blue-500">text</div>
      </div>
    </div>
  );
};

export default hotdog;
