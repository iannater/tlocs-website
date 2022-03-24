import React from "react";
const Hours = () => {
  return (
    <div className="flex justify-center align-middle p-5 md:p-10">
      <div className="bg-footer w-full rounded-xl max-w-3xl py-10 px-5">
        <h1 className="text-2xl md:text-5xl font-bold text-nmr-red font-nmr pb-5 text-center">
          Hours
        </h1>
        <div className="grid grid-cols-2 text-center text-nmr-lightBrown md:text-2xl ">
          <div>
            <div className="pb-5">
              <h1 className="font-bold"> Friday </h1>
              <h1 className="font-medium">11am-3pm , 5:30-9pm</h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> Saturday </h1>
              <h1 className="font-medium"> 11am-9pm </h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> Sunday</h1>
              <h1 className="font-medium"> 11am-3pm </h1>
            </div>
          </div>
          <div>
            <div className="pb-5">
              <h1 className="font-bold"> Monday</h1>
              <h1 className="font-medium">Closed </h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> Tuesday & Wednesday</h1>
              <h1 className="font-medium">11am-3pm , 5:30-8pm</h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> Thursday</h1>
              <h1 className="font-medium">11am-3pm , 5:30-9pm</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
