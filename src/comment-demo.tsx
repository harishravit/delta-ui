"use client"
import { formatCommentTime, getAvatar } from "@/components/comment/lib/utils/helpers";
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
  CommentSide,
} from "@/components/comment/ui";
import {
  Ellipsis,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

const CommentDemo = () => {
  return (
    <div className="container mx-auto max-w-xl flex items-center justify-center h-screen px-2">
      <div className="w-full overflow-y-auto scrollbar-thin">
        <Comment>
          <CommentMain>
            <CommentContent>
              <CommentSide>
                <CommentAvatar className="bg-red-500">
                  <CommentAvatarImage
                    src={getAvatar("olivia-rhye")}
                    alt="olivia"
                  />
                </CommentAvatar>
              </CommentSide>
              <CommentBody>
                <CommentHeader>
                  <CommentHeaderItemGroup>
                    <CommentHeaderItem>
                      <h3 className="text-sm text-primary font-semibold">olivia</h3>
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
                    <p className="w-full min-w-0 break-words text-base">
                      I really like this design! The overall layout feels clean and intuitive.
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

                <CommentFooter className="[&_button]:gap-x-1 [&_button]:text-accent/80">
                  <button
                    data-item="reply"
                    className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                  >
                    <MessageCircle className="size-4 translate-y-0.75" />
                    <span className="hidden lg:block">Reply</span>
                  </button>
                  <button
                    data-item="like"
                    className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                  >
                    <ThumbsUp className="size-4 translate-y-0.5" />
                    24
                  </button>
                  <button className="bg-transparent">
                    <CommentAvatar className="bg-red-400">
                      <CommentAvatarImage
                        src={getAvatar("olivia-rhye")}
                        alt="olivia"
                      />
                      <CommentAvatarBadge>❤️</CommentAvatarBadge>
                    </CommentAvatar>
                  </button>
                </CommentFooter>
              </CommentBody>
            </CommentContent>
          </CommentMain>

          {/* ---------- Reply ---------- */}
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
                  <CommentHeader>
                    <CommentHeaderItemGroup className="pr-2">
                      <CommentHeaderItem>
                        <h3 className="text-sm text-primary font-semibold">phoenix</h3>
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
                      <p className="w-full min-w-0 wrap-break-word text-base">
                        Agreed! The spacing and typography are really well balanced.
                      </p>
                    </CommentMessageText>
                  </CommentMessageContent>

                  <CommentFooter className="[&_button]:gap-x-1 [&_button]:text-accent/80">
                    <button
                      data-item="dislike"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                    >
                      <ThumbsDown className="size-4 translate-y-1" />
                      0
                    </button>
                    <button
                      data-item="share"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                    >
                      <Share2 className="size-4 translate-y-1" />
                      share
                    </button>
                    <button>
                      <CommentAvatar className="bg-red-400">
                        <CommentAvatarImage
                          src={getAvatar("phoenix-baker")}
                          alt="phoenix"
                        />
                        <CommentAvatarBadge>🤣</CommentAvatarBadge>
                      </CommentAvatar>
                    </button>
                  </CommentFooter>
                </CommentBody>
              </CommentContent>
            </CommentReplyItem>
          </CommentReplyList>
        </Comment>
      </div>
    </div>
  );
};

export default CommentDemo;