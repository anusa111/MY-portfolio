import React from "react";
import GlobalComponentHeader from "../global/GlobalComponentHeader";
import Image from "next/image";

//react multi carousel...
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//react icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

//react images...
import image1 from "../../../public/assets/image1.jpg";
import image2 from "../../../public/assets/image2.jpg";

const Testimonial = () => {
  const testimonial = [
    {
      title: "It's just incredible!",
      description:
        "ChibiHR has not only simplified our HR processes but also allowed us to be more proactive in our employee engagement initiatives",
      name: "John Anderson",
      position: "Product Manager at TechSpark Solutions",
      image: image1,
    },
    {
      title: "Satisfied User Here!",
      description:
        "ChibiHR has been a fantastic addition to our HR toolbox. We've seen a noticeable improvement in efficiency, and it's been a tremendous asset as our company has grown.",
      name: "Lisa Carter",
      position: "Streamline Innovations",
      image: image2,
    },
    {
      title: "No doubt, Spend.In is the best!",
      description:
        "ChibiHR has made a world of difference in our HR operations. Its simplicity and automation have saved us time and reduced errors.",
      name: "Sarah Mitchel",
      position: "HR Manager at ProSolutions Inc.",
      image: image1,
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
            items-center w-full absolute bottom-[-90px] "
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
      <div className="flex flex-col gap-20">
        <div className="flex items-center justify-center text-center">
          <GlobalComponentHeader
            small_title="CLIENT REVIEW"
            main_title="My testimonial"
          />
        </div>

        {/* react carousel */}

        <div className="relative  mb-20 ">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            pauseOnHover={true}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            className="relative"
            renderButtonGroupOutside={true}
          >
            {testimonial.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mx-[16px] relative "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  <div
                    style={{
                      borderColor: "var(--primary-color)",
                    }}
                    className="border-[1px] h-[250px] p-8 rounded-[8px] "
                  >
                    <div className=" flex flex-col gap-[15px]">
                      <div className="text-[18px]">{data.title}</div>
                      <div className="text-[16px] h-[100px] ">
                        {data.description}
                      </div>
                      <div className="text-[22px]">{data.name}</div>
                    </div>
                  </div>
                  {/* <div className="carousel-button-group   gap-4 w-full absolute top-[-50px] ">
                    <Image
                      src={image1}
                      alt="loading"
                      className="rounded-full "
                    />
                  </div> */}
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
