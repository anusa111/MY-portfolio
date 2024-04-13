import Head from "next/head";
import React from "react";

interface IMetatagProps {
  title: string;
  sub_title: string;
}

const Metatag = ({ title, sub_title }: IMetatagProps) => {
  return (
    <Head>
      <title>{`${title}-${sub_title}`}</title>
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/fir-applications-e96c5.appspot.com/o/my-image.jpg?alt=media&token=3f0ee015-ce28-4b74-b344-a2dfc83dc948"
      />
      <meta
        name="keywords"
        content="Anusa khadka Portfolio Full Stack Developer SoftwareEngineer"
      />

      <meta
        name="description"
        content="I'm a versatile full-stack developer skilled in both front-end and back-end development. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e1e1e"></meta>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="I'm a versatile full-stack developer skilled in both front-end and back-end development. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage."
      />
    </Head>
  );
};

export default Metatag;
