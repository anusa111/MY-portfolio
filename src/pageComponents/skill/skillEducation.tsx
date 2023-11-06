import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

const SkillEducation = () => {
  const skill_list = [
    {
      date: "2014-2016",
      title: "Javascript Developer",
      desc: "This period of my career allowed me to enhance my expertise in JavaScript and front-end development, laying a strong foundation for my subsequent projects and roles in the field.",
    },
    {
      date: "2017-2018",
      title: "React Developer",
      desc: "As a react developer,I worked across teams, designed client-side solutions, and prioritized performance & user experience.Staying updated on industry trends, this period marked significant professional growth, laying the foundation for future work.",
    },
    {
      date: "2018-2020",
      title: "NextJs Developer",
      desc: "Recognizing the growing importance of SEO, I transitioned into the field while working as a React js Developer from 2017 to 2018. This strategic move allowed me to enrich my skill set, leveraging my background in Next.js.",
    },
    {
      date: "2020-present",
      title: "Full Stack Developer",
      desc: "While working as a Next.js Developer, I felt a strong urge to expand my skill set. This led me to explore full-stack development, including backend and APIs. I'm still venturing further in this field, driven by my passion for learning and growth.",
    },
  ];

  return (
    <div className="layout layout-padding component-padding">
      {" "}
      <div className="flex flex-col items-center  gap-[120px]">
        <GlobalComponentHeader
          small_title="EDUCATION & SKILL"
          main_title=<div className="text-center w-full ">
            {/* Showcasing Skills & Education<br></br>
            for Maximum Impact */}
            {/* Showcasing Proficiencies & Academic Background */}
            Showcasing Expertise in <br />
            Skills & Education
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
