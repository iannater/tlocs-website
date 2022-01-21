import React, { useState } from "react";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Menu = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="heading font-nmr">Menu</h1>
        <p className="font-semibold md:text-lg text-nmr-red pb-5 md:pb-20">
          Hot Dogs, Burritos, Tacos y mas Estilo Sonora
        </p>
      </div>
      {props.menus.map((menu, index) => (
        <div key={index} className="flex flex-col md:odd:items-end">
          <div className="bg-redBg text-white md:py-10 p-5 md:px-10 mb-10 md:w-5/6 md:rounded-md md:drop-shadow-2xl">
            {index % 2 ? (
              <div className="flex flex-row justify-start ">
                <div className="flex items-center ">
                  <div
                    onClick={() => toggle(index)}
                    key={index}
                    className="flex justify-center items-center pr-5 md:pr-10"
                  >
                    <Image
                      src="/images/down-arrow.png"
                      alt="arrow"
                      width={50}
                      height={26}
                    />
                  </div>
                </div>
                <h1 className="font-nmr text-4xl md:text-5xl ">
                  {menu.nameOfSection}
                </h1>
              </div>
            ) : (
              <div className="flex flex-row justify-end">
                <h1 className="font-nmr text-4xl md:text-5xl pb-3">
                  {menu.nameOfSection}
                </h1>

                <div className="flex items-center">
                  <div
                    onClick={() => toggle(index)}
                    key={index}
                    className="flex justify-center items-center pl-5 md:pl-10"
                  >
                    <Image
                      src="/images/down-arrow.png"
                      alt="arrow"
                      width={50}
                      height={26}
                    />
                  </div>
                </div>
              </div>
            )}

            {menu.items.map((item, i) => (
              <section key={i}>
                {clicked === index ? (
                  <div>
                    <div className="md:px-10 md:pt-5">
                      <div className="flex md:justify-between">
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
        </div>
      ))}
    </div>
  );
};

export default Menu;
