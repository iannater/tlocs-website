import React from "react";

const Hours = (props) => {
  console.log(props);
  return (
    <div className="flex justify-center align-middle p-5 md:p-10">
      <div className="bg-footer w-full rounded-xl max-w-3xl py-10 px-5">
        <h1 className="text-2xl md:text-5xl font-bold text-nmr-red font-nmr pb-5 text-center">
          Hours
        </h1>
        <div className="grid grid-cols-2 text-center text-nmr-lightBrown md:text-2xl ">
          <div>
            <div className="pb-5">
              <h1 className="font-bold"> {props.hours[0].day} </h1>
              <h1 className="font-medium">{props.hours[0].hours}</h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> {props.hours[1].day} </h1>
              <h1 className="font-medium"> {props.hours[1].hours} </h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> {props.hours[2].day}</h1>
              <h1 className="font-medium">{props.hours[2].hours} </h1>
            </div>
          </div>
          <div>
            <div className="pb-5">
              <h1 className="font-bold"> {props.hours[3].day}</h1>
              <h1 className="font-medium">{props.hours[3].hours} </h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> {props.hours[4].day}</h1>
              <h1 className="font-medium">{props.hours[4].hours}</h1>
            </div>
            <div className="pb-5">
              <h1 className="font-bold"> {props.hours[5].day}</h1>
              <h1 className="font-medium">{props.hours[5].hours}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
