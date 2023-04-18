import Link from "next/link";
import { GiSewingMachine, GiAmpleDress } from "react-icons/gi";

const registration = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-9 sm:p-24 sm:pt-32 pt-36">
      <div className="flex flex-col justify-around items-start w-full h-full px-2 sm:px-20 border-2 border-dashed border-[#7F61BC] rounded-[40px] opacity-1 ease-in-out duration-500 fade-in">
        <h1 className="self-center text-4xl text-[#7F61BC] h-[20%] pt-6">
          Registration
        </h1>
        <form className="flex flex-col justify-around gap-3 h-[80%] w-full">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 w-full">
              <input
                className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-3 w-full">
              <input
                className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-3 w-full">
              <input
                className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                type="text"
                placeholder="Adress"
              />
              <div className="flex gap-3 w-[50%]">
                <input
                  className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                  type="text"
                  placeholder="ZIP"
                />
                <input
                  className="border border-gray-300 w-[50%] rounded-full text-sm placeholder:text-sm pl-3 py-2 shadow-sm"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col items-center justify-center w-[50%] gap-2">
              <div className="flex justify-center items-center w-[158px] h-[158px] border-2 border-[#484792] border-dashed rounded-full cursor-pointer">
                <div className="flex flex-col justify-center items-center w-[150px] h-[150px] bg-[#484792] rounded-full">
                  <GiSewingMachine className="text-[100px] text-white cursor-pointer" />
                  <div className="text-white cursor-pointer">Maker</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[50%] gap-2">
              <div className="flex justify-center items-center w-[158px] h-[158px] border-2 border-[#484792] border-dashed rounded-full cursor-pointer">
                <div className="flex flex-col justify-center items-center w-[150px] h-[150px] bg-[#484792] rounded-full">
                  <GiAmpleDress className="text-[100px] text-white cursor-pointer" />
                  <div className="text-white cursor-pointer">Client</div>
                </div>
              </div>
            </div>
          </div>
          <input
            className="bg-[#484792] text-white py-1 border rounded-full"
            type="submit"
          />
        </form>
      </div>
    </main>
  );
};

export default registration;
