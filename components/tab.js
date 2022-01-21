import Image from "next/image";

const tab = (props) => {
  return (
    <div id="boxes">
      <div className="bg-redBg text-white md:p-1 rounded-lg flex justify-between w-5/6 shadow-lg">
        <div className="pl-5 py-1 mx-1 xl:ml-5 xl:mr-10 xl:py-5 lg:py-2 ">
          <h1 className="font-nmr font-bold text-sm md:text-base lg:text-xl">
            {props.title}
          </h1>
          <p className="text-xs md:text-base ">{props.description}</p>
        </div>
        <div className="flex justify-center items-center pr-4">
          <Image src="/arrow.png" alt="arrow" width={30} height={50} />
        </div>
      </div>
    </div>
  );
};

export default tab;
