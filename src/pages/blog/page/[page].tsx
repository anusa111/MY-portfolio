import { getBlogPosts } from "@/utils/getBlogPosts";
import BlogMainPage from "..";

export async function getStaticPaths() {
  const { totalPages } = getBlogPosts(1);

  const paths = Array.from({ length: totalPages }).map((_, i) => {
    return {
      params: {
        page: (i + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { page } }: { params: any }) {
  const props = getBlogPosts(parseInt(page));

  return {
    props: {
      ...props,
      activePage: parseInt(page),
    },
  };
}

const NewsByPage = (props: any) => {
  return <>{props && <BlogMainPage {...props} />}</>;
};

export default NewsByPage;
