import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentMain = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn(
        "*:data-[slot=comment-content]:pt-0 ",
        className,
      )}
      role="main comment content"
      data-slot="comment-main"
      {...props}
    />
  );
};

export default CommentMain;
// flex max-h-max w-full
