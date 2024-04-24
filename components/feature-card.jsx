import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="max-w-[390px] bg-gray-200 p-8 rounded-xl">
      <div>
        <Image src={icon} alt="feature-icon" width={40} height={40} />
      </div>
      <div>
        <p>{title}</p>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
