import { cn } from "cn";
import { type ComponentProps, type ReactNode } from "react";
import { useThreadLine } from "../context/useThreadLine";
import CommentRail from "./comment-rail";

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
        "relative  grid grid-rows-[var(--comment-thread-bend-row)_1fr_var(--comment-thread-bend-row)]",
        "grid-cols-[var(--comment-thread-vertical-row)_1fr_calc(var(--comment-thread-bend-row)-var(--comment-avatar-border))] h-full",
        isReply && "pr-(--comment-thread-bend-gap)",
        className,
      )}
      {...props}
    >
      <span
        className="sr-only"
        aria-describedby="threadline"
        aria-hidden
      ></span>
      {!disableThreads && (
        <CommentRail className="w-(--comment-thread-vertical-row)" />
      )}
      {isReply && (
        <>
          {!disableThreads && <ThreadVertical />}
          {!disableBend && !disableThreads && (
            <ThreadBend>
              <CommentRail
                className={cn(
                  "h-(--comment-thread-bend-center) w-[calc(var(--comment-thread-bend-row)-var(--comment-thread-bend-gap)-4px)] top-2",
                  disableBend && disableThreads && "pointer-events-none",
                )}
              />
            </ThreadBend>
          )}
        </>
      )}
      {!isReply && !disableThreads && <ThreadVertical />}
    </div>
  );
};

export const ThreadVertical = () => {
  return (
    <span
      role="thread vertical line"
      data-thread="vertical"
      className="row-start-1 row-span-3 border-r-(length:--comment-thread-line-stroke)"
    ></span>
  );
};
export const ThreadBend = ({ children }: { children?: ReactNode }) => {
  return (
    <span
      role="thread bend line"
      data-thread="bend"
      className={cn(
        "relative col-start-2 col-span-3 row-start-1 w-full h-(--comment-thread-bend-center) rounded-bl-(--comment-avatar-size)",
        "border-b-(length:--comment-thread-line-stroke) border-l-(length:--comment-thread-line-stroke) border-border -ml-(--comment-thread-line-stroke)",
      )}
    >
      {children}
    </span>
  );
};
export default CommentThreadLine;
