import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

const SkillEducation = () => {
  const skill_list = [
    {
      date: "2014-2016",
      title: "Javascript Developer",
      desc: "I am a javascript developer. My role is to design and build the user interface of websites and web applications, making them visually appealing",
    },
    {
      date: "2017-2018",
      title: "React Developer",
      desc: "I am a react developer. My role is to design and build the user interface of websites and web applications, making them visually appealing",
    },
    {
      date: "2018-2020",
      title: "NextJs Developer",
      desc: "I am a nextjs developer. My role is to design and build the user interface of websites and web applications, making them visually appealing",
    },
    {
      date: "2020-present",
      title: "Full Stack Developer",
      desc: "I am a fullstack developer. My role is to design and build the user interface of websites and web applications, making them visually appealing",
    },
  ];

  return (
    <div className="layout layout-padding component-padding">
      {" "}
      <div className="flex flex-col items-center  gap-[120px]">
        <GlobalComponentHeader
          small_title="EDUCATION & SKILL"
          main_title=<div className="text-center w-full ">
            Showcasing Skills & Education<br></br>
            for Maximum Impact
          </div>
          headerStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div className="grid lg:grid-cols-2 grid-col-1 gap-20">
          {skill_list.map((data, index) => {
            return (
              <div key={index} className="flex flex-col gap-[25px]">
                <div
                  style={{
                    border: "1px solid var(--primary-color)",
                  }}
                  className="flex items-center justify-center w-fit px-8 py-4 rounded-[6px]"
                >
                  <div>{data.date}</div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="lg:text-[36px] text-[25px] font-semibold">
                    {data.title}
                  </div>
                  <div
                    style={{
                      color: "var(--white-shade)",
                    }}
                  >
                    {data.desc}
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

export default SkillEducation;
