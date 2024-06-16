//images
import Image from "next/image";
import anusa from "../../../public/index/anusakhadka.png";
import GlobalComponentHeader from "../global/GlobalComponentHeader";
const PowerfulMessage = () => {
  return (
    <div className="layout layout-padding">
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
                {` As a passionate developer, I know how daunting it can be to meet conventional standards of success. But there's an alternative path.
                Through comprehensive development, I've unlocked the potential of leveraging advanced technologies and creating distinct solutions. Allow me to lead you on this innovative journey.If you're facing difficulties with intricate web and app development tasks, it's time to harness effective, bespoke development. Together, we'll devise solutions that reflect your aspirations, elevate your digital footprint, and make a meaningful impact.

               
                    `}
              </div>
              <div>
                {`
                     Let's create a digital platform that delivers satisfaction, purpose, and enables clients to reach their objectives effortlessly. Contact me today, and let's start this thrilling journey together.
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
