import Link from "next/link";
import React from "react";

import { GiSewingMachine, GiAmpleDress } from "react-icons/gi";

const WelcomeCard = () => {
  return (
    <div className="relative flex justify-center w-full h-full border-2 border-dashed border-[#7F61BC] rounded-[40px] bg-white opacity-1 ease-in-out duration-500 fade-in">
      <div className="absolute flex flex-col items-center top-[-20px] sm:top-[-40px] text-[#484792]">
        <div className="text-4xl sm:text-7xl bg-white px-4">Welcome</div>
        <div className="flex items-center mt-2 gap-3 bg-[#484792] p-[3px] rounded-full">
          <button className="bg-white text-[#484792] text-xs md:text-lg px-3 md:px-5 py-1 rounded-full">
            Log In
          </button>
          <div className="text-xs md:text-sm text-white mr-[8px]">
            Or please register either as a Maker or a Client.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] gap-2">
        <Link href="/registration">
          <GiSewingMachine className="text-[120px] text-[#484792] cursor-pointer" />
        </Link>

        <div className="text-[#1d1c4b] cursor-pointer">Maker</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] gap-2">
        <GiAmpleDress className="text-[120px] text-[#484792] cursor-pointer" />
        <div className="text-[#1d1c4b] cursor-pointer">Client</div>
      </div>
    </div>
  );
};

export default WelcomeCard;
