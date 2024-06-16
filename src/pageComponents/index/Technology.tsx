import React from "react";

//images
import bootstrap from "../../../public/technology/bootstrap.svg";
import github from "../../../public/technology/github.svg";
import javascript from "../../../public/technology/javascript.svg";
import mongodb from "../../../public/technology/mongodb.svg";
import nextjs from "../../../public/technology/nextjs.svg";
import typescript from "../../../public/technology/typescript.svg";
import flutter from "../../../public/technology/flutter.svg";
import react from "../../../public/technology/react.svg";
import docker from "../../../public/technology/docker.svg";
import Image from "next/image";
import GlobalComponentHeader from "../global/GlobalComponentHeader";

const Technology = () => {
  const clients = [
    {
      alt: "bootstrap",
      image: bootstrap,
    },
    {
      alt: "github",
      image: github,
    },

    {
      alt: "javascript",
      image: javascript,
    },
    {
      alt: "mongodb",
      image: mongodb,
    },
    {
      alt: "next",
      image: nextjs,
    },

    {
      alt: "typescript",
      image: typescript,
    },
    {
      alt: "flutter",
      image: flutter,
    },
    {
      alt: "react",
      image: react,
    },

    {
      alt: "docker",
      image: docker,
    },
  ];
  return (
    <div className="layout layout-padding component-padding">
      <div className="grid grid-cols-1 gap-10 lg:gap-10 lg:pt-16 pt-8">
        <GlobalComponentHeader
          small_title="My Skills"
          main_title=<div className="text-center">
            Technology I use<br></br>
            to provide best services
          </div>
          headerStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div className="">
          <div className="  py-8">
            <div className="marquee ">
              <div className="marquee-inner flex lg:gap-2 gap-8  h-full items-center justify-center">
                {clients.map((image, index) => (
                  <span key={index + clients.length} className="clients">
                    <Image
                      key={index + clients.length}
                      alt={image.alt}
                      src={image.image}
                      className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px]"
                    />
                  </span>
                ))}
                {clients.map((image, index) => (
                  <span key={index + clients.length} className="clients">
                    <Image
                      key={index + clients.length}
                      alt={image.alt}
                      src={image.image}
                      className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px]"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
