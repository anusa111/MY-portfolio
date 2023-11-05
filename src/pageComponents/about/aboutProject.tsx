import CustomAntdButton from "@/antdComponents/CustomAntdButton";
import { useRef, useState } from "react";
import Image from "next/image";

//react images...
import client from "../../../public/about/client.png";
import project from "../../../public/about/project.png";

const AboutProject = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);

  //form ref data....
  const viewer: any = useRef("");
  const email: any = useRef("");
  const phoneNumber: any = useRef("");
  const message: any = useRef("");

  const inputData = [
    {
      placeholder: "Your Name",
      ref: viewer,
      type: "text",
    },
    {
      placeholder: "Email",
      ref: email,
      type: "email",
    },
    {
      placeholder: "Phone Number",
      ref: phoneNumber,
      type: "number",
    },
    {
      placeholder: "Message",
      ref: message,
      type: "text",
    },
  ];

  const form_data_receiver = () => {
    console.log(
      viewer.current.value,
      email.current.value,
      phoneNumber.current.value,
      message.current.value
    );
    viewer.current.value = " ";
    email.current.value = " ";
    phoneNumber.current.value = " ";
    message.current.value = " ";
  };

  const positiveFeature = [
    {
      img: client,
      title: "60+",
      desc: "Complete project",
    },
    {
      img: project,
      title: "100+",
      desc: "Client review",
    },
  ];

  return (
    <div className="layout layout-padding component-padding">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between lg:gap-[80px] gap-[40px]">
        <div className="flex flex-col gap-[40px] ">
          <div className="lg:leading-[80px] flex lg:flex-col gap-[10px]">
            <div className="lg:text-[120px] text-[40px] font-semibold">
              Design{" "}
              <span className="lg:text-[55px] text-[25px] font-semibold">
                and
              </span>
            </div>

            <div className="lg:text-[55px] text-[25px]  font-semibold flex items-center">
              <div className="lg:translate-y-0 translate-y-[5px]">
                Achievement
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2  gap-[20px]">
            {positiveFeature.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#141C27] rounded-[8px] p-6 flex flex-col gap-[20px] text-center items-center justify-center"
                >
                  <Image
                    src={data.img}
                    alt="loading"
                    className="h-[60px] w-[60px]"
                  />
                  <div className="flex flex-col gap-[4px]">
                    <div className="lg:text-[40px] text-[25px] font-bold">
                      {data.title}
                    </div>
                    <div className="text-[18px]">{data.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" bg-[#141C27] rounded-[8px] p-8 flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[40px]">GET IN TOUCH</div>
            <div
              style={{
                color: "var(--white-shade)",
              }}
            >
              Please take a moment to fill out the form below and {"I'll"}{" "}
              contact you soon!
            </div>
          </div>
          <div className="">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form_data_receiver();
              }}
              className=" flex flex-col gap-[40px]"
            >
              <div className="flex flex-col gap-[40px]">
                {inputData.map((data, index) => {
                  return (
                    <div key={index}>
                      <input
                        type={data.type}
                        placeholder={data.placeholder}
                        ref={data.ref}
                        style={{
                          borderColor: "var(--primary-color)",
                        }}
                        className="bg-[#141C27] px-6 py-4 border-[#55E6A5] w-full  border-[1px] outline-none"
                      ></input>
                    </div>
                  );
                })}
              </div>
              <CustomAntdButton
                loadingBtn={loadingBtn}
                onClick={() => {
                  setLoadingBtn(true);
                  setTimeout(() => {
                    setLoadingBtn(false);
                  }, 1000);
                }}
                btnStyles={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--black-color)",
                  height: "50px",
                }}
              >
                Submit Now
              </CustomAntdButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
