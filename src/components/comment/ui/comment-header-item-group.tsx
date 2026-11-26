import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentHeaderItemGroup = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("flex w-full flex-1 flex-col text-left min-w-0 overflow-hidden *:text-xs", className)}
      role="comment header item group"
      data-slot="comment-item-group"
      {...props}
    />
  );
};

export default CommentHeaderItemGroup;
