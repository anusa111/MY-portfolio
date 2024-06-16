import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//images...
import logo from "../../../public/assets/logoDark.png";

//react icons..
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import CustomDrawer from "@/antdComponents/CustomDrawer";
import ContactForm from "./ContactForm";

const Header = () => {
  //states..
  const [openNavDrawer, setOpenNavDrawer] = useState(false);
  const [openContactDrawer, setOpenContactDrawer] = useState(false);

  //functions...
  const showNavDrawer = () => {
    setOpenNavDrawer(true);
  };

  const onCloseNavDrawer = () => {
    setOpenNavDrawer(false);
  };

  const showContactDrawer = () => {
    setOpenContactDrawer(true);
  };

  const onCloseContactDrawer = () => {
    setOpenContactDrawer(false);
  };

  const header_menu = [
    {
      menu: "Home",
      link: "/",
    },
    {
      menu: "About",
      link: "/about",
    },

    {
      menu: "Services",
      link: "/services",
    },
    {
      menu: "Projects",
      link: "/projects",
    },
    {
      menu: "Blogs",
      link: "/blog",
    },
  ];

  return (
    <div className=" fixed   z-50 w-full px-2">
      <div className="layout lg:px-0 px-6 lg:pl-6 lg:mt-[20px] drop-shadow-md  mt-[15px] rounded-full bg-[#141C27] ">
        <div className="lg:py-[0px] py-[20px]">
          <div className="grid lg:grid-cols-12 grid-cols-2 lg:gap-10 ">
            <Link href="/" className=" lg:col-span-3 ">
              <div className="flex lg:items-center w-fit  h-full">
                <div
                  style={{
                    color: "#02050A",
                  }}
                  className="flex items-center justify-center "
                >
                  <Image
                    src={logo}
                    alt="loading"
                    className="lg:h-[60px] lg:w-[60px] w-[40px] h-[40px] object-contain"
                  />
                </div>
              </div>
            </Link>
            <div className="hidden lg:flex lg:col-span-6 justify-center ">
              <div className="flex gap-[40px] text-[16px] font-semibold items-center tracking-[1px]">
                {header_menu.map((menu, index) => {
                  return (
                    <div key={index}>
                      <Link href={menu.link} className="">
                        {menu.menu}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hidden text-[14px] lg:flex  lg:col-span-3 items-center justify-end gap-[32px] font-bold ">
              <div
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "#02050A",
                }}
                className="lg:p-3 hover:cursor-pointer rounded-full m-4"
                onClick={showContactDrawer}
              >
                <AiOutlineMenu size={20} />
              </div>
              <CustomDrawer
                onClose={onCloseContactDrawer}
                open={openContactDrawer}
              >
                <div className="flex flex-col gap-4 text-[16px]">
                  <div>
                    <ContactForm />
                  </div>
                </div>
              </CustomDrawer>
            </div>

            <div
              className="lg:hidden flex items-center justify-end"
              onClick={showNavDrawer}
            >
              <BiMenuAltRight size={25} />
            </div>
          </div>
        </div>
        <CustomDrawer onClose={onCloseNavDrawer} open={openNavDrawer}>
          <div className=" flex flex-col gap-4 text-[16px]">
            {header_menu.map((menu, index) => {
              return (
                <div key={index} className="">
                  <Link href={menu.link} className="">
                    {menu.menu}
                  </Link>
                </div>
              );
            })}
          </div>
        </CustomDrawer>
      </div>
    </div>
  );
};

export default Header;
