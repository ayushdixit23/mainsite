"use client";
import Image from "next/image";
import React, { useState } from "react";
import p11 from "../assests/p11.svg";
import p12 from "../assests/p12.svg";
import p13 from "../assests/p13.svg";

const Chat = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className=" flex justify-center select-none items-center w-full">
        <div className="bg-[#F0F2FF] md:grid flex flex-col justify-center  md:grid-cols-3 w-full py-5 md:py-10 px-2">
          <div className="flex flex-col my-4 items-center w-full">
            <div className="text-3xl text-center font-semibold py-2">
              Why to choose Grovyo?
            </div>
            <div className="flex flex-col items-center space-y-3 w-full my-[3%]">
              <div
                onClick={() => setCount(1)}
                className="flex justify-between min-w-[330px] cursor-pointer md:max-lg:w-[350px] lg:w-[400px]  sm:max-md:w-[600px] max-w-[500px] items-center p-1 px-3 rounded-3xl shadow-md bg-white"
              >
                <div className="flex justify-center space-x-2 items-center">
                  <div>
                    <Image src={p11} alt="chat" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold">Shreya Singh</div>
                    <div className="text-sm font-medium">Awesome</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                  <div className="bg-[#0075FF] text-sm text-white w-5 h-5  p-2 font-semibold flex justify-center items-center rounded-full">
                    1
                  </div>
                  <div className="text-sm font-medium">10 hours ago</div>
                </div>
              </div>
              <div
                onClick={() => setCount(2)}
                className="flex justify-between min-w-[330px] cursor-pointer md:max-lg:w-[350px] lg:w-[400px] sm:max-md:w-[600px] max-w-[500px] items-center p-1 px-3 rounded-3xl shadow-md bg-white"
              >
                <div className="flex justify-center space-x-2 items-center">
                  <div>
                    <Image src={p13} alt="chat" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold">Aishwarya Das</div>
                    <div className="text-sm font-medium">Awesome</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                  <div className="bg-[#0075FF] text-sm text-white w-5 h-5  p-2 font-semibold flex justify-center items-center rounded-full">
                    1
                  </div>
                  <div className="text-sm font-medium">10 hours ago</div>
                </div>
              </div>
              <div
                onClick={() => setCount(3)}
                className="flex justify-between min-w-[330px] cursor-pointer md:max-lg:w-[350px] lg:w-[400px]  sm:max-md:w-[600px] max-w-[500px] items-center p-1 px-3 rounded-3xl shadow-md bg-white"
              >
                <div className="flex justify-center space-x-2 items-center">
                  <div>
                    <Image src={p12} alt="chat" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold">Akash Lal</div>
                    <div className="text-sm font-medium">Awesome</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                  <div className="bg-[#0075FF] text-sm text-white p-2  w-5 h-5 font-semibold flex justify-center items-center rounded-full">
                    1
                  </div>
                  <div className="text-sm font-medium">10 hours ago</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              count === 1 ? "col-span-2 my-4 md:w-[65%] " : "hidden"
            }`}
          >
            <div className="flex flex-col px-4">
              <div className="flex items-center space-x-2 rounded-t-3xl p-2 px-4 shadow-md bg-white">
                <div>
                  <Image src={p11} alt="chat" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Shreya Singh</div>
                  <div className="text-[15px] font-medium">Online</div>
                </div>
              </div>
              <div className="bg-back  bg-cover h-[500px] rounded-b-3xl overflow-y-scroll no-scrollbar my-[3px] shadow-md px-[2%]">
                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p11} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">Hello</div>
                </div>

                <div className="flex flex-row-reverse space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p11} alt="chat" />
                  </div>
                  <div className="bg-[#5585FF] text-white p-3 rounded-2xl">
                    Hello there i am using grovyo
                  </div>
                </div>

                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p11} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">
                    nice to hear this i am also using grovyo
                  </div>
                </div>

                <div className="flex flex-row-reverse space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p11} alt="chat" />
                  </div>
                  <div className="bg-[#5585FF] text-white p-3 rounded-2xl">
                    Hello there i am using grovyo
                  </div>
                </div>

                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p11} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">
                    nice to hear this i am also using grovyo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              count === 2 ? "col-span-2 my-4 md:w-[85%] " : "hidden"
            }`}
          >
            <div className="flex flex-col px-4">
              <div className="flex items-center space-x-2 rounded-t-3xl p-2 px-4 shadow-md bg-white">
                <div>
                  <Image loading="lazy" src={p13} alt="chat" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Aishwaraya Das</div>
                  <div className="text-[15px] font-medium">Online</div>
                </div>
              </div>
              <div className="bg-back bg-cover  h-[500px] rounded-b-3xl overflow-y-scroll no-scrollbar my-[3px] shadow-md px-[2%]">
                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p13} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">Hello</div>
                </div>

                <div className="flex flex-row-reverse space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p13} alt="chat" />
                  </div>
                  <div className="bg-[#5585FF] text-white p-3 rounded-2xl">
                    Hello there i am using grovyo
                  </div>
                </div>

                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p13} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">
                    nice to hear this i am also using grovyo
                  </div>
                </div>

                <div className="flex flex-row-reverse space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p13} alt="chat" />
                  </div>
                  <div className="bg-[#5585FF] text-white p-3 rounded-2xl">
                    Hello there i am using grovyo
                  </div>
                </div>

                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p13} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">
                    nice to hear this i am also using grovyo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              count === 3 ? "col-span-2 my-4 md:w-[85%] " : "hidden"
            }`}
          >
            <div className="flex flex-col px-4">
              <div className="flex items-center space-x-2 rounded-t-3xl p-2 px-4 shadow-md bg-white">
                <div>
                  <Image loading="lazy" src={p12} alt="chat" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Akash Lal</div>
                  <div className="text-[15px] font-medium">Online</div>
                </div>
              </div>
              <div className="bg-back bg-cover  h-[500px] rounded-b-3xl overflow-y-scroll no-scrollbar my-[3px] shadow-md px-[2%]">
                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p12} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">Hello</div>
                </div>

                <div className="flex flex-row-reverse space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p12} alt="chat" />
                  </div>
                  <div className="bg-[#5585FF] text-white p-3 rounded-2xl">
                    Hello there i am using grovyo
                  </div>
                </div>

                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p12} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">
                    nice to hear this i am also using grovyo
                  </div>
                </div>

                <div className="flex flex-row-reverse space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p12} alt="chat" />
                  </div>
                  <div className="bg-[#5585FF] text-white p-3 rounded-2xl">
                    Hello there i am using grovyo
                  </div>
                </div>

                <div className="flex space-x-2 items-center py-1">
                  <div>
                    <Image loading="lazy" src={p12} alt="chat" />
                  </div>
                  <div className="bg-[#F1F1F1] p-3 rounded-2xl">
                    nice to hear this i am also using grovyo
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

export default Chat;
