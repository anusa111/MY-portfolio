import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

//react images...
import graphicsDesign from "../../../public/service/graphicsDesign.png";
import seo from "../../../public/service/seo.png";
import webDevelopment from "../../../public/service/webDevelopment.png";
import Image from "next/image";

const ServiceList = () => {
  const service = [
    {
      img: webDevelopment,
      title: "Web Development",
      description:
        "As a web developer, I utilize modern frameworks like React and Next.js, leveraging the power of JavaScript to craft engaging online experiences for a wide audience.",
    },
    {
      img: seo,
      title: "SEO",
      description:
        "I specialize in optimizing websites for optimal SEO performance, guaranteeing they secure high rankings on search engines and captivate an ever-increasing audience of visitors.",
    },
    {
      img: graphicsDesign,
      title: "Graphics Design",
      description:
        "I excel in crafting attention-grabbing graphics that enhance the visual appeal of websites and applications, ultimately making them more engaging and visually appealing to users.",
    },
  ];

  return (
    <div className="layout layout-padding component-padding ">
      <div className="flex flex-col gap-[120px]">
        <GlobalComponentHeader
          small_title="MY SERVICE"
          main_title=<div className="text-center">
            Enhance Online Presence<br></br>
            with my service
          </div>
          headerStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[40px] gap-[80px]">
          {service.map((data, index) => {
            return (
              <div
                key={index}
                className="relative border-[2px] border-[#191919] p-8 flex flex-col gap-[20px] items-center justify-center"
              >
                <div className="absolute top-[-35px] ">
                  <Image
                    src={data.img}
                    alt="image"
                    className="h-[70px] w-[70px]"
                  />
                </div>
                <div className="flex flex-col gap-[20px] items-center justify-center mt-[40px]">
                  <div className="text-[20px] font-medium">{data.title}</div>
                  <div
                    className="text-center text-[16px] leading-7"
                    style={{
                      color: "var(--white-shade)",
                    }}
                  >
                    {data.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
