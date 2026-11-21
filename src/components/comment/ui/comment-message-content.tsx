import { cn } from "cn";
import type { ComponentProps } from "react";

const CommentMessageContent = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn("@container flex flex-col gap-y-2 flex-1 min-w-0", className)}
      role="comment message content"
      data-slot="comment-content"
      {...props}
    />
  );
};

export default CommentMessageContent;
