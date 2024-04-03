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
        content="https://photos.fife.usercontent.google.com/pw/AP1GczMKOExIx8SJ-Fy0Gb8Gcov8AHVQZDdUa6jRomdqTbUxwHuB4BO_S-qA=w369-h584-s-no-gm?authuser=0&pli=1"
      />
    </Head>
  );
};

export default Metatag;
