import { cn } from "cn";
import type { ComponentProps } from "react";

interface CommentContentVarient {
  varients?: "Main" | "reply";
}
const CommentContent = ({
  varients = "Main",
  className,
  ...props
}: ComponentProps<"div"> & CommentContentVarient) => {
  return (
    <div
      className={cn(
        "[&>[data-slot=comment-side]_[data-slot=comment-avatar]_*]:size-(--comment-avatar-size) grid grid-cols-[calc(var(--comment-avatar-size)+var(--comment-avatar-border))_1fr]  gap-x-(--comment-side-padding-right) flex-1 pt-1 ",
        className,
      )}
      role="comment content"
      data-slot="comment-content"
      {...props}
    />
  );
};

export default CommentContent;
