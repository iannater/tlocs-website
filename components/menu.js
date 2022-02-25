import React from "react";

import Accordion from "./accordion";

const Menu = (menus) => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-center text-6xl font-bold text-nmr-red  font-nmr">
          Menu
        </h1>
        <p className="font-semibold md:text-lg text-nmr-red pb-5 md:pb-20">
          Hot Dogs, Burritos, Tacos y mas Estilo Sonora
        </p>
      </div>
      <Accordion {...menus} />
    </div>
  );
};

export default Menu;
