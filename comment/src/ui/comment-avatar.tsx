import { cn } from "cn";
import { type ComponentPropsWithRef } from "react";
export const CommentAvatar = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      role="comment avatar"
      data-slot="comment-avatar"
      className={cn(
        "relative *:hover:cursor-pointer size-fit  rounded-full",
        className,
      )}
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
      role="comment avatar badge"
      data-slot="comment-avatar-badge"
      className={cn(
        "absolute -right-1 -bottom-1 text-[10px] text-gray-900 ",
        className,
      )}
      {...props}
    />
  );
};
