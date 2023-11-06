import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import ServiceList from "@/pageComponents/service/serviceList";
import React from "react";

const Service = () => {
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="Service" />
      <div className="pt-[120px]">
        <ServiceList />
      </div>
    </Layout>
  );
};

export default Service;
