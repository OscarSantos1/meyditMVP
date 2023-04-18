import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed flex justify-between items-center left-0 top-0 right-0   text-white font-normal p-4">
      <div className="bg-[#5E5DBE] px-10 py-2 rounded-full">
        <Image src={"/images/logo.png"} alt="logo" width={40} height={40} />
      </div>
      <div className="flex font-light gap-3">
        {/* <div className="bg-[#5E5DBE] px-4 rounded-full">Log In</div> */}
        <div className="bg-[#5E5DBE] px-4 rounded-full">About</div>
      </div>
    </div>
  );
};

export default NavBar;
