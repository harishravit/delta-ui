import "@/components/comment/comment.css";
import { CommentThreadLineProvider } from "@/components/comment/context/useThreadLine";
import { cn } from "cn";
import { type ComponentProps } from "react";
type CommentProps = ComponentProps<"div"> & {
  disableBend?: boolean;
  disableThreads?: boolean;
};
const Comment = ({
  disableBend = false,
  disableThreads = false,
  className,
  children,
  ...props
}: CommentProps) => {
  return (
    <CommentThreadLineProvider properties={{ disableBend, disableThreads }}>
      <div
        className={cn(
          "relative flex flex-col min-h-0 w-full not-first:mt-6",
          className,
        )}
        role="comment root"
        data-slot="comment"
        data-comment-view="Tree"
        data-disablebend={disableBend}
        data-disablethreads={disableThreads}
        {...props}
      >
        {children}
      </div>
    </CommentThreadLineProvider>
  );
};
export default Comment;
