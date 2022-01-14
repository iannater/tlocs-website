import React from "react";
import AboutHero from "../components/aboutHero";
import MeetSection from "../components/meetSection";

const about = () => {
  return (
    <div>
      <div className="bg-redBg h-screen w-full -mt-40 pt-40 ">
        <AboutHero />
      </div>
      <MeetSection />
    </div>
  );
};

export default about;
