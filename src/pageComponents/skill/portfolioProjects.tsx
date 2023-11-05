import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

//images....
import highlightProject from "../../../public/portfolio/highlightProject.jpg";
import highlightProjectSecond from "../../../public/portfolio/highlightProjectSecond.jpg";
import Image from "next/image";
import Link from "next/link";

const PortfolioProjects = () => {
  const projectList = [
    {
      mainProject: [
        {
          img: highlightProject,
          project_name: "DynoTech Global",
          intro: "Company",
          link: "https://dynotechglobal.com/",
        },
        {
          img: highlightProjectSecond,
          project_name: "Panifilter",
          intro: "Company",
          link: "https://www.panifilter.com/",
        },
      ],
      secondaryProject: [
        {
          img: highlightProjectSecond,
          project_name: "Kistabandi",
          intro: "Company",
          link: "https://www.kistabandi.com/",
        },
        {
          img: highlightProjectSecond,
          project_name: "Chibi HR",
          intro: "Company",
          link: "https://www.chibihr.com/",
        },
        {
          img: highlightProjectSecond,
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
            Elevate your brand to new <br></br>
            heights with our portfolio expertise
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
                        } relative group overflow-hidden`}
                        target="_blank"
                      >
                        <Image
                          src={data.img}
                          alt="loading"
                          className="w-full lg:h-[550px] h-[350px] object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="text-white flex items-center  pl-10  bg-gradient-to-t from-[#0c0505]  absolute bottom-0 w-full h-[20vh]">
                          <div className="text-[25px] font-bold">
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
                        <div className="text-white flex items-center  pl-10  bg-gradient-to-t from-[#0c0505]  absolute bottom-0 w-full h-[20vh]">
                          <div className="text-[25px] font-bold">
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
