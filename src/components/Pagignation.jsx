import React from "react";

function Pagignation({ pageNo, handlePre, handleNext }) {
  return (
    <div className="bg-gray-300 flex justify-center gap-5 p-4 font-semibold text-sm md:text-xl ">
      <div onClick={handlePre}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </div>
      <div className="border-solid">{pageNo}</div>
      <div onClick={handleNext}>
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagignation;
