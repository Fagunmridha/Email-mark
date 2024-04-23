import Image from "next/image";
import React from "react";

const Review = ({ review, name, designation, img }) => {
  return (
    <div className="max-w-[390px] bg-gray-200 p-8 rounded-xl">
      <div className="mb-9">
        <p className="text-gray-400">{review}</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Image
          src={img}
          alt="review"
          width={40}
          height={40}
          className=" rounded-full"
        />
        <div className="">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};
export default Review;
