import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed flex justify-between items-center left-0 top-0 right-0 bg-[#484792] text-white font-normal p-0">
      <Link href="/" className="px-6 py-2">
        <Image src={"/images/logo.png"} alt="logo" width={40} height={40} />
      </Link>
      <div className="flex font-light gap-3">
        {/* <div className="bg-[#5E5DBE] px-4 rounded-full">Log In</div> */}
        <button className="bg-[#5E5DBE] px-4 mr-4 rounded-full">About</button>
      </div>
    </div>
  );
};

export default NavBar;
