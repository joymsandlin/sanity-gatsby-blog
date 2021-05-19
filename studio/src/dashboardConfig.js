export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a58d64025cdf1c07e748a0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6phi5mo6",
                  apiId: "9d20cb26-7260-492a-8e1f-4b11152ed0a2",
                },
                {
                  buildHookId: "60a58d65a88a950e0847b5e3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-r77sc3y5",
                  apiId: "6fad1f2d-5670-40a2-85ee-8acde5f0c2c5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/joymsandlin/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-r77sc3y5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
