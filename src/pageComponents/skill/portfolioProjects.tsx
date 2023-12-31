import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

//images....
import dynotechglobal from "../../../public/portfolio/dynotechglobal.png";
import panifilter from "../../../public/portfolio/panifilterImage.png";
import kistabandi from "../../../public/portfolio/Kistabandi.png";
import chibihr from "../../../public/portfolio/Chibihr.png";
import mahadeals from "../../../public/portfolio/mahadeals.png";
import chatchamber from "../../../public/portfolio/chatchamber.png";

import Image from "next/image";
import Link from "next/link";

const PortfolioProjects = () => {
  const projectList = [
    {
      mainProject: [
        {
          img: dynotechglobal,
          project_name: "DynoTech Global",
          intro: "Company",
          link: "https://dynotechglobal.com/",
        },
        {
          img: panifilter,
          project_name: "Panifilter",
          intro: "Company",
          link: "https://www.panifilter.com/",
        },
      ],
      secondaryProject: [
        {
          img: kistabandi,
          project_name: "Kistabandi",
          intro: "Company",
          link: "https://www.kistabandi.com/",
        },
        {
          img: chibihr,
          project_name: "Chibi HR",
          intro: "Company",
          link: "https://www.chibihr.com/",
        },
        {
          img: chatchamber,
          project_name: "Chat Chamber",
          intro: "personal",
          link: "https://chatchamber.netlify.app/",
        },
        {
          img: mahadeals,
          project_name: "MAHA Deals",
          intro: "Company",
          link: "https://maha.deals/",
        },
      ],
    },
  ];

  return (
    <div className="layout layout-padding component-padding">
      <div className="flex flex-col gap-20">
        <GlobalComponentHeader
          small_title="MY RECENT PORTFOLIO"
          main_title=<div>
            Introducing my Innovative Projects <br></br>
            for your Inspiration
          </div>
        />
        <div className="grid grid-cols-1">
          {projectList.map((data, index) => {
            return (
              <div key={index} className="flex flex-col gap-10">
                <div className={` grid lg:grid-cols-12 grid-cols-1 gap-10`}>
                  {data.mainProject.map((data, index) => {
                    return (
                      <Link
                        href={data.link}
                        key={index}
                        className={`${
                          index == 0 ? "lg:col-span-8 " : "lg:col-span-4"
                        } relative `}
                        target="_blank"
                      >
                        <Image
                          src={data.img}
                          alt="loading"
                          className="w-full lg:h-[550px] h-[350px] object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="text-white flex items-center  pl-10  bg-gradient-to-t from-[#09101A]  absolute bottom-0 w-full lg:h-[30vh] h-[35vh]">
                          <div className="text-[25px] font-bold pt-[120px]">
                            {" "}
                            {data.project_name}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 ">
                  {data.secondaryProject.map((data, index) => {
                    return (
                      <Link
                        href={data.link}
                        key={index}
                        className="col-span-4 relative group overflow-hidden"
                        target="_blank"
                      >
                        <Image
                          src={data.img}
                          alt="loading"
                          className="w-full h-[350px] transform transition duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="text-white flex items-center  pl-10  bg-gradient-to-t from-[#09101A]  absolute bottom-0 w-full lg:h-[30vh] h-[35vh]">
                          <div className="text-[25px] font-bold pt-[120px]">
                            {" "}
                            {data.project_name}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
