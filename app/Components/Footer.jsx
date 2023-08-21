// import React from "react";
// import {
//   BsTwitter,
//   BsInstagram,
//   BsFacebook,
//   BsYoutube,
//   BsApple,
// } from "react-icons/bs";
// import { FaGooglePlay, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-black text-white flex justify-center items-center px-[4%]">
//         <div className="flex flex-wrap my-4">
//           <div className="w-[25%] my-3">
//             <div>
//               Grovyo is one of India's largest social commerce app that provides
//               a one-stop platform for students to learn new skills, network with
//               peers, and grow as an individual.
//             </div>
//             <div className="flex my-3 items-center space-x-4">
//               <div className="bg-white text-xl rounded-full text-black p-2">
//                 <BsTwitter />
//               </div>
//               <div className="bg-white text-xl rounded-full text-black p-2">
//                 <BsInstagram />
//               </div>
//               <div className="bg-white text-xl rounded-full text-black p-2">
//                 <FaLinkedinIn />
//               </div>
//               <div className="bg-white text-xl rounded-full text-black p-2">
//                 <BsYoutube />
//               </div>
//               <div className="bg-white text-xl rounded-full text-black p-2">
//                 <BsFacebook />
//               </div>
//             </div>
//           </div>
//           <div className="w-[25%] flex items-center flex-col my-3">
//             <h1 className="text-2xl font-semibold pb-2">Company</h1>
//             <div className="flex justify-center items-center flex-col ">
//               <div>About us</div>
//               <div className="py-2">Privacy policy</div>
//               <div>Terms & conditions</div>
//             </div>
//           </div>
//           <div className="w-[25%] flex justify-center items-center flex-col my-3">
//             <h1 className="text-2xl font-semibold">Quick Links</h1>
//             <div className="flex flex-col justify-center items-center ">
//               <div className="pb-1">Hire talent</div>
//               <div className="pb-1">Find work</div>
//               <div className="pb-1">Community</div>
//               <div className="pb-1">Events</div>
//               <div className="pb-1">Blog</div>
//             </div>
//           </div>
//           <div className="w-[25%] flex flex-col my-3">
//             <h1 className="text-xl font-semibold ">DOWNLOAD THE APP</h1>
//             <div>
//               <button className="flex justify-center items-center p-3 font-semibold space-x-2 my-2 rounded-full bg-white text-black">
//                 <FaGooglePlay className="ml-2" />
//                 <p>Download on Google Play</p>
//               </button>
//             </div>
//             <div>
//               <button className="flex justify-center items-center p-3 font-semibold space-x-2 my-2 px-5 rounded-full bg-white text-black">
//                 <BsApple />
//                 <p>Download on App Store</p>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
// import Instagram from "../assest/insta.png";
// import Youtube from "../assest/youtube.png";
// import Facebook from "../assest/facebook.png";
// import Twitter from "../assest/twitter.png";
import { FaLinkedinIn } from "react-icons/fa";
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsApple,
} from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import Link from "next/link";

function Footer() {
  return (
    <div className="px-[2%] select-none pn:max-sm:px-4 py-[9%] justify-around sm:max-md:text-xl flex space-x-3 md:max-lg:space-x-1 pn:max-md:flex-col bg-[#1c1a1c] text-white">
      <div>
        <div className="sm:max-md:text-xl text-[18px]">
          Join us on this captivating journey and discover a
          <br className="pn:max-md:hidden" />
          community where every scroll reveals a new canvas of
          <br className="pn:max-md:hidden" />
          possibility. Unleash your inner visionary with Grovyo.
        </div>
        <div className="flex space-x-2 pt-4">
          <div className="bg-white text-xl rounded-full text-black p-2">
            <BsTwitter />
          </div>
          {/* <Image src={Facebook} alt="facebook" width={30} height={30} />
          <Image src={Twitter} alt="Twitter" width={30} height={30} />
          <Image src={Youtube} alt="Youtube" width={30} height={30} /> */}
          <a
            aria-label="linkedin"
            href="https://www.linkedin.com/company/grovyo"
          >
            <div className="bg-white text-xl rounded-full text-black p-2">
              <FaLinkedinIn />
            </div>
          </a>

          <div className="bg-white text-xl rounded-full text-black p-2">
            <BsInstagram />
          </div>
          <div className="bg-white text-xl rounded-full text-black p-2">
            <BsYoutube />
          </div>
          <div className="bg-white text-xl rounded-full text-black p-2">
            <BsFacebook />
          </div>

          {/* <Image src={Instagram} alt="Instagram" width={30} height={30} /> */}
        </div>
      </div>
      <div className=" space-y-2 flex flex-col">
        <div className="font-bold text-[20px] py-[3%]">Company</div>

        <Link aria-label="about" href={"/about"}>
          About Us
        </Link>
        <Link aria-label="privacy" href={"/privacy"}>
          Privacy & Policy
        </Link>
        <Link aria-label="terms" href={"/terms"}>
          Terms & Conditions
        </Link>
      </div>
      {/* <div>
        <div className="font-bold text-[20px] py-[3%]">QuickLinks</div>
        <div>Hiretalent </div>
        <div>Findwork</div>
        <div>Community</div>
        <div>Events</div>
        <div>Blog</div>
      </div> */}
      <div className="">
        <div className="flex flex-col">
          <div className="font-bold text-[20px] py-[3%] px-[4%] text-center">
            Download the App
          </div>
          <div className="items-center md:px-2 justify-center flex mt-1  bg-white text-black space-x-2 py-2 rounded-[15px]">
            {/* <Image src={Apple} alt="apple" width={25} height={25} /> */}
            <BsApple className="text-2xl" />

            <div>
              <div className="pn:max-sm:text-[14px] md:max-lg:text-[13px] sm:max-md:text-xl">
                Coming Soon on Appstore
              </div>
            </div>
          </div>
          <div className=" items-center md:px-2 mt-4 flex justify-center bg-white text-black space-x-2 py-2 rounded-[15px]">
            <BiLogoPlayStore className="text-3xl" />

            <div>
              <a
                aria-label="playstore"
                href="https://play.google.com/store/apps/details?id=com.grovyomain"
                className="pn:max-sm:text-[14px] md:max-lg:text-[13px] sm:max-md:text-xl"
              >
                Download on Google play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
