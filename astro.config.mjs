import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://chrsnv.ru",
    output: "server",
    adapter: node({
        mode: "standalone"
    }),
    integrations: [
        mdx(),
        sitemap(),
        solidJs(),
        tailwind({applyBaseStyles: false}),
    ],
});
