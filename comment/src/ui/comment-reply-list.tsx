import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentReplyList = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      data-slot="comment-reply-list"
      role="comment reply list"
      className={cn(
        "relative flex flex-col flex-1 **:data-[slot=comment-side]:pt-2 **:data-[slot=comment-body]:pt-1 ",
        "[&:not([data-slot=comment]>[data-slot=comment-reply-list])>[data-slot=comment-reply-item]:not(:has(+*))>[data-slot=comment-thread]>[data-thread]:not([data-thread=bend])]:hidden",
        "[&:not([data-slot=comment]>[data-slot=comment-reply-list])>[data-slot=comment-reply-item]:not(:has(+*))>[data-slot=comment-thread]]:h-[calc(var(--comment-thread-bend-row)+var(--comment-avatar-top-padding))]",
        //Thread hover logic
        "[&:has(>[data-slot=comment-reply-item]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-toggle]>[data-slot=comment-thread]]:*:border-bright",
        "[&:has(>[data-slot=comment-reply-toggle]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-item]>[data-slot=comment-thread]]:*:border-bright",
        "[&:has(>[data-slot=comment-reply-item]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>*>[data-slot=comment-thread]]:*:border-bright",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default CommentReplyList;
