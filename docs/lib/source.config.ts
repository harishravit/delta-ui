import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineConfig } from "fumadocs-mdx/config";

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
     transformers: [
  ...(rehypeCodeDefaultOptions.transformers ?? []),
  transformerNotationDiff({ matchAlgorithm: "v3" }),
  transformerNotationHighlight({ matchAlgorithm: "v3" }),
],
    },
  },
});