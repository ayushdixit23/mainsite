"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assests/Icon.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Question = () => {
  const [drop, setDrop] = useState(
    { d1: false },
    { d2: false },
    { d3: false },
    { d4: false },
    { d5: false },
  );
  return (
    <>
      <div className="flex flex-col select-none justify-center my-6 items-center">
        <div className=" flex flex-col items-center justify-center">
          <div className="my-3 items-center">
            <Image src={logo} alt="logo" className="w-12 md:w-20" />
          </div>
          <div className="md:text-sm text-xs">
            <span className="text-[#FEC90C]">//</span> FAQ
          </div>
          <div className="md:text-3xl my-3 text-center text-2xl font-medium">
            Frequently Asked Questions
          </div>
        </div>

        <div className="flex flex-col  items-center md:w-[60%] w-[90%] justify-center my-3">
          <div
            onClick={() => setDrop({ d1: !drop.d1 })}
            className={`border-2 font-medium rounded-[14px] my-[6px] px-3 hover:bg-[#0075FF] active::bg-[#0075FF] hover:text-white py-4 pn:max-md:text-sm p-1 md:p-3  w-full  flex justify-between items-center ${
              drop.d1 ? "bg-[#0075FF] text-white" : ""
            } `}
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div>What is Grovyo?</div>

                <button
                  aria-label="question"
                  onClick={() => setDrop({ d1: !drop.d1 })}
                >
                  {drop.d1 ? (
                    <AiOutlineClose className="bg-[#515151] text-2xl p-1 rounded-full" />
                  ) : (
                    <AiOutlinePlus className="text-2xl text-[#515151] bg-[#f1f1f1] p-1 rounded-full" />
                  )}
                </button>
              </div>
              <div
                className={`duration-500 py-[5px] md:py-2 ${
                  drop.d1 ? "w-full " : " hidden"
                }`}
              >
                Grovyo is a cutting-edge Social Commerce App that seamlessly
                blends the worlds of social media and e-commerce.
              </div>
            </div>
          </div>

          <div
            onClick={() => setDrop({ d2: !drop.d2 })}
            className={`border-2 font-medium rounded-[14px] my-[6px] px-3 hover:bg-[#0075FF] active::bg-[#0075FF] hover:text-white py-4 pn:max-md:text-sm p-1 md:p-3  w-full  flex justify-between items-center ${
              drop.d2 ? "bg-[#0075FF] text-white" : ""
            } `}
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div>How do I get started with Grovyo?</div>

                <button
                  aria-label="question"
                  onClick={() => setDrop({ d2: !drop.d2 })}
                >
                  {drop.d2 ? (
                    <AiOutlineClose className="bg-[#515151] text-2xl p-1 rounded-full" />
                  ) : (
                    <AiOutlinePlus className="text-2xl text-[#515151] bg-[#f1f1f1] p-1 rounded-full" />
                  )}
                </button>
              </div>
              <div
                className={`duration-500 py-[5px] md:py-2 ${
                  drop.d2 ? "w-full " : " hidden"
                }`}
              >
                Getting started with Grovyo is simple just download the Grovyo
                app from your device's app store. Sign up using your phone
                number & Set up your profile, interests, and preferences.
              </div>
            </div>
          </div>
          <div
            onClick={() => setDrop({ d3: !drop.d3 })}
            className={`border-2 font-medium rounded-[14px] my-[6px] px-3 hover:bg-[#0075FF] active::bg-[#0075FF] hover:text-white py-4 pn:max-md:text-sm p-1 md:p-3  w-full  flex justify-between items-center ${
              drop.d3 ? "bg-[#0075FF] text-white" : ""
            } `}
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div>Is my payment information secure on Grovyo?</div>

                <button
                  aria-label="question"
                  onClick={() => setDrop({ d3: !drop.d3 })}
                >
                  {drop.d3 ? (
                    <AiOutlineClose className="bg-[#515151] text-2xl p-1 rounded-full" />
                  ) : (
                    <AiOutlinePlus className="text-2xl text-[#515151] bg-[#f1f1f1] p-1 rounded-full" />
                  )}
                </button>
              </div>
              <div
                className={`duration-500 py-[5px] md:py-2 ${
                  drop.d3 ? "w-full " : " hidden"
                }`}
              >
                Absolutely, your security is our top priority. Grovyo employs
                advanced encryption and secure payment gateways to protect your
                payment information.
              </div>
            </div>
          </div>
          <div
            onClick={() => setDrop({ d4: !drop.d4 })}
            className={`border-2 font-medium rounded-[14px] my-[6px] px-3 hover:bg-[#0075FF] active::bg-[#0075FF] hover:text-white py-4 pn:max-md:text-sm p-1 md:p-3  w-full  flex justify-between items-center ${
              drop.d4 ? "bg-[#0075FF] text-white" : ""
            } `}
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div>
                  How can I increase my visibility and followers on Grovyo?
                </div>

                <button
                  aria-label="question"
                  onClick={() => setDrop({ d4: !drop.d4 })}
                >
                  {drop.d4 ? (
                    <AiOutlineClose className="bg-[#515151] text-2xl p-1 rounded-full" />
                  ) : (
                    <AiOutlinePlus className="text-2xl text-[#515151] bg-[#f1f1f1] p-1 rounded-full" />
                  )}
                </button>
              </div>
              <div
                className={`duration-500 py-[5px] md:py-2 ${
                  drop.d4 ? "w-full " : " hidden"
                }`}
              >
                Create engaging posts with high-quality images and compelling
                descriptions.
              </div>
            </div>
          </div>
          <div
            onClick={() => setDrop({ d5: !drop.d5 })}
            className={`border-2 font-medium rounded-[14px] my-[6px] px-3 hover:bg-[#0075FF] active::bg-[#0075FF] hover:text-white py-4 pn:max-md:text-sm p-1 md:p-3  w-full  flex justify-between items-center ${
              drop.d5 ? "bg-[#0075FF] text-white" : ""
            } `}
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div>
                  Can I collaborate with other users or influencers on Grovyo?
                </div>

                <button
                  aria-label="question"
                  onClick={() => setDrop({ d5: !drop.d5 })}
                >
                  {drop.d5 ? (
                    <AiOutlineClose className="bg-[#515151] text-2xl p-1 rounded-full" />
                  ) : (
                    <AiOutlinePlus className="text-2xl text-[#515151] bg-[#f1f1f1] p-1 rounded-full" />
                  )}
                </button>
              </div>
              <div
                className={`duration-500 py-[5px] md:py-2 ${
                  drop.d5 ? "w-full " : " hidden"
                }`}
              >
                Grovyo adheres to strict data protection regulations and best
                practices to safeguard your information from unauthorized
                access.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
