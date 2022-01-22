import Image from "next/image";
import React from "react";

const chefs = [
  {
    name: "Miguel",
    img: "/images/miguel.jpg",
    bio: "Id enim sunt incididunt veniam magna aute elit exercitation incididunt proident minim quis in cillum. Non reprehenderit ex quis officia commodo elit esse velit nisi et duis laboris mollit nulla. Qui et est tempor dolor sit. Qui reprehenderit est pariatur est. Incididunt anim laborum cillum nulla dolore cillum do laboris amet quis sit sint. Id enim sunt incididunt veniam magna aute elit exercitation incididunt proident minim quis in cillum. Non reprehenderit ex quis officia commodo elit esse velit nisi et duis laboris mollit nulla. Qui et est tempor dolor sit. Qui reprehenderit est pariatur est. Incididunt anim laborum cillum nulla dolore cillum do laboris amet quis sit sint.",
  },
  {
    name: "Zulma",
    img: "/images/zulma.jpg",
    bio: "Id enim sunt incididunt veniam magna aute elit exercitation incididunt proident minim quis in cillum. Non reprehenderit ex quis officia commodo elit esse velit nisi et duis laboris mollit nulla. Qui et est tempor dolor sit. Qui reprehenderit est pariatur est. Incididunt anim laborum cillum nulla dolore cillum do laboris amet quis sit sint. Id enim sunt incididunt veniam magna aute elit exercitation incididunt proident minim quis in cillum. Non reprehenderit ex quis officia commodo elit esse velit nisi et duis laboris mollit nulla. Qui et est tempor dolor sit. Qui reprehenderit est pariatur est. Incididunt anim laborum cillum nulla dolore cillum do laboris amet quis sit sint.",
  },
];

const meetSection = () => {
  return (
    <div className="md:p-20">
      <div className="text-center">
        <h1 className="text-4xl font-nmr font-bold text-nmr-red pb-10">
          {" "}
          Meet The Chef&apos;s
        </h1>
      </div>
      {chefs.map((chef, i) => (
        <div key={chef.name} className="md:pb-10 flex justify-center">
          <div className="bg-redBg md:flex md:rounded-md md:max-w-5xl">
            {/* pic */}
            <div className="md:w-1/3 flex justify-center">
              <Image
                src={chef.img}
                width={1000}
                height={1200}
                alt="image of meguel"
              />
            </div>
            {/* content */}
            <div className="text-white p-10  md:w-2/3 flex flex-col items-center md:items-start">
              <h1 className="pb-5 font-nmr text-2xl lg:text-3xl font-bold">
                {chef.name}
              </h1>
              <p className=" lg:text-xl text-sm overflow">{chef.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default meetSection;
