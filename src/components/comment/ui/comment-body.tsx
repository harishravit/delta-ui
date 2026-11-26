import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";
const CommentBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("flex flex-col flex-1 gap-y-3 pt-1 pb-2 min-w-0 w-full text-left", className)}
      role="comment body"
      data-slot="comment-body"
      {...props}
    >
    </div>
  );
};

export default CommentBody;
