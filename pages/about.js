import React from "react";
import MeetSection from "../components/meetSection";
import NavbarAbout from "../components/navbarAbout";

const about = () => {
  return (
    <div className="bg-yellowBg ">
      <NavbarAbout />
      <div className="bg-aboutUs min-h-screen bg-no-repeat bg-cover bg-center w-full ">
        {" "}
      </div>
      <MeetSection />
    </div>
  );
};

export default about;
