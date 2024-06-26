import Link from "next/link";

//Blog Imports

import { getBlogPosts } from "@/utils/getBlogPosts";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";
import GlobalComponentHeader from "@/pageComponents/global/GlobalComponentHeader";

export async function getStaticProps() {
  const props = getBlogPosts(1);

  return {
    props,
  };
}

const BlogMainPage = ({ totalPosts, totalPages, activePage = 1 }: any) => {
  const router = useRouter();
  return (
    <Layout>
      <Metatag title="Anusa" sub_title="Blog" />
      <div className="py-[120px]">
        <div className="layout layout-padding component-padding flex flex-col gap-10">
          <div className="flex flex-col gap-20">
            <GlobalComponentHeader
              small_title="MY RECENT BlOGS"
              main_title=<div>
                Innovative Blogging <br></br>
                for Creative Inspiration
              </div>
            />
            <div className="grid lg:grid-cols-3  lg:gap-[30px] gap-10">
              {(totalPosts ?? []).map(({ slug, frontmatter }: any) => (
                <div key={slug} className="">
                  <div className="flex flex-col lg:gap-10 gap-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="group overflow-hidden rounded-[8px]"
                    >
                      <img
                        src={frontmatter.banner}
                        alt="blog-image"
                        className=" h-[200px] w-[400px] object-cover rounded-[8px]  3xl:object-cover transform transition duration-[700ms] ease-in-out group-hover:scale-110"
                      />
                    </Link>
                    <div className="flex flex-col lg:gap-8 gap-2">
                      <Link
                        href={`/blog/${slug}`}
                        className="lg:text-xl color-changer font-semibold hover:text-primary"
                      >
                        {frontmatter.title}
                      </Link>
                      <div className="flex items-center gap-4">
                        <img
                          src={frontmatter.userprofile}
                          alt="blog-image"
                          className="h-[6vh] w-[6vh] rounded-full object-cover"
                        />

                        <div className="font-medium text-[18px] color-changer">
                          {frontmatter.author}
                        </div>
                        <div className="flex gap-2 items-center text-[#7e7d7d]">
                          <time>
                            {Intl.DateTimeFormat("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }).format(new Date(frontmatter.date))}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ReactPaginate
            className="flex gap-2 items-center justify-end mt-12 dark:text-white"
            breakLabel="..."
            nextLabel="Next 🠖"
            onPageChange={({ selected }) => {
              if (activePage !== selected + 1) {
                router.push(`/blog/page/${selected + 1}`);
              }
            }}
            pageRangeDisplayed={5}
            initialPage={activePage - 1}
            pageCount={totalPages}
            previousLabel="🠔 Previous"
            renderOnZeroPageCount={null}
            activeClassName="bg-[#55E6A5] px-4 py-1 text-[#1e1e1e] rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogMainPage;
