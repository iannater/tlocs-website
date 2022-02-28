import React from "react";
import ReactPlayer from "react-player";

const aboutHero = () => {
  return (
    <div className="md:p-20 py-20 md:min-h-screen flex flex-col items-center bg-redBg bg-cover bg-no-repeat">
      <div className="md:p-10 text-center font-bold text-white pb-5">
        <h2 className="md:text-2xl pb-5">Adipisicing quis amet et</h2>
        <h1 className="text-5xl md:text-7xl font-nmr">WHO WE ARE</h1>
      </div>
      <div className="text-center px-5">
        <ReactPlayer
          width="1093px"
          height="563px"
          controls={true}
          url="https://media.graphcms.com/zPXFbFZHSQOmfRu6v5Xb"
        />
      </div>
    </div>
  );
};

export default aboutHero;
