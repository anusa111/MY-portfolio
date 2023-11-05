import AboutMe from "@/pageComponents/about/aboutMe";
import AboutProject from "@/pageComponents/about/aboutProject";
import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import IndexBanner from "@/pageComponents/index/indexBanner";
import ServiceList from "@/pageComponents/service/serviceList";
import PortfolioProjects from "@/pageComponents/skill/portfolioProjects";
import SkillEducation from "@/pageComponents/skill/skillEducation";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="Portfolio" />
      <IndexBanner />
      <ServiceList />
      <AboutMe />
      <AboutProject />
      <SkillEducation />
      <PortfolioProjects />
    </Layout>
  );
};

export default index;
