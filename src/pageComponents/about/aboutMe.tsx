import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

//react images...
import Image from "next/image";
import anusa from "../../../public/index/anusa.jpg";

const AboutMe = () => {
  return (
    <div className="layout layout-padding component-padding">
      <div className="grid lg:grid-cols-2 grid-cols-1  justify-between lg:gap-[120px] gap-[40px]">
        <div>
          <div className="flex flex-col gap-[24px]">
            <GlobalComponentHeader
              small_title="ABOUT ME"
              main_title=<div>
                Elevating technology for <br></br>
                Lasting Impressions
              </div>
            />
            <div className="flex items-start gap-4">
              <div
                style={{
                  color: "var(--white-shade)",
                }}
                className="leading-7"
              >
                My passion for clean code and intuitive design stems from my
                belief that technology should simplify, not complicate.{" "}
                {"I've "}always sought to bridge the gap between intricate
                concepts and user-friendly interfaces.
                <br />
                <br />
                My approach to development {"isn't"} just about creating
                functional websites; {"it's"} about crafting digital experiences
                that leave a lasting impact. As we collaborate, I look forward
                to not only meeting your technical needs but also exceeding your
                expectations for user engagement.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end layout-padding">
          <div
            style={{
              backgroundColor: "var(--primary-color)",
            }}
            className="relative p-8 lg:w-[60%] w-full h-[380px] rounded-[4px]"
          >
            <div className=" top-[20px] right-[20px] left-[-30px] absolute h-[300px] ">
              <Image
                src={anusa}
                alt="loading"
                className="lg:h-[400px] lg:w-[600px] h-[380px] object-cover rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
