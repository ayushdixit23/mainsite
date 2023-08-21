import Image from "next/image";
import React from "react";
import p3 from "../assests/p3.svg";
import p5 from "../assests/p5.svg";
import p6 from "../assests/p6.svg";
import p7 from "../assests/p7.svg";
import p8 from "../assests/p8.svg";
import p9 from "../assests/p9.svg";
import { BsApple, BsArrowRight } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className=" py-4 bg-[#171717] select-none text-white flex justify-center items-center">
        <div className="sm:grid sm:grid-cols-3 flex flex-col-reverse md:px-20 at:w-[87%] md:w-[95%]">
          <div className="flex flex-col my-4 col-span-2 justify-center sm:items-start p-2 ">
            <div className="flex flex-col my-3 space-y-4">
              <div className=" bg-cover">
                <h1 className="at:text-[76px] lg:text-[60px] md:text-[50px] sm:text-[30px] pn:max-sm:text-[24px] pn:max-sm:text-center font-semibold">
                  The place where infinite opportunities lie
                </h1>
              </div>
              <p className="md:w-[70%] sm:w-[80%] my-2 flex justify-center w-full items-center leading-7">
                Unleash boundless opportunities through imagination, creativity,
                and determination. Open your mind, embrace growth, and explore
                new paths beyond physical limits.
              </p>
            </div>
            <div className=" my-5 md:my-7 ">
              <div className="flex flex-col pn:max-sm:space-y-3">
                <button
                  className="flex justify-center items-center bg-white text-black px-4 p-2 rounded-full sm:rounded-2xl m-2"
                  aria-label="links-download"
                >
                  <div className="text-3xl pn:max-sm:ml-3 mx-2">
                    <BsApple />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-lg font-semibold text-[#4f4e4e]">
                      Coming soon on App Store
                    </div>
                  </div>
                </button>

                <button
                  className="flex justify-center items-center bg-white text-black px-4 p-2  rounded-full sm:rounded-2xl m-2"
                  aria-label="links-download"
                >
                  <div className="text-3xl pn:max-sm:mr-4 mx-2">
                    <BiLogoPlayStore />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-lg font-semibold">
                      Download on Google Play
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex  flex-col my-4 justify-center items-center md:items-start  w-full ">
            <div className=" py-10 space-y-10">
              <Image src={p3} alt="logo" priority={true} />

              <div className="flex justify-around items-center w-full mb-5 space-x-2 pn:max-sm:my-3">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-2xl font-semibold">1 K</div>
                  <p className="text-xs text-[#929092]">User already</p>
                  <p className="text-xs text-center text-[#929092]">
                    Joined the app
                  </p>
                </div>
                <div className="bg-[#3A3A3A] flex sm:max-lg:justify-around justify-between items-center w-44 md:w-48 p-2 px-3 rounded-full">
                  <div className="flex justify-center w-full items-center">
                    <div className="z-50">
                      <Image src={p8} alt="images" />
                    </div>
                    <div className="z-40 -ml-6">
                      <Image src={p7} alt="images" />
                    </div>
                    <div className="z-30 -ml-6">
                      <Image src={p6} alt="images" />
                    </div>
                    <div className="z-20 -ml-6">
                      <Image src={p5} alt="images" />
                    </div>
                    <div className="z-10 -ml-6">
                      <Image src={p9} alt="images" />
                    </div>
                  </div>

                  <div className="bg-white text-[#171717]  p-3 rounded-full">
                    <BsArrowRight className="text-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
