import React, { useState, useRef } from "react";
//email js
import emailjs from "@emailjs/browser";
import CustomAntdButton from "@/antdComponents/CustomAntdButton";

const ContactForm = () => {
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
  const form_data_receiver = async () => {
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
      message.current.value == ""
    ) {
      setInputStatus(true);
      console.log("anusa");
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
            window.location.href = "/thankyou";

            viewer.current.value == " ";
            email.current.value == " ";
            phoneNumber.current.value == " ";
            message.current.value == " ";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  //phone number validations
  const handlephonenumberInput = (event: any) => {
    const input = event.target;
    const inputValue = input.value;
    const numericValue = inputValue.replace(/[^0-9\s+\-()]/g, "");
    input.value = numericValue;
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-[10px]">
        <div className="text-[40px]">GET IN TOUCH</div>
        <div
          style={{
            color: "var(--white-shade)",
          }}
        >
          Please take a moment to fill out the form below and {"I'll"} contact
          you soon!
        </div>
      </div>
      <div className="">
        <form
          ref={form}
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
                      borderColor: "var(--white-shade)",
                    }}
                    name={data.name}
                    onChange={() => {
                      setInputStatus(false);
                    }}
                    autoComplete="off"
                    onInput={index === 2 ? handlephonenumberInput : undefined}
                    className="bg-[#141C27] px-6 py-4 border-[#55E6A5] w-full  border-[1px] outline-none"
                  ></input>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-[15px]">
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
            {inputStatus && (
              <div className="text-red-600 text-[14px]">
                PLease fill out the above field
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
