import Image from "next/image";

const tab = () => {
  return (
    <div className="bg-redBg p-5 rounded-lg flex justify-between  w-5/6">
      <div className="pl-10 text-white text-lg pr-10">
        <h1>Diced Tomatoes</h1>
        <div className="w-1/2 rounded-md h-1 bg-white ml-`"></div>
        <p>Perfectly diced tomatoes sourced from the best farmers in Texas</p>
      </div>
      <div className="flex justify-center items-center pr-4">
        <Image src="/arrow.png" alt="arrow" width={30} height={50} />
      </div>
    </div>
  );
};

export default tab;
