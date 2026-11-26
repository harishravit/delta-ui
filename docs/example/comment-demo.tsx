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
                <CommentHeaderItem>
                  <h3 className="text-sm text-primary font-semibold m-0!">
                    olivia
                  </h3>
                  <a className="text-accent/90 font-medium cursor-pointer hover:text-primary">
                    @Olivia Rhye
                  </a>
                  <span className="text-accent/90">&bull;</span>
                  <span className="text-accent/90">
                    {formatCommentTime("2026-11-11T10:30:00Z")}
                  </span>
                </CommentHeaderItem>
                <span className="font-medium text-accent/90">
                  Software Engineer @Zoho
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
                <CommentAvatar className="bg-red-500">
                  <CommentAvatarImage
                    src={getAvatar("phoenix-baker")}
                    alt="phoenix"
                  />
                </CommentAvatar>
              </CommentSide>
              <CommentBody>
                <CommentHeader className="items-baseline">
                  <CommentHeaderItemGroup className="pr-2">
                    <CommentHeaderItem>
                      <h3 className="text-sm text-primary font-semibold m-0!">
                        phoenix
                      </h3>
                      <a className="text-accent/70 font-medium cursor-pointer hover:text-primary truncate">
                        @Phoenix Baker
                      </a>
                      <span className="text-accent/70 text-sm">&bull;</span>
                      <span className="text-accent/70 text-xs truncate">
                        {formatCommentTime("2026-11-11T11:00:00Z")}
                      </span>
                    </CommentHeaderItem>
                    <span className="font-medium text-accent/70 truncate">
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
                    <p className="w-full min-w-0 break-words text-base my-0!">
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
      <CommentReplyToggle onClick={()=>setIsOpen((prev)=>!prev)} className="cursor-pointer">
        {isOpen ? "Hide replies" : "Show replies"}
      </CommentReplyToggle>
    </Comment>
  );
};

type FooterActions = {
  like: number;
  dislike: boolean;
};

const CommentFOOTER = () => {
  const [footerActions, setFooterActions] = useState<FooterActions>({
    like: 0,
    dislike: false,
  });

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
        onClick={() =>
          setFooterActions((prev) => ({
            ...prev,
            like: prev.like + 1,
          }))
        }
      >
        <ThumbsUp className="size-4 translate-y-0.5" />
        {footerActions.like}
      </button>

      <button
        data-item="dislike"
        className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
        onClick={() =>
          setFooterActions((prev) => ({
            ...prev,
            dislike: !prev.dislike,
          }))
        }
      >
        <ThumbsDown
          fill={footerActions.dislike ? "currentColor" : ""}
          className={cn(
            "size-4 translate-y-0.5",
            footerActions.dislike && "text-white",
          )}
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
