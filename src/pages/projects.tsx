import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import PortfolioProjects from "@/pageComponents/skill/portfolioProjects";

const AllProjectsPage = () => {
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="All Projects" />
      <div className="pt-[120px]">
        <PortfolioProjects />
      </div>
    </Layout>
  );
};

export default AllProjectsPage;
