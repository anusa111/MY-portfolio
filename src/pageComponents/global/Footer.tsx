import React from "react";
import Link from "next/link";

//react images..
import chibihrLogo from "../../../public/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  const footerMenu = [
    {
      title: "Pages",
      menu: [
        {
          menu: "Home",
          link: "/",
        },
        {
          menu: "About",
          link: "/about",
        },

        {
          menu: "Projects",
          link: "/projects",
        },
      ],
    },
    {
      title: "Resources",
      menu: [
        {
          menu: "Services",
          link: "/services",
        },
        {
          menu: "About Me",
          link: "/about",
        },
      ],
    },
    {
      title: "Follow Me",
      menu: [
        {
          menu: "LinkedIn",
          link: "https://www.linkedin.com/feed/",
        },
        {
          menu: "Instagram",
          link: "https://www.instagram.com/",
        },
        {
          menu: "Facebook",
          link: "https://www.facebook.com/",
        },
      ],
    },
  ];

  const footer = [
    {
      menu: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      menu: "Terms of Service",
      link: "/terms-of-service",
    },
    // {
    //   menu: "Cookie Policy",
    //   link: "#",
    // },
  ];

  return (
    <div className="bg-[#02050A]">
      <div className="layout layout-padding component-padding">
        <div className="flex flex-col gap-[40px]">
          <div className="grid lg:grid-cols-9 grid-col-1 lg:gap-[140px] gap-[40px]">
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-[32px] lg:translate-y-[-30px]">
                <Image
                  src={chibihrLogo}
                  alt="loading"
                  // height={34}
                  // width={145}
                  className="lg:h-[120px] lg:w-[120px] w-[80px] h-[80px] object-contain"
                />
                <div className="text-[16px] text-[#596780]">
                  I thrive on solving complex technical challenges and
                  transforming ideas into user-friendly websites and
                  applications. {"Let's"} work together to bring your digital
                  projects to life.
                </div>
              </div>
            </div>
            <div className=" lg:col-span-6 grid lg:grid-cols-3 grid-cols-2 gap-[20px]">
              {footerMenu.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col gap-[32px]">
                      <div className="text-[20px] font-bold">{data.title}</div>
                      <div className="flex flex-col gap-[24px]">
                        {data.menu.map((data, index) => {
                          return (
                            <div key={index}>
                              <Link href={data.link} className="text-[16px]">
                                {data.menu}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              borderColor: "var(--white-shade)",
            }}
            className="border-t-[1px]  pt-[20px] text-[16px]"
          >
            <div className="flex lg:flex-row flex-col justify-center lg:items-center gap-[20px]">
              <div>© Anusa Khadka 2023 | All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
