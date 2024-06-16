//images
import Image from "next/image";
import anusa from "../../../public/index/anusakhadka.png";
import GlobalComponentHeader from "../global/GlobalComponentHeader";
const PowerfulMessage = () => {
  return (
    <div className="layout layout-padding component-padding">
      <div className="flex flex-col gap-[120px]">
        <div className="grid lg:grid-cols-8 gap-20">
          <div className="lg:col-span-5 flex flex-col gap-[24px]">
            <div>
              <GlobalComponentHeader
                small_title="HEY THERE"
                main_title=<div>
                  {`I'm `} Anusa, the developer <br></br>
                  behind your success.
                </div>
              />
            </div>
            <div
              className="text-[16px] leading-[26px] flex flex-col gap-10"
              style={{
                color: "var(--white-shade)",
              }}
            >
              <div>
                {` 
As a passionate developer, I understand how challenging it can be to meet traditional success standards. But there's another way. By using advanced technologies, I've learned to create unique solutions. Let me guide you on this innovative journey.

If you're struggling with complex web and app development tasks, it's time to explore custom development. Together, we'll create solutions that align with your goals, enhance your digital presence, and make a real impact.

               
                    `}
              </div>
              <div>
                {`
                     Let's build a digital platform that brings satisfaction, purpose, and helps clients achieve their objectives effortlessly. Contact me today, and let's begin this exciting journey together.
                    `}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-[#141C27]  rounded-tr-[200px] ">
            <Image
              src={anusa}
              alt="loading"
              className="h-[60vh] object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulMessage;
