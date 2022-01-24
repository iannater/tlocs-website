import React from "react";

const Form = () => {
  return (
    <div className="md:px-40">
      <div className="bg-carteringCard md:rounded-lg shadow-lg grid lg:grid-cols-2">
        <div className="p-10">
          <div className="pb-4 text-center">
            <h1 className="font-nmr text-4xl font-bold text-nmr-lightBrown">
              Thinking of Catering?
            </h1>
          </div>
          <form className="text-center">
            <div className="w-full space-y-5 p-2 md:py-5 md:px-10">
              <input
                placeholder="name"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              <input
                placeholder="email address"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              <input
                placeholder="date of the event"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              <input
                placeholder="number of people approx"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              <textarea
                rows="3"
                placeholder="details about the event (time, type of venue, private party or company event, etc.)"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full shadow-md"
              ></textarea>
              <button className="bg-nmr-black text-nmr-lightBrown font-nmr px-10 py-3 text-xl rounded-md">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Form;
