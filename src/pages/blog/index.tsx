import Link from "next/link";

//Blog Imports
import Layout from "@/pageComponents/global/Layout";
import { getBlogPosts } from "@/utils/getBlogPosts";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
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
      <div className="layout layout-padding py-[120px]   flex flex-col gap-20 white-color">
        <div className="flex flex-col lg:gap-20 gap-10">
          <div className="text-[24px] font-bold color-changer">
            Recent Blogs
          </div>
          <div className="grid lg:grid-cols-3  lg:gap-[80px] gap-10">
            {(totalPosts ?? []).map(({ slug, frontmatter }: any) => (
              <div key={slug} className="">
                <div className="flex flex-col lg:gap-10 gap-6">
                  <div className="flex flex-col gap-4">
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
                    <div>
                      <div
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "#1e1e1e",
                        }}
                        className=" flex items-center justify-center w-fit rounded-full px-4 py-1"
                      >
                        {frontmatter.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:gap-8 gap-2">
                    <Link
                      href={`/blog/${slug}`}
                      className="lg:text-xl color-changer font-semibold hover:text-primary"
                    >
                      {frontmatter.title}
                    </Link>
                    <div className="flex flex-col  gap-4">
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-2 items-center justify-center w-fit  bg-[#1c2026] rounded-full px-4 py-1">
                          <time>
                            {Intl.DateTimeFormat("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }).format(new Date(frontmatter.date))}
                          </time>
                        </div>
                        <div className="flex gap-2  items-center justify-center w-fit  bg-[#1c2026] rounded-full px-4 py-1">
                          {frontmatter.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {totalPages > 0 && (
          <ReactPaginate
            className="flex gap-2 items-center   justify-end mt-12"
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
        )}
      </div>
    </Layout>
  );
};

export default BlogMainPage;
