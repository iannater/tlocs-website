import Image from "next/image";
import React from "react";

const meetSection = (props) => {
  // console.log(props.aboutPg.aboutPages[0].chefs);
  return (
    <div className="md:p-20 md:pt-0 md:pb-0">
      <div className="text-center">
        <h1 className="text-4xl font-nmr font-bold text-nmr-red pb-10">
          {props.aboutPg.aboutPages[0].meetSection}
        </h1>
      </div>
      {props.aboutPg.aboutPages[0].chefs.map((chef, i) => (
        <div
          key={chef.name}
          className="md:pb-10 flex justify-center flex-col align-middle space-y-10 pb-10"
        >
          {/* pic */}
          <div className="flex justify-center">
            <Image
              src={`${chef.chefImage.url}`}
              width={531}
              height={660}
              alt="image"
            />
          </div>
          {/* content */}
          <div className="flex justify-center">
            <div className="bg-redBg md:bg-cardBg md:rounded-md md:max-w-5xl text-white p-10 flex justify-center flex-col items-center">
              <h1 className="pb-5 font-nmr text-2xl lg:text-3xl font-bold">
                {chef.name}
              </h1>
              <p className=" lg:text-xl text-sm overflow">{chef.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default meetSection;
