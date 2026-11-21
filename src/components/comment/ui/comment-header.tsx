import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";
const CommentHeader = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      role="comment header"
      className={cn("flex justify-between flex-1 min-w-0", className)}
      data-slot="comment-header"
      {...props}
    />
  );
};

export default CommentHeader;
