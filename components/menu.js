import React, { useState } from "react";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const menu = () => {
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
              className="flex justify-center items-center pr-4 "
            >
              <Image src="/arrow.png" alt="arrow" width={30} height={50} />
            </div>
          </div>
        </div>

        <table>
          {clicked === false ? (
            <div>
              <tbody>
                <tr>
                  <td scope="row" className="pb-4 text-lg font-semibold">
                    {/* {clicked === true ? <h1>hi</h1> : <h1>bye</h1>} */}
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
                    Bacon wrapped hot dog, pinto beans, sauteed onions, carne
                    asada, monterey jack cheese, & jalapeno sauce.
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
                    Bacon wrapped hot dog, pinto beans, sauteed onions, carne
                    asada, monterey jack cheese, & jalapeno sauce.
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
            </div>
          ) : null}
        </table>
      </div>
    </div>
  );
};

export default menu;
