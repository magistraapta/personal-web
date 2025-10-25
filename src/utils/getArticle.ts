/*
    Get Markdown files from the markdown folder
*/

export function getArticles() {
    // Scan markdown folder at build time
    const files = import.meta.glob("../markdown/*.md", { eager: true });
  
    const articles = Object.keys(files).map((path) => {
      const match = path.match(/\/markdown\/(.*?)\.md$/);
      const slug = match ? match[1] : "";
      const title = slug
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");
      return { slug, title };
    });
  
    return articles;
  }
  