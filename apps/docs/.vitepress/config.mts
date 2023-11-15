import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "usehooks-solid",
  description: "A collection of reusable hooks for Solid.js",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Document", link: "/quick-start" },
    ],

    sidebar: [
      {
        text: "Installation",
        link: "/quick-start",
      },
      {
        text: "Hooks",
        items: [{ text: "useBoolean", link: "/hooks/useBoolean" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ChunxuYang/usehooks-solid" },
    ],
  },
});
