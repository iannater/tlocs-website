const mobileTab = (props) => {
  return (
    <div className="bg-redBg text-white p-2 rounded-md w-4/6">
      <div className="px-5  ">
        <h1 className="font-nmr font-bold text-sm ">{props.title}</h1>
        <p className="text-xs ">{props.description}</p>
      </div>
    </div>
  );
};

export default mobileTab;
