import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentHeaderItem = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("inline-flex gap-x-1 items-center min-w-0 shrink-0 ", className)}
      role="comment header item"
      data-slot="comment-item"
      {...props}
    />
  );
};

export default CommentHeaderItem;
