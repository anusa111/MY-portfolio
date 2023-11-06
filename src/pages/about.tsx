import AboutMe from "@/pageComponents/about/aboutMe";
import AboutProject from "@/pageComponents/about/aboutProject";
import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import React from "react";

const About = () => {
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="About Me" />
      <div className="pt-[120px]">
        <AboutMe />
        <AboutProject />
      </div>
    </Layout>
  );
};

export default About;
