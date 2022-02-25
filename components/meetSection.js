import Image from "next/image";
import React from "react";

const chefs = [
  {
    name: "Miguel",
    img: "/images/miguel.png",
    bio: "By age 8, Miguel had already lived in three countries and five cities. Constantly being on the move, Miguel developed his palate for different cuisines at an early age. Eventually, Tucson became home where he later began working as a line cook at a luxury resort. Miguel then took his passion to the Scottsdale Culinary Institute where he fine-tuned his skills to take things to the next level. He is proud to have trained under Chef Thomas Keller at the three-star Michelin restaurant Per Se in New York City. He worked his way up from back-of-the-house support, to lead cook, to front-of-the-house, then joined the Per Se food and beverage management team. Miguel is grateful for his experiences that now allow him to use all of those skills to feed his own dream, T-Loc’s. Whether he’s taking orders at the window, grilling over la plancha or pulling up a chair with customers, Miguel does it with passion: “It’s all about the people! Boom boom!!”",
  },
  {
    name: "Zulma",
    img: "/images/zulma.png",
    bio: "Originally from Honduras, Zulma was raised by her grandparents who were farmers. At age 18, she decided to make the move to Tucson, AZ on a student visa. While there, Zulma became determined to learn English the best way she thought how: by working in a restaurant! Her positive attitude, determination and strong work ethic landed her her first job as a Server at a luxury resort in Tucson where she met Miguel. After graduating to prep cook, then banquet cook, to line cook, Zulma realized how passionate she was about food all along: “As a little girl having grown up in Honduras, farming, growing, and cultivating food is my most natural way of life.” ",
  },
  {
    name: "Miguel and Zulma",
    img: "/images/together.png",
    bio: "	After years of working in the hotel and restaurant business, Miguel and Zulma gained the knowledge, skills and confidence to begin their own culinary journey and move to Austin, TX. T-Loc’s Sonora Hotdogs was born in 2016 as an effort to share the unique local cuisine from the place where it all began - Tucson.  Together, Zulma and Miguel have explored 23 countries celebrating what they love most: food, travel and culture. “We are blue collar people who earn for the work that we put in and  believe that we are true professionals with ambition to spread love through the food we serve.”",
  },
];

const meetSection = () => {
  return (
    <div className="md:p-20">
      <div className="text-center">
        <h1 className="text-4xl font-nmr font-bold text-nmr-red pb-10">
          Meet The Chefs
        </h1>
      </div>
      {chefs.map((chef, i) => (
        <div
          key={chef.name}
          className="md:pb-10 flex justify-center flex-col align-middle space-y-10"
        >
          {/* pic */}
          <div className="flex justify-center">
            <Image src={chef.img} width={531} height={660} alt="image" />
          </div>
          {/* content */}
          <div className="flex justify-center">
            <div className="bg-redBg md:rounded-md md:max-w-5xl text-white p-10 flex justify-center flex-col items-center">
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
