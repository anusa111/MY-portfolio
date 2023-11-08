import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";
import Image from "next/image";

//react multi carousel...
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//react icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

//react images...
import pratik from "../../../public/assets/pratik.webp";
import samuel from "../../../public/assets/samuel.webp";

const Testimonial = () => {
  const testimonial = [
    {
      description:
        "I had the pleasure of working with Anusa on a development project, and I couldn't be more impressed with their expertise and professionalism. She is a brilliant full stack developer who demonstrated an exceptional ability to turn ideas into functional, user-friendly solutions",
      name: "John Anderson",
      position: "Doctype Manager ",
      image: pratik,
    },
    {
      description:
        "I highly recommend Anusa to anyone seeking a top-notch full stack developer who can transform concepts into reality. Their work is a testament to their skill and commitment to excellence.",
      name: "Samuel Anderson",
      position: "Intrepid Travel Manager",
      image: samuel,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group   gap-4 flex justify-center
            items-center w-full absolute lg:bottom-[-90px] "
      >
        <button
          style={{
            backgroundColor: "var(--primary-color)",
          }}
          className="block p-3 text-black rounded-[50%]"
          onClick={() => previous()}
        >
          <div>
            <AiOutlineArrowLeft />
          </div>
        </button>
        <button
          onClick={() => next()}
          style={{
            backgroundColor: "var(--primary-color)",
          }}
          className="block p-3  text-black rounded-[50%]"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    );
  };

  return (
    <div className="layout layout-padding component-padding">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center text-center">
          <GlobalComponentHeader
            small_title="CLIENT REVIEW"
            main_title="My testimonial"
          />
        </div>

        <div className="relative   mb-20 ">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            pauseOnHover={true}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            className="relative "
            renderButtonGroupOutside={true}
          >
            {testimonial.map((data, index) => {
              return (
                <div
                  key={index}
                  className="lg:mx-[16px] lg:p-8    my-8 relative "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  <div
                    style={{
                      borderColor: "var(--primary-color)",
                    }}
                    className="border-[1px] p-6 lg:p-10 rounded-[8px] "
                  >
                    <div className=" flex flex-col gap-[15px] mt-8">
                      <div className="text-[16px] lg:h-[140px] ">
                        {data.description}
                      </div>
                      <div>
                        <div className="text-[22px]">{data.name}</div>
                        <div
                          style={{
                            color: "var(--primary-color)",
                          }}
                          className="text-[16px]"
                        >
                          {data.position}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="  gap-4  absolute lg:top-[-20px] top-[-25px] lg:right-24  right-10">
                    <Image
                      src={data.image}
                      alt="loading"
                      className="rounded-full h-[60px] w-[60px] lg:h-[100px] lg:w-[100px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
