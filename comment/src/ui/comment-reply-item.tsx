import CommentThreadLine from "@/ui/comment-threadine";
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
      className={cn("grid grid-cols-[auto_1fr]", className)}
      {...props}
    >
      <CommentThreadLine className="[[data-disablebend=true]_&>[data-slot=comment-rail]]:w-[calc((var(--comment-avatar-size)/2)+1px)]" />
      <div
        data-slot="comment-reply-render"
        className={cn(
          // hidden the nested last comment item vertical line
          "[&>[data-slot=comment-content]:not(:has(~[data-slot=comment-reply-list]))>[data-slot=comment-side]>[data-slot=comment-thread]]:hidden",
          //Thread line hover highlighting logic for nested replies.
          "[&:has(>[data-slot=comment-content]_[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-list]>*>[data-slot=comment-thread]]:*:border-bright",
          "[&:has(>[data-slot=comment-reply-list]>*>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-content]_[data-thread]]:border-bright",
          "[&:has(>[data-slot=comment-reply-list]>[data-slot=comment-reply-item]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>*>*>[data-slot=comment-thread]]:*:border-bright",
          "[&:has(>[data-slot=comment-reply-list]>[data-slot=comment-reply-toggle]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>*>*>[data-slot=comment-thread]]:*:border-bright",
          "*:data-[slot=comment-reply-toggle]:hidden",
        )}
      >
        {children}
      </div>
    </div>
  );
};
export default CommentReplyItem;
