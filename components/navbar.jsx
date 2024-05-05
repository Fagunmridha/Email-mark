import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" py-8 px-8 flex flex-row justify-between items-center]">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icon/audienceful-logo.png"
          alt="audience"
          width={24}
          height={24}
        />
        <p className="text-xl  text-[#222222] font-bold">audienceful</p>
      </Link>
      {/* <IoMenu /> */}

      <div className=" flex  items-center flex-row gap-8 ">
        <Link
          href="/features"
          className="text-[16px] py-2 px-3 rounded-xl font-normal text-[#333333] hover:bg-slate-200"
        >
          Features
        </Link>
        <Link
          href="/resources"
          className="text-[16px] py-2 px-3 rounded-xl font-normal text-[#333333] hover:bg-slate-200"
        >
          Resources
        </Link>
        <Link
          href="/emailspiration"
          className="text-[16px] py-2 px-3 rounded-xl font-normal text-[#333333] hover:bg-slate-200"
        >
          Emailspiration
        </Link>
        <Link
          href="/pricing"
          className="text-[16px] py-2 px-3 rounded-xl font-normal text-[#333333] hover:bg-slate-200"
        >
          Pricing
        </Link>
      </div>
      <div className="flex flex-row gap-7 items-center">
        <IoSearchOutline className=" h-6 w-6" />
        <button className="text-[17px] font-normal py-2 text-[#333333] hover:bg-slate-200 px-3  rounded-xl">
          {" "}
          Login
        </button>
        <button className="text-[17px] font-normal py-2 text-[#333333 bg-gray-900 text-white px-3  rounded-xl">
          Join free
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
