import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-5 flex flex-row justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icon/audienceful-logo.png"
          alt="audience"
          width={24}
          height={24}
        />
        <p className="text-lg font-semibold">audienceful</p>
      </Link>
      <div className=" flex flex-row gap-10">
        <Link href="/features">Features</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/emailspiration">Emailspiration</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div className="flex flex-row gap-7">
        <Image src="/icon/search.png" alt="search" width={20} height={20} />
        <button>Login</button>
        <button>Join free</button>
      </div>
    </nav>
  );
};
export default Navbar;
