import Image from "next/image";
import React from "react";

const BusinessCard = ({ img, badge, subtitle, icon }) => {
  return (
    <div className="max-w-[490px] bg-white p-8 rounded-xl">
      <Image
        src={img}
        alt="feature-icon"
        width={600}
        height={600}
        className="mb-5"
      />
      <div>
        <button className=" bg-orange-500 rounded-full  px-2 py-1 items-start mb-2">
          {" "}
          <p className=" text-black mb-2">{badge}</p>
        </button>
        <p className="text-xl font-semibold text-gray-600 mb-10 px-20">
          {subtitle}
        </p>
      </div>
      <Image src={icon} alt="feature-icon" width={110} height={110} />
    </div>
  );
};

export default BusinessCard;
