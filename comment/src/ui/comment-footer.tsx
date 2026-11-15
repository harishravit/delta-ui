import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentFooter = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      data-slot="comment-footer"
      role="comment footer"
      className={cn(
        "flex flex-1 gap-x-3 md:gap-x-6 items-baseline min-w-0 *:text-xs",
        className,
      )}
      {...props}
    />
  );
};

export default CommentFooter;
