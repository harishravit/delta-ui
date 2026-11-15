import {
  CommentThreadLineProvider
} from "@/lib/context/useThreadLine";
import { cn } from "cn";
import { type ComponentProps } from "react";
type CommentProps = ComponentProps<"div"> & {
  disableBend?: boolean;
  disableThreads?: boolean;
};
const Comment = ({
  disableBend = false,
  disableThreads = false,
  className,
  children,
  ...props
}: CommentProps) => {
  return (
    <CommentThreadLineProvider properties={{ disableBend,disableThreads }}>
      <div
        className={cn(
          "relative flex flex-col min-h-0 w-full",
          /* hide main comment avatar column vertical thread line when the main comment don't have any sibiligs like "Replies or Reply toggle" */
          "[&>[data-slot=comment-main]:not(:has(~[data-slot=comment-reply-list])):not(:has(~[data-slot=comment-reply-toggle]))_[data-slot=comment-thread]]:hidden",
          "[&:not(:has(>[data-slot=comment-reply-toggle]))>[data-slot=comment-reply-list]>[data-slot=comment-reply-item]:last-child_>[data-slot=comment-thread]>[data-thread]:not([data-thread=bend])]:hidden",
          "[&:not(:has(>[data-slot=comment-reply-toggle]))>[data-slot=comment-reply-list]>[data-slot=comment-reply-item]:last-child_>[data-slot=comment-thread]]:h-[calc(var(--comment-thread-bend-row)+var(--comment-avatar-top-padding))]",
          /* This code trigger,when main thread is hover then bottom all sibilings border color change */
          "[&:has(>[data-slot=comment-main]_[data-slot=comment-side]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-list]>*>[data-slot=comment-thread]]:*:border-bright",
          "[&:has(>[data-slot=comment-main]_[data-slot=comment-side]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-toggle]>[data-slot=comment-thread]]:*:border-bright",
          /* This code trigger,when direct first reply list inside reply item thread is hover then bottom and up all sibilings border color change */
          "[&:has(>[data-slot=comment-reply-list]>[data-slot=comment-reply-item]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-main]_[data-slot=comment-thread]]:*:border-bright",
          "[&:has(>[data-slot=comment-reply-list]>[data-slot=comment-reply-item]>[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-toggle]_[data-slot=comment-thread]]:*:border-bright",
          /* This code trigger,when direct first reply toggle inside thread is hover then this above all sibilings border color change */
          "[&:has(>[data-slot=comment-reply-toggle]_[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-main]_[data-slot=comment-thread]]:*:border-bright",
          "[&:has(>[data-slot=comment-reply-toggle]_[data-slot=comment-thread]_[data-slot=comment-rail]:hover)>[data-slot=comment-reply-list]>[data-slot=comment-reply-item]>[data-slot=comment-thread]]:*:border-bright",
          className,
        )}
        role="comment root"
        data-slot="comment"
        data-comment-view="Tree"
        data-disablebend={disableBend}
        data-disableThreads={disableThreads}
        {...props}
      >
        {children}
      </div>
    </CommentThreadLineProvider>
  );
};
export default Comment;
