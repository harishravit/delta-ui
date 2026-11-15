import { useThreadLine } from "@/lib/context/useThreadLine";
import { Button } from "@/shadcn-components/button";
import CommentThreadLine from "@/ui/comment-threadine";
import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentReplyToggle = ({
  className,
  disableThreadBend = false,
  disableThreadVerticle = false,
  ...props
}: ComponentPropsWithRef<"button"> & {
  disableThreadBend?: boolean;
  disableThreadVerticle?: boolean;
}) => {
  const {disableBend,disableThreads}=useThreadLine()
  return (
    <div
      data-slot="comment-reply-toggle"
      aria-disabled={disableThreads}
      role="comment-reply-toggle-container"
      className={cn(
        "relative grid grid-cols-[auto_1fr] grid-rows-1 justify-start ",
          disableThreads&&"hidden",
      )}
    >
      <CommentThreadLine
        className={cn(
          disableBend&&"[&>[data-slot=comment-rail]]:hidden",
          "[&>[data-thread]:not([data-thread=bend])]:hidden",
          "[&>[data-slot=comment-rail]]:h-[calc(var(--comment-thread-bend-center)+8px)]",
          "grid-rows-1 h-[calc(var(--comment-thread-bend-position)+12px)]",
        )}
        varients="reply"
      />
      <Button
        className={cn(
          "bg-transparent w-fit inline-flex rounded-full text-sm text-accent/80  gap-x-1  hover:text-primary items-center h-(--comment-avatar-size) mt-2.5  pl-0",
          disableBend && "pl-0 mt-0 -ml-8",
          className,
        )}
        {...props}
      >
        <span className="first-letter:uppercase">{props.children}</span>
      </Button>
    </div>
  );
};
export default CommentReplyToggle;
