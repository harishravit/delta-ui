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
        "relative flex flex-col flex-1 **:data-[slot=comment-side]:pt-2 **:data-[slot=comment-body]:pt-1 ",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default CommentReplyList;
