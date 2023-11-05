import Head from "next/head";
import React from "react";

//react images...
import ogImage from "../../../public/assets/ogImage.png";

interface IMetatagProps {
  title: string;
  sub_title: string;
}

const Metatag = ({ title, sub_title }: IMetatagProps) => {
  return (
    <Head>
      <title>{`${title}-${sub_title}`}</title>
      <meta property="og:image" content="" />
    </Head>
  );
};

export default Metatag;
