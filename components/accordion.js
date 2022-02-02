import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";

const Accordion = (props) => {
  useEffect(() => {
    const list = gsap.utils.toArray(".accordion");

    list.forEach((accordion, index) => {
      let isOpen = index === 0 ? true : false;

      const title = accordion.getElementsByClassName("accordion__title")[0];
      const icon = accordion.getElementsByClassName("accordion__icon")[0];
      const content = accordion.getElementsByClassName("accordion__content")[0];

      // gsap.set(
      //   title,
      //   isOpen
      //     ? { background: "#fff", color: "#000" }
      //     : { background: "#4b0082", color: "#fff" }
      // );
      gsap.set(content, { height: isOpen ? "auto" : "0px" });
      gsap.set(icon, { scale: isOpen ? -1 : 1 });

      if (title) {
        accordion.addEventListener("click", () => {
          isOpen = !isOpen;

          // gsap.to(
          //   title,
          //   isOpen
          //     ? { background: "#fff", color: "#000" }
          //     : { background: "#4b0082", color: "#fff" }
          // );
          gsap.to(content, { height: isOpen ? "auto" : "0px" });
          gsap.to(icon, { scale: isOpen ? -1 : 1 });
        });
      }
    });
  });

  return (
    <div className="">
      {props.menus.map((menu, index) => (
        <div key={index} className="flex flex-col md:even:items-end">
          <div className="accordion md:w-5/6 bg-redBg text-white p-10 rounded-lg overflow-hidden mb-20">
            {index % 2 ? (
              <div className="accordion__title flex justify-start gap-4">
                <div className="accordion__icon">
                  <FiChevronDown className="w-14 h-14 text-[#F1E8DC]" />
                </div>
                <h2 className="m-0 font-nmr text-4xl md:text-5xl ">
                  {menu.nameOfSection}
                </h2>
              </div>
            ) : (
              <div className="accordion__title flex justify-end gap-4">
                <h2 className="m-0 font-nmr text-4xl md:text-5xl  ">
                  {menu.nameOfSection}
                </h2>
                <div className="accordion__icon">
                  <FiChevronDown className="w-14 h-14 text-[#F1E8DC]" />
                </div>
              </div>
            )}
            <div className="accordion__content h-0 transform -scale-y-1 overflow-hidden ">
              <div className="accordion__content-wrapper pt-10">
                {menu.items.map((item, i) => (
                  <div key={i} className="md:px-10 md:pt-5">
                    <div className="flex md:justify-between">
                      <div scope="row" className="pb-2 text-xl font-semibold">
                        {item.itemName}
                      </div>
                      <div className="text-xl font-semibold">
                        {" "}
                        ${item.price}
                      </div>
                    </div>
                    <div className="w-full max-w-7xl h-8">
                      <Image
                        src="/images/line.png"
                        layout="responsive"
                        height={21}
                        width={892}
                        alt="divider"
                      />
                    </div>
                    <div>
                      <div scope="row" className="pb-8 font-semibold">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
