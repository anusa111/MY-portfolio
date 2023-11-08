import CustomAntdButton from "@/antdComponents/CustomAntdButton";
import { useRef, useState } from "react";
import Image from "next/image";

//react images...
import client from "../../../public/about/client.png";
import project from "../../../public/about/project.png";

//email js
import emailjs from "@emailjs/browser";
import ContactForm from "../global/ContactForm";

const AboutProject = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [inputStatus, setInputStatus] = useState(false);

  //form ref data....
  const form: any = useRef();
  const viewer: any = useRef("");
  const email: any = useRef("");
  const phoneNumber: any = useRef("");
  const message: any = useRef("");

  const inputData = [
    {
      placeholder: "Your Name",
      ref: viewer,
      type: "text",
      name: "from_name",
    },
    {
      placeholder: "Email",
      ref: email,
      type: "email",
      name: "email",
    },
    {
      placeholder: "Phone Number",
      ref: phoneNumber,
      type: "tel",
      name: "phone_number",
    },
    {
      placeholder: "Message",
      ref: message,
      type: "text",
      name: "message",
    },
  ];

  const form_data_receiver = () => {
    console.log(
      viewer.current.value,
      email.current.value,
      phoneNumber.current.value,
      message.current.value
    );

    if (
      viewer.current.value == "" ||
      email.current.value == "" ||
      phoneNumber.current.value == "" ||
      message.current.value
    ) {
      setInputStatus(true);
    } else {
      emailjs
        .sendForm(
          "service_9d3p3nt",
          "template_amzkkwm",
          form.current,
          "z9KncFZbO0ubVf5yf"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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

  //phone number validations
  const handlephonenumberInput = (event: any) => {
    const input = event.target;
    const inputValue = input.value;
    const numericValue = inputValue.replace(/[^0-9\s+\-()]/g, "");
    input.value = numericValue;
  };

  return (
    <div className="layout layout-padding component-padding">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between lg:gap-[80px] gap-[40px]">
        <div className="flex flex-col gap-[40px] ">
          <div className="lg:leading-[80px] flex flex-col lg:gap-[10px] ">
            <div className="lg:text-[120px] text-[40px] font-semibold">
              Graced{" "}
              <span className="lg:text-[55px] text-[25px] font-semibold">
                and
              </span>
            </div>

            <div className="lg:text-[55px] text-[25px]  font-semibold flex items-center">
              <div className="lg:translate-y-0 translate-y-[5px]">
                Milestones
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
