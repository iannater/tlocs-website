import React, { useState } from "react";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const menu = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="py-10">
      <div className="text-center bg-yellowBg">
        <h1 className="heading font-nmr">Menu</h1>
        <p className="font-semibold text-lg text-nmr-red pb-20">
          Hot Dogs, Burritos, Tacos y mas Estilo Sonora
        </p>
      </div>
      {props.menus.map((menu, index) => (
        <div
          key={index}
          className="py-10 px-20 mb-10 bg-redBg w-5/6 rounded-md text-white"
        >
          <div className="flex justify-between ">
            <h1 className="flex justify-start font-nmr text-4xl pb-3">
              {menu.nameOfSection}
            </h1>

            <div>
              <div
                onClick={() => toggle(index)}
                key={index}
                className="flex justify-center items-center pr-4"
              >
                <Image src="/arrow.png" alt="arrow" width={30} height={50} />
              </div>
            </div>
          </div>

          {menu.items.map((item, i) => (
            <section key={i}>
              {clicked === index ? (
                <div>
                  <div className="pr-40">
                    <div className="flex justify-between">
                      <div scope="row" className="pb-2 text-xl font-semibold">
                        {item.itemName}
                      </div>
                      <div className="text-xl font-semibold">
                        {" "}
                        ${item.price}
                      </div>
                    </div>
                    <div className="border-2 border-solid border-white mb-2"></div>
                    <div>
                      <div scope="row" className="pb-8 font-semibold">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      ))}
    </div>
  );
};

export default menu;
