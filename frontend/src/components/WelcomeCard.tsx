import React from "react";
import { GiSewingMachine, GiAmpleDress } from "react-icons/gi";

const WelcomeCard = () => {
  return (
    <div className="relative flex justify-center w-full h-full border-2 border-dashed border-[#7F61BC] rounded-[40px] bg-white opacity-1 ease-in-out duration-500">
      <div className="absolute flex flex-col items-center top-[-40px] text-[#484792]">
        <div className="text-7xl bg-white px-4">Welcome</div>
        <div className="">
          Please register either as a Maker or a Client to start using the site.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] gap-2">
        <GiSewingMachine className="text-[120px] text-[#484792]" />
        <div className="text-[#1d1c4b]">Maker</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] gap-2">
        <GiAmpleDress className="text-[120px] text-[#484792]" />
        <div className="text-[#1d1c4b]">Client</div>
      </div>
    </div>
  );
};

export default WelcomeCard;
