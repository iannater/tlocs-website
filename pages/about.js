import Image from "next/image";
import React from "react";
import AboutHero from "../components/aboutHero";
import Layout from "../components/layout";
import MeetSection from "../components/meetSection";

const about = () => {
  return (
    <div className="bg-yellowBg bg-cover bg-no-repeat">
      <AboutHero />
      {/* <div className="bg-aboutUs min-h-screen bg-no-repeat  bg-auto bg-center  ">
        {" "}
      </div> */}
      {/* <div className="flex justify-end"> */}
      {/* <div className="absolute z-10 text-white max-w-xl pr-40 pt-10 ">
          <h1>These Ain't Your Typical Hotdogs.</h1>
          <p>
            These are Tucson Local hotdogs, hence our name. Originally from the
            state of Sonora, MX, they are now part of the Arizona food culture.
            We believe everyone should try them, so we brought them to Austin.
            Our food is so authentic, that we fly our buns all the way from
            Tucson weekly. They look like little gold bars and they taste even
            better. Sound like a local by ordering yours "Con Todo".
          </p>
        </div> */}
      <div className="pb-10 justify-center z-0 ">
        <Image
          src="/images/about2.png"
          width={1440}
          height={1252}
          priority
          alt="Image with a map"
        />
      </div>
      {/* </div> */}
      <MeetSection />
    </div>
  );
};

about.Layout = Layout;

export default about;
