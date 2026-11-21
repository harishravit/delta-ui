import {
  comments,
  type IComment,
} from "@/components/comment/lib/utils/comment-data-sample";
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
  CommentMessageMedia,
  CommentMessageText,
  CommentReplyItem,
  CommentReplyList,
  CommentReplyToggle,
  CommentSide
} from "@/components/comment/ui";
import {
  Ellipsis,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

const commentReplyRender = (item: IComment) => {
  return (
    <CommentReplyItem key={item.id}>
      <CommentContent>
        <CommentSide>
          <CommentAvatar className="bg-red-400">
            <CommentAvatarImage
              src={item.user.avatar}
              alt={item.user.username}
            />
          </CommentAvatar>
        </CommentSide>
        <CommentBody>
          <CommentHeader>
            <CommentHeaderItemGroup className="pr-2">
              <CommentHeaderItem>
                <h3 className="text-sm text-primary font-semibold">
                  {item.user.username}
                </h3>
                <a className="text-accent/70 font-medium cursor-pointer hover:text-primary truncate">
                  @{item.user.name}
                </a>
                <span className="text-accent/70 text-sm">&bull;</span>
                <span className="text-accent/70 text-xs truncate">
                  {item.createdAt}
                </span>
              </CommentHeaderItem>
              <span className="font-medium text-accent/70 truncate">
                {item.user.role} @{item.user.company}
              </span>
            </CommentHeaderItemGroup>
            <CommentHeaderItem>
              <Ellipsis className="size-4 cursor-pointer text-accent/85 hover:text-primary" />
            </CommentHeaderItem>
          </CommentHeader>
          <CommentMessageContent>
            {item.message.media != null && (
              <CommentMessageMedia
                src={item.message.media[0].url}
                alt={item.message.media[0].alt}
              />
            )}
            <CommentMessageText
              render={() => (
                <button className="text-accent/90 w-max max-w-full h-max p-0 text-xs! flex items-baseline">
                  <Ellipsis className="size-4 translate-y-1.25" />
                  Readmore
                </button>
              )}
            >
              <p className="min-w-0 wrap-break-word  text-base w-fit">
                {item.message.text}
              </p>
            </CommentMessageText>
          </CommentMessageContent>
          <CommentFooter className="[&_button]:gap-x-1 [&_button]:text-accent/80">
            <button
              data-item="dislike"
              className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
            >
              <ThumbsDown className="size-4 translate-y-1" />
              {item.dislikes}
            </button>
            <button
              data-item="dislike"
              className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex  items-baseline"
            >
              <Share2 className="size-4 translate-y-1" />
              share
            </button>
            <button>
              <CommentAvatar>
                <CommentAvatarImage
                  src={item.user.avatar}
                  alt={item.user.username}
                />
                <CommentAvatarBadge>🤣</CommentAvatarBadge>
              </CommentAvatar>
            </button>
          </CommentFooter>
        </CommentBody>
      </CommentContent>
      {item.replies.length > 0 && (
        <CommentReplyList>
          {item.replies.map((item) => commentReplyRender(item))}
          {item.replies.length >= 1 && (
            <CommentReplyToggle>show replies</CommentReplyToggle>
          )}
        </CommentReplyList>
      )}
    </CommentReplyItem>
  );
};
const TestComponent = () => {
  return (
    <div className="container mx-auto max-w-xl h-screen px-2">
      <div className="h-full w-full overflow-y-auto scrollbar-thin ">
        {comments.map((item) => (
          <Comment className="not-first:mt-6" key={item.id}>
            <CommentMain>
              <CommentContent>
                <CommentSide>
                  <CommentAvatar className="bg-red-500">
                    <CommentAvatarImage
                      src={item.user.avatar}
                      alt={item.user.username}
                    />
                  </CommentAvatar>
                </CommentSide>
                <CommentBody>
                  <CommentHeader>
                    <CommentHeaderItemGroup>
                      <CommentHeaderItem>
                        <h3 className="text-sm text-primary font-semibold">
                          {item.user.username}
                        </h3>
                        <a className="text-accent/90 font-medium cursor-pointer hover:text-primary">
                          @{item.user.name}
                        </a>
                        <span className="text-accent/90 ">&bull;</span>
                        <span className="text-accent/90 ">
                          {item.createdAt}
                        </span>
                      </CommentHeaderItem>
                      <span className="font-medium text-accent/90">
                        {item.user.role} @{item.user.company}
                      </span>
                    </CommentHeaderItemGroup>
                    <CommentHeaderItem>
                      <Ellipsis
                        aria-label="more action"
                        className="size-4 cursor-pointer text-accent/85 hover:text-primary"
                      />
                    </CommentHeaderItem>
                  </CommentHeader>
                  <CommentMessageContent>
                    {item.message.media != null && (
                      <CommentMessageMedia
                        src={item.message.media[0].url}
                        alt={item.message.media[0].alt}
                      />
                    )}
                    <CommentMessageText
                      render={() => (
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
                      )}
                    >
                      <p className="min-w-0 wrap-break-word text-base w-fit">
                        {item.message.text}
                      </p>
                    </CommentMessageText>
                  </CommentMessageContent>
                  <CommentFooter className="[&_button]:gap-x-1 [&_button]:text-accent/80">
                    <button
                      data-item="reply"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                    >
                      <MessageCircle className="size-4 translate-y-0.75" />
                      <span className="hidden  lg:block">Reply</span>
                    </button>
                    <button
                      data-item="like"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                    >
                      <ThumbsUp className="size-4 translate-y-0.5" />
                      {item.likes}
                    </button>
                    <button className="bg-transparent">
                      <CommentAvatar className="size-5">
                        <CommentAvatarImage
                          src={item.user.avatar}
                          alt={item.user.username}
                        />
                        <CommentAvatarBadge>❤️</CommentAvatarBadge>
                      </CommentAvatar>
                    </button>
                  </CommentFooter>
                </CommentBody>
              </CommentContent>
            </CommentMain>
            {item.replies.length > 0 && (
              <CommentReplyList>
                {item.replies.map((item) => commentReplyRender(item))}
              </CommentReplyList>
            )}
            <CommentReplyToggle>hide replies</CommentReplyToggle>
          </Comment>
        ))}
      </div>
    </div>
  );
};
export default TestComponent;
