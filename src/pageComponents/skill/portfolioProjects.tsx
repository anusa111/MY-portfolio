import GlobalComponentHeader from "../global/GlobalComponentHeader";

import { projectList } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsEyeglasses } from "react-icons/bs";
import GlobalButton from "../global/GlobalButton";

const PortfolioProjects = () => {
  const router = useRouter();
  const { pathname } = router;
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
          {projectList?.map((data, index) => {
            return (
              <div key={index} className="flex flex-col gap-10">
                <div className={` grid lg:grid-cols-12 grid-cols-1 gap-10 `}>
                  {data.mainProject.map((data, index) => {
                    return (
                      <Link
                        href={data.link}
                        key={index}
                        className={`${
                          index == 0 ? "lg:col-span-8 " : "lg:col-span-4"
                        } relative  overflow-hidden`}
                        target="_blank"
                      >
                        <div className="transition-all duration-700 ease-in-out hover:scale-110 overflow-hidden">
                          <Image
                            src={data.img}
                            alt="loading"
                            className="w-full lg:h-[550px] h-[350px] z-50 object-cover transition-all duration-500 ease-in-out hover:scale-110"
                          />
                          <div className="text-white flex items-center pl-10   bg-gradient-to-t from-[#09101A]  absolute bottom-0 w-full lg:h-[30vh] h-[35vh]">
                            <div className="text-[25px] lg:mb-[-80px] font-bold">
                              {" "}
                              {data.project_name}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {pathname == "/projects" ? (
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 ">
                    {data.secondaryProject?.map((data, index) => {
                      return (
                        <Link
                          href={data.link}
                          key={index}
                          className="col-span-4 relative  overflow-hidden"
                          target="_blank"
                        >
                          <div className="transition-all duration-700 ease-in-out hover:scale-110 overflow-hidden">
                            <Image
                              src={data.img}
                              alt="loading"
                              className="w-full h-[350px] transition-all duration-500 hover:scale-110"
                            />
                            <div className="text-white flex items-center  pl-10  bg-gradient-to-t from-[#09101A]  absolute bottom-0 w-full lg:h-[30vh] h-[35vh]">
                              <div className="text-[25px] lg:mb-[-80px] font-bold m-4">
                                {" "}
                                {data.project_name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 ">
                    {data.secondaryProject?.slice(0, 3)?.map((data, index) => {
                      return (
                        <Link
                          href={data.link}
                          key={index}
                          className="col-span-4 relative  overflow-hidden"
                          target="_blank"
                        >
                          <div className="transition-all duration-700 ease-in-out hover:scale-110 overflow-hidden">
                            <Image
                              src={data.img}
                              alt="loading"
                              className="w-full h-[350px] transition-all duration-500 hover:scale-110"
                            />
                            <div className="text-white flex items-center  pl-10  bg-gradient-to-t from-[#09101A]  absolute bottom-0 w-full lg:h-[30vh] h-[35vh]">
                              <div className="text-[25px] lg:mb-[-80px] font-bold m-4">
                                {" "}
                                {data.project_name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {pathname !== "/projects" && (
          <div className="flex items-center justify-center">
            <div>
              <GlobalButton
                buttonStyle={{
                  backgroundColor: "var(--primary-color)",
                  borderRadius: "4px",
                  color: "var(--black-color)",
                  fontSize: "16px",
                }}
                title="View More Projects"
                icon={<BsEyeglasses />}
                link="/all-projects"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioProjects;
