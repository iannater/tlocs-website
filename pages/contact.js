import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <div className="bg-yellowBg  ">
      {/* Center box */}
      <div className="grid grid-cols-2 rounded-md px-20 lg:px-40 pt-20">
        <div className="bg-redBg flex flex-col rounded-l-md p-2 justify-center items-center ">
          <div className="text-[#F1E8DC] text-center  lg:pb-10">
            <h1 className=" text-3xl lg:text-6xl font-nmr">Let's Talk</h1>
            <p className=" text-lg lg:text-2xl">We-d love to hear from you!</p>
          </div>
          <div>
            <form className="flex flex-col space-y-4 px-10 w-64 md:w-72 lg:w-96">
              <input
                placeholder="name"
                className="rounded-md bg-[#F1E8DC] px-2 py-2"
              ></input>
              <input
                placeholder="email address"
                className="rounded-md bg-[#F1E8DC] px-2 py-2"
              ></input>
              <input
                placeholder="type your message here!"
                className="rounded-md bg-[#F1E8DC] px-2 py-2"
              ></input>
              <div className="pt-3 text-center">
                <button className="px-10 py-2 bg-nmr-black text-[#F1E8DC] rounded-md text-lg font-bold font-nmr md:w-48">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Image src="/gmap.png" alt="google map" width={520} height={552} />
        </div>
      </div>
      <div className="grid grid-cols-3 px-20 lg:px-40 pt-20 text-center">
        <div>
          <div>
            <Image src="/phone.png" alt="phone icon" width={59} height={59} />
          </div>
          <h1 className="font-nmr font-bold text-lg lg:text-3xl text-nmr-black">
            Phone:
          </h1>
          <h2 className="text-nmr-red font-semibold">(XXX) XXX - XXXX</h2>
        </div>
        <div>
          <div>
            <Image src="/email.png" alt="email icon" width={59} height={59} />
          </div>
          <h1 className="font-nmr font-bold text-lg lg:text-3xl text-nmr-black">
            Email:
          </h1>
          <h2 className="text-nmr-red font-semibold">520tlocs@gmail.com</h2>
        </div>
        <div>
          <div>
            <Image
              src="/address.png"
              alt="address icon"
              width={59}
              height={59}
            />
          </div>
          <h1 className="font-nmr font-bold text-lg lg:text-3xl text-nmr-black">
            address:
          </h1>
          <h2 className="text-nmr-red font-semibold">
            5000 Burnet Rd,
            <br /> Austin, Tx 78756
          </h2>
        </div>
      </div>
    </div>
  );
};

export default contact;
