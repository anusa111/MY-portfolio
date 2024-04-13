import CustomAntdButton from "@/antdComponents/CustomAntdButton";
import GlobalButton from "@/pageComponents/global/GlobalButton";
import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import Link from "next/link";
import React, { useState } from "react";

const Thankyou = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <Layout>
      <Metatag title="Anusa" sub_title="Thankyou" />
      <div className="pt-[100px]">
        <div className="layout layout-padding component-padding ">
          <div className="flex flex-col gap-[20px] items-center text-center justify-center h-[50vh] ">
            <div className="lg:text-[44.8px] text-[40px] ">
              Thankyou for messaging me !
            </div>
            <div className="  text-center lg:text-[24px] text-[20px]">
              <div className=" ">Your message has been received</div>
              <div className=" ">I will get back to you seen.</div>
            </div>

            <Link href="/">
              <CustomAntdButton
                loadingBtn={loadingBtn}
                onClick={() => {
                  setLoadingBtn(true);
                  setTimeout(() => {
                    setLoadingBtn(false);
                  }, 1000);
                }}
                btnStyles={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--black-color)",
                  height: "50px",
                }}
                link="/"
              >
                Explore More
              </CustomAntdButton>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thankyou;
