import { cn } from "cn";
import { type ComponentPropsWithRef } from "react";
type CommentMessageTextProps = { render?: () => React.ReactNode };
const CommentMessageText = ({
  className,
  children,
  render,
  ...props
}: ComponentPropsWithRef<"div"> & CommentMessageTextProps) => {
  return (
    <div
      className={cn(
        "w-full *:text-sm",
        className,
      )}
      role="comment message text"
      data-slot="comment-message"
      {...props}
    >
      {children}
      {render?.()}
    </div>
  );
};
export default CommentMessageText;
