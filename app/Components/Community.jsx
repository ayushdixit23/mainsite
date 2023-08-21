import React from "react";
import Image from "next/image";
import BG from "../assests/BG.svg";
// import compic from "../assests/compic.png";

const Community = () => {
  return (
    <>
      <div className="select-none pb-20 py-4 bg-[#F0F2FF]">
        <div className="sm:text-3xl text-2xl  py-5 font-semibold text-center ">
          Communities
        </div>
        <div className="my-4 ">
          <div className="flex pn:max-md:flex-col justify-center md:space-x-7 pn:max-md:space-y-5 pn:max-md:px-[7%] px-6 items-center">
            <div className="h-[370px] flex items-center justify-center ">
              <div className="flex flex-col justify-center h-[240px] bg-white items-center max-w-[400px] shadow-lg min-w-[300px]   space-y-3 ring-[#D4D2E3] rounded-3xl py-3">
                <div className="bg-white p-1 rounded-[38px]">
                  <Image alt="community" src={BG} width={80} className="" />
                </div>
                <div className="text-2xl text-center font-semibold">
                  Assemble: <br />
                  The Marvel Community
                </div>
                <div className="text-sm text-center w-[82%]">
                  Welcome to our vibrant education community! Join us on a
                  journey of knowledge and growth ...
                </div>
                <div className="flex items-center">
                  <div>{/* <Image alt="community" src={compic} /> */}</div>
                  <div>20k members</div>
                </div>
                <div className="pt-12 w-[85%] ">
                  <button className="text-white rounded-full bg-[#0F172A] w-[100%] p-[10px] mt-2">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[370px] flex items-center justify-center ">
              <div className="flex flex-col justify-center h-[240px] bg-white items-center max-w-[400px] shadow-lg min-w-[300px]   space-y-3 ring-[#D4D2E3] rounded-3xl py-3">
                <div className="bg-white p-1 rounded-[38px]">
                  <Image alt="community" src={BG} width={80} className="" />
                </div>
                <div className="text-2xl text-center font-semibold">
                  Assemble: <br />
                  The Marvel Community
                </div>
                <div className="text-sm text-center w-[82%]">
                  Welcome to our vibrant education community! Join us on a
                  journey of knowledge and growth ...
                </div>
                <div className="flex items-center">
                  <div>{/* <Image alt="community" src={compic} /> */}</div>
                  <div>20k members</div>
                </div>
                <div className="pt-12 w-[85%] ">
                  <button className="text-white rounded-full bg-[#0F172A] w-[100%] p-[10px] mt-2">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[370px] flex items-center justify-center ">
              <div className="flex flex-col justify-center h-[240px] bg-white items-center max-w-[400px] shadow-lg min-w-[300px]   space-y-3 ring-[#D4D2E3] rounded-3xl py-3">
                <div className="bg-white p-1 rounded-[38px]">
                  <Image alt="community" src={BG} width={80} className="" />
                </div>
                <div className="text-2xl text-center font-semibold">
                  Assemble: <br />
                  The Marvel Community
                </div>
                <div className="text-sm text-center w-[82%]">
                  Welcome to our vibrant education community! Join us on a
                  journey of knowledge and growth ...
                </div>
                <div className="flex items-center">
                  <div>{/* <Image alt="community" src={compic} /> */}</div>
                  <div>20k members</div>
                </div>
                <div className="pt-12 w-[85%] ">
                  <button className="text-white rounded-full bg-[#0F172A] w-[100%]  p-[10px] mt-2">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
