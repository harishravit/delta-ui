import CommentThreadLine from "@/components/comment/ui/comment-threadline";
import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentSide = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn(
        "group/comment-side relative flex flex-col flex-1 gap-y-(--comment-thread-vertical-gap) pt-1",
        className,
      )}
      role="comment side"
      data-slot="comment-side"
      {...props}
    >
      {children}
      <CommentThreadLine varients="avatar" />
    </div>
  );
};
export default CommentSide;
