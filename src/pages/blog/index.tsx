import Link from "next/link";

//Blog Imports

import { getBlogPosts } from "@/utils/getBlogPosts";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

import Layout from "@/pageComponents/global/Layout";
import Metatag from "@/pageComponents/global/Metatag";

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

      <div className="layout layout-padding  lg:py-[180px] py-[180px] flex flex-col gap-10">
        <div className="flex flex-col lg:gap-10 gap-10">
          <div className="text-[24px] font-bold color-changer">
            Recent Blogs
          </div>
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
                      className=" h-[200px] w-[400px] object-cover  3xl:object-cover transform transition duration-[700ms] ease-in-out group-hover:scale-110"
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
          activeClassName="bg-[#6990c7] px-4 py-1 text-white rounded-lg"
        />
      </div>
    </Layout>
  );
};

export default BlogMainPage;
