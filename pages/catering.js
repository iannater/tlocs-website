import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";

const catering = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-20 md:py-20 bg-yellowBg">
        <div className="md:bg-dog md:bg-contain md:bg-no-repeat md:bg-right md:-mr-56 md:h-96">
          <div className="grid md:grid-cols-2 px-10 md:px-40 text-center md:text-left">
            <div>
              <h2 className="font-nmr font-bold text-2xl">Welcome to</h2>
              <h1 className="text-[#D9453F] text-4xl font-bold font-nmr pb-2">
                T-Loc&apos;s Catering
              </h1>
              <p className="font-semibold pb-5 md:pb-10">
                Want to spread the love and show everyone what a T-Loc&apos;s
                hot dog is all about? We now cater for any sized party and any
                event.
              </p>
              <button className="bg-[#D9453F] text-[#F1E8DC] rounded-md px-5 py-2 text-lg font-bold font-nmr">
                Book Now
              </button>
            </div>
            <div></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 text-center py-20 px-10 lg:px-40 gap-6 md:gap-0">
          <div>
            <div className="pb-4">
              <Image src="/phone.png" alt="phone icon" width={59} height={59} />
            </div>
            <h1 className="font-nmr text-3xl text-nmr-redTxt">
              Fresh Ingredients
            </h1>
            <h2 className="font-semibold">
              We use only the best ingrdients, making sure nothing is ever
              frozen and served perfect to you.
            </h2>
          </div>
          <div>
            <div className="pb-4">
              <Image src="/phone.png" alt="phone icon" width={59} height={59} />
            </div>
            <h1 className="font-nmr text-3xl text-nmr-redTxt">
              Fresh Ingredients
            </h1>
            <h2 className="font-semibold">
              We use only the best ingrdients, making sure nothing is ever
              frozen and served perfect to you.
            </h2>
          </div>
          <div>
            <div className="pb-4">
              <Image src="/phone.png" alt="phone icon" width={59} height={59} />
            </div>
            <h1 className="font-nmr text-3xl text-nmr-redTxt">
              Fresh Ingredients
            </h1>
            <h2 className="font-semibold">
              We use only the best ingrdients, making sure nothing is ever
              frozen and served perfect to you.
            </h2>
          </div>
        </div>

        <div className="md:px-40">
          <div className="bg-redBg p-10 md:rounded-lg shadow-lg ">
            <div className="pb-4 md:w-1/2 text-center">
              <h1 className="font-nmr text-4xl font-bold text-nmr-lightBrown">
                Thinking of Catering?
              </h1>
            </div>
            <form className="md:w-1/2 text-center">
              <div className="w-full space-y-5 p-2">
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
                <input
                  placeholder="details about the event (time, type of venue, private party or company event, etc.)"
                  className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
                ></input>
                <button className="bg-nmr-black text-nmr-lightBrown font-nmr px-10 py-3 text-xl rounded-md">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default catering;
