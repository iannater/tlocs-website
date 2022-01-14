import Image from "next/image";
import React from "react";

const meetSection = () => {
  return (
    <div className="p-20">
      <div className="text-center">
        <h1 className="text-4xl font-nmr font-bold text-nmr-red pb-10">
          {" "}
          Meet the chef's
        </h1>
      </div>
      <div className="bg-redBg rounded-md flex ">
        {/* pic */}
        <div className="w-1/3 flex justify-center ">
          <Image src="/miguel.png" width={1000} height={1200} />
        </div>
        {/* content */}
        <div className="text-white p-10 w-2/3 flex flex-col">
          <h1 className="pb-5 font-nmr text-3xl font-bold">Miguel</h1>
          <p className="text-xl overflow">
            Id enim sunt incididunt veniam magna aute elit exercitation
            incididunt proident minim quis in cillum. Non reprehenderit ex quis
            officia commodo elit esse velit nisi et duis laboris mollit nulla.
            Qui et est tempor dolor sit. Qui reprehenderit est pariatur est.
            Incididunt anim laborum cillum nulla dolore cillum do laboris amet
            quis sit sint. Id enim sunt incididunt veniam magna aute elit
            exercitation incididunt proident minim quis in cillum. Non
            reprehenderit ex quis officia commodo elit esse velit nisi et duis
            laboris mollit nulla. Qui et est tempor dolor sit. Qui reprehenderit
            est pariatur est. Incididunt anim laborum cillum nulla dolore cillum
            do laboris amet quis sit sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default meetSection;
