import React from "react";

//react images...
import Image from "next/image";
import anusa from "../../../public/index/anusa.jpg";

import GlobalButton from "../global/GlobalButton";

//react icons
import { LiaDownloadSolid } from "react-icons/lia";

//resume

const IndexBanner = () => {
  return (
    <div className="lg:pt-[180px] pt-[140px] layout layout-padding">
      <div className="grid lg:grid-cols-12 grid-cols-1 justify-between lg:gap-[20px] gap-[40px]">
        <div className="lg:col-span-8 flex flex-col gap-[20px]">
          <div className="lg:text-[60px] text-[28px] font-bold leading-1">
            <div> HI, I{"'M"} ANUSA !</div>
            <div
              style={{
                color: "var(--primary-color)",
              }}
            >
              FULL STACK DEVELOPER
            </div>
          </div>
          <div
            style={{
              color: "var(--white-shade)",
            }}
            className="leading-7 w-[85%]"
          >
            I{"'m"} a versatile full-stack developer skilled in both front-end
            and back-end development. With a strong foundation in design
            principles and a keen eye for detail, I specialize in translating
            complex ideas into user-friendly interfaces that captivate and
            engage.
          </div>
          <div>
            <GlobalButton
              buttonStyle={{
                backgroundColor: "var(--primary-color)",
                borderRadius: "4px",
                color: "var(--black-color)",
                fontSize: "16px",
              }}
              title="Download CV"
              icon={<LiaDownloadSolid />}
              link="/documents/anusa.pdf"
            />
          </div>
        </div>
        <div className="lg:col-span-4 flex lg:items-center lg:justify-end">
          <div className="hexagon  animated-element lg:h-[400px]  lg:w-[800px]">
            <Image
              src={anusa}
              alt="anusa"
              priority={true}
              className="object-cover  h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexBanner;
