import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import PortfolioProjects from "@/pageComponents/skill/portfolioProjects";
import SkillEducation from "@/pageComponents/skill/skillEducation";
import React from "react";

const Projects = () => {
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="Service" />
      <div className="pt-[120px]">
        <SkillEducation />
        <PortfolioProjects />
      </div>
    </Layout>
  );
};

export default Projects;
