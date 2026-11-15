import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentHeaderItemGroup = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("flex flex-col felx-1 min-w-0 *:text-xs ", className)}
      role="comment header item group"
      data-slot="comment-item-group"
      {...props}
    />
  );
};

export default CommentHeaderItemGroup;
