import { comments, type IComment } from "@/lib/utils/comment-data-sample";
import { getUserFallbackName } from "@/lib/utils/helpers";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn-components/avatar";
import { Button } from "@/shadcn-components/button";
import {
  Comment,
  CommentAvatar,
  CommentAvatarBadge,
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
  CommentSide,
} from "@/ui";
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
          <CommentAvatar>
            <Avatar>
              <AvatarImage src={item.user.avatar} />
              <AvatarFallback>
                {getUserFallbackName(item.user.name)}
              </AvatarFallback>
            </Avatar>
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
                <Button
                  variant="ghost"
                  className="text-accent/90 w-max max-w-full h-max p-0 text-xs! flex items-baseline"
                >
                  <Ellipsis className="size-4 translate-y-1.25" />
                  Readmore
                </Button>
              )}
            >
              <p className="min-w-0 wrap-break-word text-white text-base w-fit">
                {item.message.text}
              </p>
            </CommentMessageText>
          </CommentMessageContent>
          <CommentFooter className="[&_button]:gap-x-1 [&_button]:text-accent/80">
            <Button
              data-item="reply"
              variant="ghost"
              className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
            >
              <MessageCircle className="size-4 translate-y-0.75" />
              Reply
            </Button>
            <Button
              data-item="like"
              variant="ghost"
              className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
            >
              <ThumbsUp className="size-4 translate-y-0.5" />
              {item.likes}
            </Button>
            <Button
              data-item="dislike"
              variant="ghost"
              className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
            >
              <ThumbsDown className="size-4 translate-y-1" />
              {item.dislikes}
            </Button>
            <Button
              data-item="dislike"
              variant="ghost"
              className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex  items-baseline"
            >
              <Share2 className="size-4 translate-y-1" />
              share
            </Button>
            <Button variant="link">
              <CommentAvatar>
                <Avatar className="size-4">
                  <AvatarImage
                    className="ring ring-accent/45"
                    src={item.user.avatar}
                  />
                  <AvatarFallback>{item.user.name}</AvatarFallback>
                </Avatar>
                <CommentAvatarBadge>❤️</CommentAvatarBadge>
              </CommentAvatar>
            </Button>
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
const App = () => {
  return (
    <div className="container mx-auto max-w-xl px-2">
      <div className="w-full overflow-y-auto scrollbar-thin ">
        {comments.map((item) => (
          <Comment disableThreads className="not-first:mt-6" key={item.id}>
            <CommentMain>
              <CommentContent>
                <CommentSide>
                  <CommentAvatar>
                    <Avatar>
                      <AvatarImage src={item.user.avatar} />
                      <AvatarFallback>
                        {getUserFallbackName(item.user.name)}
                      </AvatarFallback>
                    </Avatar>
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
                        <Button
                          role="readmore text"
                          variant="ghost"
                          className="text-accent/90 w-max max-w-full h-max p-0 text-xs! flex items-baseline"
                        >
                          <Ellipsis
                            aria-roledescription="show more text"
                            className="size-4 translate-y-1.25"
                          />
                          Readmore
                        </Button>
                      )}
                    >
                      <p className="min-w-0 wrap-break-word text-white text-base w-fit">
                        {item.message.text}
                      </p>
                    </CommentMessageText>
                  </CommentMessageContent>
                  <CommentFooter className=" [&_button]:gap-x-1 [&_button]:text-accent/80">
                    <Button
                      data-item="reply"
                      variant="ghost"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                    >
                      <MessageCircle className="size-4 translate-y-0.75" />
                      <span className="hidden  lg:block">Reply</span>
                    </Button>
                    <Button
                      data-item="like"
                      variant="ghost"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex items-baseline"
                    >
                      <ThumbsUp className="size-4 translate-y-0.5" />
                      {item.likes}
                    </Button>
                    <Button
                      data-item="dislike"
                      variant="ghost"
                      className="text-accent/90 w-max max-w-full h-fit p-0 text-sm flex items-baseline"
                    >
                      <ThumbsDown className="size-4 translate-y-1" />
                      {item.dislikes}
                    </Button>
                    <Button
                      data-item="dislike"
                      variant="ghost"
                      className="text-accent/90 w-max max-w-full h-max p-0 text-sm flex  items-baseline"
                    >
                      <Share2 className="size-4 translate-y-1" />
                      <span className="hidden  lg:block">Reply</span>
                    </Button>
                    <Button variant="link" className="bg-transparent">
                      <CommentAvatar>
                        <Avatar className="size-4">
                          <AvatarImage
                            className="ring ring-accent/45"
                            src={item.user.avatar}
                          />
                          <AvatarFallback>{item.user.name}</AvatarFallback>
                        </Avatar>
                        <CommentAvatarBadge>😃</CommentAvatarBadge>
                      </CommentAvatar>
                    </Button>
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
export default App;
