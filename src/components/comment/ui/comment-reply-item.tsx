import CommentThreadLine from "@/components/comment/ui/comment-threadine";
import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";
// [data-slot=comment-reply-list]:last-child_>[data-slot=comment-reply-item]:not(:has(>[data-slot=comment-reply-toggle]))>[data-slot=comment-thread]>[data-thread=vertical]]:invisible
const CommentReplyItem = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      role="comment reply item"
      data-slot="comment-reply-item"
      className={cn("grid grid-cols-[auto_1fr] ", className)}
      {...props}
    >
      <CommentThreadLine varients="reply" />
      <div data-slot="comment-reply-render">{children}</div>
    </div>
  );
};
export default CommentReplyItem;
