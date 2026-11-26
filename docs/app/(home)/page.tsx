import Comment from "@/example/comment-demo"; // unga real path & name
import ComponentPreview from "@/utils/component-preview";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative isolate flex min-h-0 w-full min-w-0 flex-1 flex-col justify-start overflow-x-hidden">
      {/* Subtle grid that fades toward the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.12)_1px,transparent_1px)] bg-size-[48px_48px] mask-[linear-gradient(to_bottom,black_10%,transparent_95%)]"
      />

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-3 pb-8 pt-8 text-center sm:px-6 sm:pb-12 sm:pt-10 md:pt-16">
        {/* announcement pill
        <Link
          href="/docs"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-500/30 bg-neutral-500/10 px-3 py-1 text-xs font-medium transition-colors hover:bg-neutral-500/20"
        >
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Delta UI is now open source
          <span aria-hidden>›</span>
        </Link> */}

        <h1 className="max-w-4xl text-balance text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.08] tracking-tight md:text-5xl">
          Components for the UI. Hooks for the logic. Freedom for you.
        </h1>

        <p className="mt-4 max-w-xl text-balance text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:text-base md:mt-5 md:text-lg">
          Build with ready-made components, use our hooks for the underlying
          functionality, or implement your own logic. Delta UI gives you the
          foundation without limiting your approach.
        </p>

        <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-8">
          <Link
            href="/docs"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-black"
          >
            Get started
          </Link>
          <Link
            href="/docs/components/"
            className="rounded-full border border-neutral-500/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-500/10"
          >
            Browse components
          </Link>
        </div>
        <ComponentPreview className="mt-6 w-full max-w-xl sm:mt-8">
          <div className="rounded-xl bg-neutral-300/70 p-2.5 dark:bg-neutral-950/70 sm:p-3">
            <Comment />
          </div>
        </ComponentPreview>
      </section>
      <footer className="mt-auto flex w-full justify-center px-3 pb-3 text-gray-400 *:text-sm font-light">
        <p>
          Build by{" "}
          <span>
            <a
              className="underline!"
              href="https://harishravit.github.io/portfolio/"
            >
              Harish ravi
            </a>
          </span>
        </p>
      </footer>
    </main>
  );
}
