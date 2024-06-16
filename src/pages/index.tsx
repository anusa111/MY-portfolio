import AboutMe from "@/pageComponents/about/aboutMe";
import AboutProject from "@/pageComponents/about/aboutProject";
import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import Technology from "@/pageComponents/index/Technology";
import IndexBanner from "@/pageComponents/index/indexBanner";
import ServiceList from "@/pageComponents/service/serviceList";
import PortfolioProjects from "@/pageComponents/skill/portfolioProjects";
import SkillEducation from "@/pageComponents/skill/skillEducation";
import Testimonial from "@/pageComponents/skill/testimonial";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="Khadka" />
      <IndexBanner />
      <Technology />
      <ServiceList />
      <AboutMe />
      <AboutProject />
      <SkillEducation />
      <PortfolioProjects />
      <Testimonial />
    </Layout>
  );
};

export default index;
