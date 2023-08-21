// import Link from "next/link";
// import React from "react";
// import { LuSearch } from "react-icons/lu";
// import { AiOutlineMenu } from "react-icons/ai";

// const Header = () => {
//   const Navbar = [
//     {
//       name: "Earn with us",
//       link: "/earn",
//     },
//     {
//       name: "Promotion",
//       link: "/promotion",
//     },
//     {
//       name: "Blogs",
//       link: "/blogs",
//     },
//     {
//       name: "Contact Us",
//       link: "/Contact",
//     },
//   ];
//   return (
//     <>
//       <div className="flex justify-center items-center  text-white bg-[#171717]">
//         <div className="flex justify-between md:justify-around at:w-[85%] items-center w-full p-3">
//           <h1 className="text-2xl font-medium md:bg-[#1E1E1E] font-fugaz text-white p-2 px-4 rounded-full">
//             Grovyo
//           </h1>
//           <div className="pn:max-md:hidden">
//             <ul className="flex justify-center items-center">
//               {Navbar.map((data) => (
//                 <>
//                   <li className="p-2 sm:mx-1 md:mx-2 font-medium">
//                     <Link href={data.link}>{data.name}</Link>
//                   </li>
//                 </>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <a
//               aria-label="workspace-link"
//               href={"https://workspace.grovyo.com/"}
//             >
//               <button className="bg-blue-600 pn:max-md:hidden text-white md:text-lg  text-center font-semibold p-2 px-5 rounded-full">
//                 Login to Workspace
//               </button>
//             </a>
//           </div>

//           <div className="flex justify-center items-center md:hidden">
//             <div className="bg-white text-black p-2 rounded-full">
//               <LuSearch />
//             </div>
//             <AiOutlineMenu className="text-2xl mx-2" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;



"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header({ fugaz }) {
  const [menu, setMenu] = useState(false);
  const [d, setD] = useState(false);

  const navItems = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact us",
      path: "/contact",
    },
    // {
    //   label: "Earn with us",
    //   path: "/main/earn",
    // },
    // {
    //   label: "Promotion",
    //   path: "/main/promotion",
    // },
    // {
    //   label: "Blog",
    //   path: "/main/blog",
    // },
  ];
  const menuItems = [
    {
      label: "Privacy Policy",
      path: "/privacy",
    },
    {
      label: "Cancellation and Refund",
      path: "/cancellation",
    },
    {
      label: "Terms & Condition",
      path: "/terms",
    },
    {
      label: "Shipping and Delivery",
      path: "/shipping",
    },
  ];

  const mobileitems = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact us",
      path: "/contact",
    },
    {
      label: "Privacy Policy",
      path: "/privacy",
    },
    {
      label: "Cancellation and Refund",
      path: "/cancellation",
    },
    {
      label: "Terms & Condition",
      path: "/terms",
    },
    {
      label: "Shipping and Delivery",
      path: "/shipping",
    },
  ];

  return (
    <>
      <div className="h-20 w-full select-none bg-[#171717] items-center pn:max-sm:px-5 px-10 flex text-white justify-between">
        <div>
          <Link className="text-2xl font-fugaz" href={"/"}>Grovyo</Link>
        </div>
        <nav className="">
          <ul className="flex justify-between pn:max-sm:hidden">
            {navItems.map((item, index) => (
              <li key={index} className={``}>
                <div className={`  `}></div>
                <div className="flex items-center">
                  <Link aria-label="items" href={item.path}>
                    <div
                      className={`p-4 sm:max-md:p-2
                      "font-bold" 
                    `}
                    >
                      {item.label}
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pn:max-sm:hidden items-center space-x-3">
          <a aria-label="workspace-link" href={"https://workspace.grovyo.com/"}>
            <button className="bg-blue-600 pn:max-sm:hidden text-white md:text-lg  text-center font-semibold p-2 px-5 rounded-full">
              Login to Workspace
            </button>
          </a>
          <div>
            <BsThreeDotsVertical
              onClick={() => setD(!d)}
              className="text-2xl pn:max-sm:hidden cursor-pointer"
            />
            <div
              className={`${
                d
                  ? "absolute rounded-2xl shadow-xl z-30 p-2 duration-75 top-[75px] right-[2px]"
                  : " hidden"
              }`}
            >
              <div
                className={`${
                  d
                    ? "h-5 w-5 z-20 bg-white absolute -top-[2px] right-10 rotate-45"
                    : "hidden"
                }`}
              ></div>
              <ul className="flex flex-col justify-between rounded-2xl p-3 space-y-3 pn:max-sm:hidden bg-white text-black">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex flex-col hover:bg-slate-200 rounded-xl p-3 font-medium items-center  duration-150  `}
                  >
                    <div className="flex items-center">
                      <Link aria-label="items" href={item.path}>
                        <div
                          className={`
                      font-medium
                    `}
                        >
                          {item.label}
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div onClick={() => setMenu(!menu)} className="text-xl sm:hidden">
          {menu ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </div>
      </div>

      <div
        className={` absolute  z-[100] text-black bg-white w-[100%] h-[100%] md:hidden py-1 text-xl font-bold duration-500
       ${menu ? "left-0" : "left-[-100%]"}`}
      >
        <div className="flex flex-col font-medium my-3 justify-center items-center">
          {mobileitems.map((data, index) => (
            <div key={index} className="py-5 border-b-2 w-full text-center">
              <Link aria-label="menu" onClick={() => setMenu(!menu)} href={data.path}>
                {data.label}
              </Link>
            </div>
          ))}
        </div>
        <a aria-label="wrokspace-grovyo"
          href={"https://workspace.grovyo.com/"}
          className="flex justify-center items-center w-full"
        >
          <button className="bg-blue-600 sm:hidden text-white md:text-lg my-5 w-[90%] text-center font-semibold p-2 px-5 rounded-full">
            Login to Workspace
          </button>
        </a>
      </div>
    </>
  );
}

export default Header;
