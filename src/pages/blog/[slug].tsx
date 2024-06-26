import Layout from "@/pageComponents/global/Layout";
import { getBlogPosts } from "@/utils/getBlogPosts";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IoArrowBackSharp } from "react-icons/io5";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export async function getStaticPaths() {
  const files = fs.readdirSync("src/blog-articles");
  const paths = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: any }) {
  const readFile = fs.readFileSync(`src/blog-articles/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(readFile);
  const relatedBlogPost = getBlogPosts(1);

  return {
    props: {
      frontmatter,
      content,
      relatedBlogPost,
      slug,
    },
  };
}

const BlogContentPage = ({
  frontmatter,
  content,
  relatedBlogPost,
  slug,
}: {
  frontmatter: any;
  content: any;
  relatedBlogPost: any;
  slug: any;
}) => {
  const [url, setURL] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setURL(window.location.href);
    }
  }, [slug]);
  return (
    <Layout>
      <Head>
        <title>{`${frontmatter.title}-ChibiHR`}</title>
        <meta property="og:image" content={frontmatter.banner} />
      </Head>
      <div className="py-[120px]">
        <div className="layout layout-padding component-padding">
          <div className="">
            <div className="flex flex-col gap-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col justify-between gap-4">
                  <header className="text-center ">
                    <h1 className="font-semibold    lg:text-4xl text-2xl max-w-5xl text-primary">
                      {frontmatter.title}
                    </h1>
                    <div className="flex items-center text-[#666666] justify-center gap-2 text-sm my-6">
                      <time>
                        {Intl.DateTimeFormat("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }).format(new Date(frontmatter.date))}
                      </time>
                      <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                      <div>{frontmatter.duration} read</div>
                    </div>
                    <img
                      src={frontmatter.banner}
                      alt="image"
                      width={540}
                      height={540}
                      className="w-full lg:h-[500px] lg:p-0 p-4 object-contain  mb-6"
                    />
                  </header>
                  <div
                    className="blog max-w-4xl mx-auto "
                    style={{
                      color: "var(--white-shade)",
                    }}
                    dangerouslySetInnerHTML={{ __html: md().render(content) }}
                  />
                </div>
              </div>
              <div className="max-w-4xl mx-auto   w-full">
                <div className="flex gap-4 items-center ">
                  <div className="flex items-center gap-4">
                    <img
                      src={frontmatter.userprofile}
                      alt="blog-image"
                      className="h-[8vh] w-[8vh] rounded-full object-cover"
                    />
                    <div className="flex flex-col text-white">
                      <div className="font-medium text-[18px]">
                        {frontmatter.author}
                      </div>
                      <div className="text-[14px]">{frontmatter.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout  pb-20 flex flex-col lg:gap-10 gap-10">
          <div className="text-[26px] font-bold color-changer heading-right">
            Related Blogs
          </div>
          <div className="grid lg:grid-cols-3  lg:gap-[80px] gap-10">
            {(relatedBlogPost?.totalPosts ?? [])
              .filter((post: any) => post.slug !== slug)
              .map(({ slug, frontmatter }: any) => (
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
        <div className=" fixed top-[50%] left-0">
          <div>
            <FacebookShareButton url={url}>
              <button className="cursor-pointer   animate-bounce hover:animate-none">
                <FacebookIcon
                  className="rounded-[4px]"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
              </button>
            </FacebookShareButton>
          </div>
          <div>
            <WhatsappShareButton url={url}>
              <button className="cursor-pointer   animate-bounce hover:animate-none">
                <WhatsappIcon
                  className="rounded-[4px]"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
              </button>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogContentPage;
