import fs from "fs";
import matter from "gray-matter";

export const getBlogPosts = (page: number) => {
  const files = fs.readdirSync("src/blog-articles");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`src/blog-articles/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return { slug, frontmatter };
  });

  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  const totalPosts = posts.slice(page === 1 ? 0 : (page - 1) * 5, page * 5);
  // const totalPosts = posts.slice(page === 1 ? 0 : (page - 1) * 2, page * 2);

  const totalPages = Math.ceil(posts.length / 5);
  // const totalPages = Math.ceil(posts.length / 2);

  return {
    totalPosts,
    totalPages,
  };
};
