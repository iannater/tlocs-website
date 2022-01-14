import React, { useState } from "react";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const menu = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="py-10">
      <div className="text-center bg-yellowBg">
        <h1 className="heading font-nmr">Menu</h1>
        <p className="font-semibold text-lg text-nmr-red pb-20">
          Hot Dogs, Burritos, Tacos y mas Estilo Sonora
        </p>
      </div>
      <div className="py-10 px-20 mb-10 bg-redBg w-5/6 rounded-md text-white">
        <div className="flex justify-between ">
          <h1 className="flex justify-start font-nmr text-4xl pb-3">
            Hot Dogs
          </h1>
          <div>
            <div
              onClick={() => setClicked(!clicked)}
              className="flex justify-center items-center pr-4"
            >
              <Image src="/arrow.png" alt="arrow" width={30} height={50} />
            </div>
          </div>
        </div>

        <section>
          {clicked === false ? (
            <div>
              {props.menus.map((menu, i) => (
                <div key={i} className="pr-40">
                  <div className="flex justify-between">
                    <div scope="row" className="pb-2 text-xl font-semibold">
                      {menu.itemName}
                    </div>
                    <div className="text-xl font-semibold"> ${menu.price}</div>
                  </div>
                  <div className="border-2 border-solid border-white mb-2"></div>
                  <div>
                    <div scope="row" className="pb-8 font-semibold">
                      {menu.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default menu;
