import { getUserFallbackName } from "@/components/comment/lib/utils/helpers";
import { cn } from "cn";
import { type ComponentPropsWithRef } from "react";
export const CommentAvatar = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      data-slot="comment-avatar"
      className={cn("relative inline-flex overflow-clip items-center justify-center rounded-full size-(--comment-avatar-size)", className)}
      {...props}
    />
  );
};

export const CommentAvatarImage = ({
  className,
  alt,
  ...props
}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      alt={getUserFallbackName(alt)}
      data-slot="comment-avatar-image"
      className={cn("block size-full rounded-full object-contain ", className)}
      {...props}
    />
  );
};

export const CommentAvatarBadge = ({
  className,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      data-slot="comment-avatar-badge"
      className={cn(
        "absolute -right-[calc(var(--comment-footer-avatar-size)/2)] -bottom-1 text-[12px] text-gray-900",
        className,
      )}
      {...props}
    />
  );
};
