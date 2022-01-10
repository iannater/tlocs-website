import React, { useState } from "react";
// import styles from "../styles/Home.module.css";

const menu = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="py-10">
      <div className="text-center bg-yellowBg">
        <h1 className="heading font-nmr">Menu</h1>
        <p className="font-semibold text-lg text-nmr-red">
          Hot Dogs, Burritos, Tacos y mas Estilo Sonora
        </p>
      </div>
      <div className="p-20 bg-redBg w-5/6 rounded-md text-white">
        <table>
          <thead>
            <tr>
              <th className="flex justify-start font-nmr text-4xl pb-3">
                Hot Dogs
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <button
                className="bg-black text-white"
                onClick={() => setClicked(!clicked)}
              >
                CLICK
              </button>
              <td scope="row" className="pb-4 text-lg font-semibold">
                {clicked === true ? <h1>hi</h1> : <h1>bye</h1>}
                Sonoran Hot Dog
              </td>
              <td> $6.50</td>
            </tr>
            <tr>
              <td scope="row" className="pb-8">
                Bacon wrapped hot dog, pinto beans, sauteed onions, diced
                onions, diced tomatoes, mayo, mustard, & jalapeno sauce.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td scope="row" className="pb-4">
                Yaqui Dog
              </td>
              <td> $7.25</td>
            </tr>
            <tr>
              <td scope="row" className="pb-8">
                Bacon wrapped hot dog, pinto beans, sauteed onions, carne asada,
                monterey jack cheese, & jalapeno sauce.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td scope="row" className="pb-4">
                Yaqui Dog
              </td>
              <td> $7.25</td>
            </tr>
            <tr>
              <td scope="row" className="pb-8">
                Bacon wrapped hot dog, pinto beans, sauteed onions, carne asada,
                monterey jack cheese, & jalapeno sauce.
              </td>
            </tr>
          </tbody>
          <tr>
            <th>Upgrade Your Hot Dog</th>
          </tr>
          <tbody>
            <tr>
              <td>Hewbrew National</td>
              <td>$1</td>
            </tr>

            <tr>
              <td>Hewbrew National</td>
              <td className="divide-x-2">$1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default menu;
