import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div>
      <footer className="p-10 grid grid-cols-5 min-h-[100px] bg-footer">
        <div className="flex justify-center items-start flex-col">
          <a target="_blank" rel="noopener noreferrer">
            <span className="">
              <Image
                src="/blklogo.png"
                alt="Dark Logo"
                width={100}
                height={100}
              />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-red-600 font-bold pb-5">Hours:</h1>
          <h1 className="text-white font-bold">Monday closed</h1>
        </div>
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-red-600 font-bold pb-5">Our Home</h1>
          <h1 className="text-white font-bold">
            5000 Burnet Rd, Austin, TX 78756
          </h1>
        </div>
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-red-600 font-bold pb-5">Connect</h1>
          <h1 className="text-white font-bold">
            follow our journey on social channels
          </h1>
        </div>
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-red-600 font-bold pb-5">Nowhere to go but up</h1>
          <h1 className="text-white font-bold">Privacy</h1>
        </div>
      </footer>
    </div>
  );
};

export default footer;
