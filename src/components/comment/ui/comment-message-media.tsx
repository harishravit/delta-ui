import { cn } from "cn";
import type { ComponentPropsWithRef } from "react";

const CommentMessageMedia = ({
  className,
  src,
  ...props
}: ComponentPropsWithRef<"img">) => {
  return (
    <div
      className="w-[clamp(8rem,50cqw+1rem,12rem)] overflow-hidden rounded-[12px] sm:rounded-xl"
      role="comment media"
      data-slot="comment-media"
    >
      <img
        src={src}
        className={cn("size-full object-cover ", className)}
        {...props}
      />
    </div>
  );
};

export default CommentMessageMedia;
