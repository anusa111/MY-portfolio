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
                Transforming visions into <br></br>
                exceptional portfolios
              </div>
            />
            <div className="flex items-start gap-4">
              <div
                style={{
                  color: "var(--white-shade)",
                }}
                className="leading-7"
              >
                I specialize in turning creative concepts into remarkable
                digital portfolios. With a strong focus on design and a passion
                for innovation, I craft visually appealing collections that not
                only display your work but also leave a lasting impact on your
                audience. Let{"'s"} collaborate to bring your ideas to life and
                develop a portfolio that tells your unique story.
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
