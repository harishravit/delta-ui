import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentReplyList = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      data-slot="comment-reply-list"
      role="comment reply list"
      className={cn(
        "relative flex flex-col flex-1 min-w-0 **:data-[slot=comment-side]:pt-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default CommentReplyList;
