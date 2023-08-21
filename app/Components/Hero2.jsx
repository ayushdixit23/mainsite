import Image from "next/image";
import React from "react";
import p4 from "../assests/p4.svg";
import p2 from "../assests/p2.svg";
import p1 from "../assests/p1.svg";

const Hero2 = () => {
  return (
    <>
      <div>
        <div className="my-[4%] select-none">
          <h1 className="md:text-4xl text-2xl py-3 px-2 font-semibold text-center">
            Thinks you can do with Grovyo
          </h1>
          <div className="flex pn:max-md:items-center pn:max-md:flex-col pn:max-md:space-y-7 md:space-x-9 justify-center px-[2%] my-[3%] w-full">
            <div className=" rounded-2xl max-w-[500px] w-full flex flex-col items-center py-3 bg-[#FFF7E3]">
              <div className="text-xl font-semibold text-center py-2 px-2">
                Build and Boost Your{" "}
                <span className="text-[#FFBC65]">Community</span>
              </div>
              <div className="flex justify-center items-center w-[80%] mt-8">
                <Image loading="lazy" src={p4} alt="imageGrovyo" />
              </div>
              <div className="text-[#656464] px-8 pt-8 flex items-center justify-center">
                Grovyo empowers you to build and boost your own community of
                like-minded individuals. Connect with people who share your
                interests, values, and passions. Create a dedicated space where
                you can engage, share ideas, and grow together.
              </div>
            </div>
            <div className=" rounded-2xl p-2.5 max-w-[500px] w-full flex flex-col items-center bg-[#F5F1FD]">
              <div className="text-xl font-semibold py-2 text-center">
                <span className="text-[#646ECB]">Sell</span> and{" "}
                <span className="text-[#646ECB]">buy</span> effortlessly
              </div>
              <div className="flex justify-center md:max-lg:my-5 items-center w-[80%] mt-8">
                <Image loading="lazy"
                  src={p1}
                  alt="imageGrovyo"
                  className="w-[400px] lg:w-[580px]"
                />
              </div>
              <div className="text-[#656464] px-8 pt-8 flex items-center justify-center">
                With Grovyo integrated e-commerce functionality, you can easily
                set up your online store and start selling your products to your
                community members. Showcase your unique offerings and reach a
                wider audience - all within the platform.
              </div>
            </div>
            <div className=" rounded-2xl p-2.5 max-w-[500px] w-full flex flex-col bg-[#F0F2FF]">
              <div className="text-xl font-semibold py-2 text-center">
                Customize Your <span className="text-[#7045FF]">Prosite</span>
              </div>
              <div className="flex justify-center items-center w-full">
                <Image loading="lazy"
                  src={p2}
                  alt="imageGrovyo"
                  className="w-[250px] lg:w-[300px]"
                />
              </div>
              <div className="text-[#4d4d4d] px-8 pt-8 flex items-center justify-center">
                Grovyo provides you with powerful customization tools to make
                your website truly reflect your brand. Tailor the look and feel
                of your pages to match your unique style. Stand out from the
                crowd and create a memorable online presence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
