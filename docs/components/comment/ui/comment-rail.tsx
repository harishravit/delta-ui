import { cn } from "cn";
import type { ComponentProps } from "react";

const CommentRail = ({className}:ComponentProps<"div">) => {
  return (
    <div
      data-slot="comment-rail"
      className={cn(
        "absolute top-0 cursor-pointer left-1.5 bottom-0 hover:cursor-pointer z-50",
        className
      )}
    ></div>
  );
};
export default CommentRail;
