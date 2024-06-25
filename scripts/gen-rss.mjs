import { promises as fs } from "fs";
import path from "path";
import RSS from "rss";
import matter from "gray-matter";
const __dirname = path.resolve();

async function generate() {
  const feed = new RSS({
    title: "Your Name",
    site_url: "https://codepsy2001.blog",
    feed_url: "https://codepsy2001.blog/feed.xml",
  });

  const postsPath = path.join(__dirname, "pages", "posts");
  const posts = await fs.readdir(postsPath);

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.")) return;

      const content = await fs.readFile(path.join(postsPath, name));
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: "/posts/" + name.replace(/\.mdx?/, ""),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(", "),
        author: frontmatter.data.author,
      });
    }),
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate().then();
