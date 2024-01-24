export default {
    title: "The title of the docs site goes here",
    description: "An awesome docs template built by me",
    themeConfig: {
      logo: "/star1.svg",
      siteTitle: "A docs build",
      nav: [
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
        { text: "Guide", link: "/guide" },
        { text: "Configs", link: "/configs" },
        { 
          text: "Changelog",
          items: [
            { text: "v0.0.1", link: "/item-1" },
            { text: "v0.0.2", link: "/item-2" },
            { text: "v0.0.3", link: "/item-3" },
          ]
        },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/chaselikethebank" },
        { icon: "twitter", link: "https://twitter.com/veryjazzed" },
        { icon: "discord", link: "", target: "_blank" },
      ],
      sidebar: [
        {
          text: "Section A",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
        {
          text: "Section B",
          collapsible: false,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
        {
          text: "Section C",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
        
      ],
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2024-present cd.t",
      },
    },
  };
  