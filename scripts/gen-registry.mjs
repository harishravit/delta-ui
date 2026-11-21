import fs from "node:fs";
import path from "node:path";

const root = "src/components/comment";
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.posix.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return /\.(ts|tsx)$/.test(e.name) ? [full] : [];
  });
}

const files = walk(root).map((p) => ({
  path: p,
  type: "registry:component",
  target: p.replace("src/components/", "components/"),
}));

fs.writeFileSync(
  "registry.json",
  JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: "delta-ui",
      homepage: "http://localhost:3000",
      items: [
        {
          name: "comment",
          type: "registry:component",
          files,
          cssVars: {
      light: {
        "--comment-avatar-border": "0.125rem",
        "--comment-avatar-size": "calc(2.5rem - var(--comment-avatar-border))",
        "--comment-reply-avatar-size": "calc(var(--comment-avatar-size) / 1.25)",
        "--comment-footer-avatar-size": "calc(var(--comment-avatar-size) / 2)",
        "--comment-avatar-top-padding": "0.5rem",
        "--comment-side-padding-right": "0.75rem",
        "--comment-thread-line-stroke": "0.125rem",
        "--comment-thread-vertical-gap":
          "calc((var(--comment-side-padding-right) / 2) + var(--comment-avatar-border))",
        "--comment-thread-bend-gap":
          "calc((var(--comment-side-padding-right) / 2) + var(--comment-avatar-border) - (var(--comment-thread-line-stroke) * 2))",
        "--comment-thread-vertical-row": "calc(var(--comment-avatar-size) / 2)",
        "--comment-thread-bend-row":
          "calc(var(--comment-avatar-size) + var(--comment-thread-bend-gap) - var(--comment-side-padding-right))",
        "--comment-thread-bend-center":
          "calc((var(--comment-avatar-size) / 2) + (var(--comment-avatar-top-padding) + var(--comment-avatar-border)))",
      },
    },
    css: {
      '[data-slot="comment-reply-render"]': {
        "--comment-avatar-size": "var(--comment-reply-avatar-size)",
        "--comment-thread-bend-center":
          "calc((var(--comment-reply-avatar-size) / 2) + var(--comment-avatar-top-padding) + var(--comment-avatar-border))",
        "--comment-thread-vertical-row": "calc(var(--comment-reply-avatar-size) / 2)",
      },
    },
        },
      ],
    },
    null,
    2
  )
);

console.log(`${files.length} files added`);