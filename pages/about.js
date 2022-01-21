import React from "react";
import AboutHero from "../components/aboutHero";
import Layout from "../components/layout";
import MeetSection from "../components/meetSection";

const about = () => {
  return (
    <div className="bg-yellowBg">
      <AboutHero />
      <div className="bg-aboutUs min-h-screen bg-no-repeat bg-cover bg-center w-full ">
        {" "}
      </div>
      <MeetSection />
    </div>
  );
};

about.Layout = Layout;

export default about;
