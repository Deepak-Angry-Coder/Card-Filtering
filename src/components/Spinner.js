import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="spinner "></div>
      <p className=" text-white">Loading...</p>
    </div>
  );
};

export default Spinner;
