"use client";
import {
  cn,
  formatCommentTime,
  getAvatar,
} from "@/components/comment/lib/utils/helpers";
import {
  Comment,
  CommentAvatar,
  CommentAvatarBadge,
  CommentAvatarImage,
  CommentBody,
  CommentContent,
  CommentFooter,
  CommentHeader,
  CommentHeaderItem,
  CommentHeaderItemGroup,
  CommentMain,
  CommentMessageContent,
  CommentMessageText,
  CommentReplyItem,
  CommentReplyList,
  CommentReplyToggle,
  CommentSide,
} from "@/components/comment/ui";
import { Ellipsis, MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

const DEMO_PRIMARY_TIME = "2026-11-25T12:00:00.000Z";
const DEMO_REPLY_TIME = "2026-11-26T12:00:00.000Z";

const CommentDemo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Comment className="[--border-thread-hover:var(--color-gray-50)]">
      <CommentMain>
        <CommentContent>
          <CommentSide>
            <CommentAvatar className="bg-red-500">
              <CommentAvatarImage src={getAvatar("olivia-rhye")} alt="olivia" />
            </CommentAvatar>
          </CommentSide>
          <CommentBody>
            <CommentHeader className="items-baseline">
              <CommentHeaderItemGroup>
                <CommentHeaderItem className="*:text-xs flex-wrap">
                  <h3 className="text-sm! text-primary font-medium m-0!">
                    Harish
                  </h3>
                  <a className="max-w-24 truncate text-xs text-accent/90 font-medium cursor-pointer hover:text-primary">
                    @harish Ravi
                  </a>
                  <span className="text-accent/90">&bull;</span>
                  <span className="text-accent/90 truncate">
                    {formatCommentTime(DEMO_PRIMARY_TIME)}
                  </span>
                </CommentHeaderItem>
                <span className="hidden font-medium *:text-xs! text-accent/90 sm:block">
                  Author of <a href="https://delta-ui.vercel.app">@Delta-ui</a>
                </span>
              </CommentHeaderItemGroup>
              <CommentHeaderItem className="shrink-0">
                <Ellipsis
                  aria-label="more action"
                  className="size-4 cursor-pointer text-accent/85 hover:text-primary"
                />
              </CommentHeaderItem>
            </CommentHeader>
            <CommentMessageContent>
              <CommentMessageText>
                <p className="w-full min-w-0 text-base my-0!">
                  I really like this design! The overall layout feels clean and
                  intuitive.
                </p>
                <button
                  role="readmore text"
                  className="text-accent/90 w-max max-w-full h-max p-0 text-xs! flex items-baseline"
                >
                  <Ellipsis
                    aria-roledescription="show more text"
                    className="size-4 translate-y-1.25"
                  />
                  Readmore
                </button>
              </CommentMessageText>
            </CommentMessageContent>

            <CommentFOOTER />
          </CommentBody>
        </CommentContent>
      </CommentMain>
      {isOpen && (
        <CommentReplyList>
          <CommentReplyItem>
            <CommentContent>
              <CommentSide>
                <CommentAvatar className="bg-yellow-500">
                  <CommentAvatarImage
                    src={getAvatar("Harsha_dev")}
                    alt="Harsha_dev"
                  />
                </CommentAvatar>
              </CommentSide>
              <CommentBody>
                <CommentHeader className="items-baseline">
                  <CommentHeaderItemGroup className="pr-2">
                    <CommentHeaderItem className="*:text-xs flex-wrap">
                      <h3 className="text-sm! text-primary font-medium m-0!">
                        Harsha_dev
                      </h3>
                      <a className="max-w-20 truncate text-accent/70 font-medium cursor-pointer hover:text-primary">
                        @harsha
                      </a>
                      <span className="text-accent/70 text-sm">&bull;</span>
                      <span className="max-w-24 truncate text-accent/70 text-xs">
                        {formatCommentTime(DEMO_REPLY_TIME)}
                      </span>
                    </CommentHeaderItem>
                    <span className="hidden font-medium text-accent/70 truncate sm:block">
                      Product Designer @Figma
                    </span>
                  </CommentHeaderItemGroup>
                  <CommentHeaderItem className="shrink-0">
                    <Ellipsis className="size-4 cursor-pointer text-accent/85 hover:text-primary" />
                  </CommentHeaderItem>
                </CommentHeader>
                <CommentMessageContent>
                  <CommentMessageText
                    render={() => (
                      <button className="text-accent/90 w-max max-w-full h-max p-0 text-xs! flex items-baseline">
                        <Ellipsis className="size-4 translate-y-1.25" />
                        Readmore
                      </button>
                    )}
                  >
                    <p className="w-full min-w-0 wrap-break-word text-base my-0!">
                      Agreed! The spacing and typography are really well
                      balanced.
                    </p>
                  </CommentMessageText>
                </CommentMessageContent>
                <CommentFOOTER />
              </CommentBody>
            </CommentContent>
          </CommentReplyItem>
        </CommentReplyList>
      )}
      <CommentReplyToggle
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        {isOpen ? "Hide replies" : "Show replies"}
      </CommentReplyToggle>
    </Comment>
  );
};

const CommentFOOTER = () => {
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    setReaction((prev) => (prev === "like" ? null : "like"));
  };

  const handleDislike = () => {
    setReaction((prev) => (prev === "dislike" ? null : "dislike"));
  };

  const isLiked = reaction === "like";
  const isDisliked = reaction === "dislike";

  return (
    <CommentFooter className="*:hover:cursor-pointer [&_button]:gap-x-1 [&_button]:text-accent/80">
      <button
        data-item="reply"
        className="text-accent/90 w-max max-w-full h-max px-0 text-sm flex items-baseline"
      >
        <MessageCircle className="size-4" />
        <span className="hidden lg:block">Reply</span>
      </button>

      <button
        data-item="like"
        className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
        onClick={handleLike}
      >
        <ThumbsUp
          fill={isLiked ? "currentColor" : "none"}
          className={cn("size-4 translate-y-0.5", isLiked && "text-white")}
        />
        {isLiked ? 1 : 0}
      </button>

      <button
        data-item="dislike"
        className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
        onClick={handleDislike}
      >
        <ThumbsDown
          fill={isDisliked ? "currentColor" : "none"}
          className={cn("size-4 translate-y-0.5", isDisliked && "text-white")}
        />
      </button>

      <button className="bg-transparent translate-y-1">
        <CommentAvatar className="bg-red-400">
          <CommentAvatarImage src={getAvatar("olivia-rhye")} alt="olivia" />
          <CommentAvatarBadge>❤️</CommentAvatarBadge>
        </CommentAvatar>
      </button>
    </CommentFooter>
  );
};

export default CommentDemo;
