import Image from "next/image";
import React from "react";

const BusinessCard = ({ img, badge, subtitle, icon }) => {
  return (
    <div className="max-w-[390px] bg-gray-200 p-8 rounded-xl">
      <Image src={img} alt="feature-icon" width={400} height={400} />
      <div>
        <p>{badge}</p>
        <p>{subtitle}</p>
      </div>
      <Image src={icon} alt="feature-icon" width={40} height={40} />
    </div>
  );
};

export default BusinessCard;
