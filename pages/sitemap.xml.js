import * as fs from "fs";

const Sitemap = () => {
  return null;
};

export default Sitemap;

export const getServerSideProps = async ({ req, res }) => {
  let arr = (req.headers.referer || "https://alirezazahiri.vercel.app").split("/");
  const BASE_URL = `${arr[0]}//${arr[2]}`;
  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "404.tsx",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.split(".tsx")[0]}`;
    });

  const allPaths = [...staticPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: { },
  };
};
