import { useThreadLine } from "@/lib/context/useThreadLine";
import CommentRail from "@/ui/comment-rail";
import { cn } from "cn";
import { type ComponentProps } from "react";

type ThreadLineVarients = "reply" | "avatar";
interface ThreadLineProps extends ComponentProps<"div"> {
  disableThreadBend?: boolean;
  disableThreads?: boolean;
  varients?: ThreadLineVarients;
}

const CommentThreadLine = ({
  varients = "reply",
  className,
  ...props
}: ThreadLineProps) => {
  const { disableBend, disableThreads } = useThreadLine();
  const isReply: boolean = varients === "reply" ? true : false;
  return (
    <div
      data-slot="comment-thread"
      role="threadline"
      className={cn(
        "relative  w-full grid grid-rows-[var(--comment-thread-bend-row)_1fr_var(--comment-thread-bend-row)]",
        "grid-cols-[var(--comment-thread-vertical-row)_1fr_var(--comment-thread-bend-row)]  h-full ",
        "[&:has(_[data-slot=comment-rail]:hover)>[data-thread]]:border-bright",
        isReply && "pr-(--comment-thread-bend-gap)",
        className,
      )}
      {...props}
    >
      <span
        className="sr-only bg-red-300"
        aria-describedby="threadline"
        aria-hidden
        aria-description="comment threadline is a relation ship build line between comment items"
      ></span>
      {!disableThreads && <CommentRail />}
      {isReply && (
        <>
          {!disableThreads && (
            <div
              role="thread vertical line"
              data-thread="vertical"
              className="row-span-3 border-r-(length:--comment-thread-line-stroke) border-border"
            ></div>
          )}
          {!disableBend && !disableThreads && (
            <span
              role="thread bend line"
              data-thread="bend"
              className={cn(
                "relative col-start-2 col-span-3 row-start-1 w-full h-(--comment-thread-bend-center) rounded-bl-(--comment-avatar-size)",
                "border-b-(length:--comment-thread-line-stroke) border-l-(length:--comment-thread-line-stroke) border-border -ml-(--comment-thread-line-stroke)",
              )}
            >
              <CommentRail
                className={cn(
                  "h-(--comment-thread-bend-center) w-[calc(var(--comment-thread-bend-row)-var(--comment-thread-bend-gap)-4px)] top-2",
                  !disableBend && !disableThreads && "pointer-events-none",
                )}
              />
            </span>
          )}
        </>
      )}
      {!isReply && !disableThreads && (
        <span
          role="thread vertical line"
          data-thread="vertical"
          className="row-span-3 border-r-(length:--comment-thread-line-stroke) border-border"
        ></span>
      )}
    </div>
  );
};
export default CommentThreadLine;
