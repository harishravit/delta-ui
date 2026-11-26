import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import Comment from "@/components/comment/ui/comment";
import {
  CommentAvatar,
  CommentAvatarBadge,
  CommentAvatarImage,
} from "@/components/comment/ui/comment-avatar";
import CommentBody from "@/components/comment/ui/comment-body";
import CommentContent from "@/components/comment/ui/comment-content";
import CommentFooter from "@/components/comment/ui/comment-footer";
import CommentHeader from "@/components/comment/ui/comment-header";
import CommentHeaderItem from "@/components/comment/ui/comment-header-item";
import CommentHeaderItemGroup from "@/components/comment/ui/comment-header-item-group";
import CommentMain from "@/components/comment/ui/comment-main";
import CommentMessageContent from "@/components/comment/ui/comment-message-content";
import CommentMessageMedia from "@/components/comment/ui/comment-message-media";
import CommentMessageText from "@/components/comment/ui/comment-message-text";
import CommentRail from "@/components/comment/ui/comment-rail";
import CommentReplyItem from "@/components/comment/ui/comment-reply-item";
import CommentReplyList from "@/components/comment/ui/comment-reply-list";
import CommentReplyToggle from "@/components/comment/ui/comment-reply-toggle";
import CommentSide from "@/components/comment/ui/comment-side";
import CommentThreadLine, {
  ThreadBend,
  ThreadVertical,
} from "@/components/comment/ui/comment-threadline";

afterEach(() => cleanup());

describe("Comment", () => {
  it("renders compound content and forwards root props", () => {
    render(
      <Comment id="discussion" className="bordered" data-testid="comment">
        <CommentBody>Original post</CommentBody>
      </Comment>,
    );

    const root = screen.getByTestId("comment");
    expect(root.getAttribute("role")).toBe("comment root");
    expect(root.getAttribute("data-slot")).toBe("comment");
    expect(root.getAttribute("data-comment-view")).toBe("Tree");
    expect(root.id).toBe("discussion");
    expect(root.className).toContain("bordered");
    expect(root.textContent).toContain("Original post");
  });

  it("exposes both disable flags in its data attributes", () => {
    render(
      <Comment disableBend disableThreads>
        <CommentBody>No thread decorations</CommentBody>
      </Comment>,
    );

    const root = document.querySelector('[data-slot="comment"]');
    expect(root?.getAttribute("data-disablebend")).toBe("true");
    expect(root?.getAttribute("data-disablethreads")).toBe("true");
  });

  it("supports a content-free comment", () => {
    render(<Comment aria-label="Empty comment" />);
    expect(
      document.querySelector('[data-slot="comment"]')?.childElementCount,
    ).toBe(0);
  });
});

describe("CommentAvatar", () => {
  it("renders avatar container, image, and badge together", () => {
    render(
      <CommentAvatar className="avatar-container" data-testid="avatar">
        <CommentAvatarImage src="/maya.png" alt="Maya Chen" />
        <CommentAvatarBadge aria-label="Online">●</CommentAvatarBadge>
      </CommentAvatar>,
    );

    const avatar = screen.getByTestId("avatar");
    const image = screen.getByRole("img") as HTMLImageElement;
    const badge = screen.getByLabelText("Online");

    expect(avatar.getAttribute("data-slot")).toBe("comment-avatar");
    expect(avatar.className).toContain("avatar-container");
    expect(image.alt).toBe("MC");
    expect(image.src).toContain("/maya.png");
    expect(image.getAttribute("data-slot")).toBe("comment-avatar-image");
    expect(badge.getAttribute("data-slot")).toBe("comment-avatar-badge");
    expect(badge.textContent).toBe("●");
  });

  it("uses an empty fallback when the image alt is omitted", () => {
    render(<CommentAvatarImage src="/anonymous.png" />);
    const image = document.querySelector('[data-slot="comment-avatar-image"]');
    expect(image?.getAttribute("alt")).toBe("");
  });

  it("normalizes whitespace and repeated names in fallback initials", () => {
    render(<CommentAvatarImage src="/person.png" alt="  maya   chen   " />);
    expect(screen.getByRole("img").getAttribute("alt")).toBe("MC");
  });
});

describe("CommentBody", () => {
  it("renders children, role, slot, and custom attributes", () => {
    render(
      <CommentBody id="body" className="custom-body" data-testid="body">
        <p>Meaningful response body</p>
      </CommentBody>,
    );

    const body = screen.getByTestId("body");
    expect(body.getAttribute("role")).toBe("comment body");
    expect(body.getAttribute("data-slot")).toBe("comment-body");
    expect(body.className).toContain("custom-body");
    expect(body.textContent).toContain("Meaningful response body");
  });

  it("can render with no children", () => {
    render(<CommentBody data-testid="empty-body" />);
    expect(screen.getByTestId("empty-body").childElementCount).toBe(0);
  });
});

describe("CommentContent", () => {
  it("renders Main variant and forwards compound layout props", () => {
    render(
      <CommentContent
        varients="Main"
        className="main-content"
        data-testid="content"
      >
        <span>Question</span>
      </CommentContent>,
    );

    const content = screen.getByTestId("content");
    expect(content.getAttribute("role")).toBe("comment content");
    expect(content.getAttribute("data-slot")).toBe("comment-content");
    expect(content.className).toContain("main-content");
  });

  it("supports the reply variant and remains backward-compatible with omitted variant", () => {
    const { rerender } = render(
      <CommentContent data-testid="nested-reply" varients="reply">
        Reply
      </CommentContent>,
    );
    expect(
      document.querySelector('[data-slot="comment-content"]')?.textContent).toBe("Reply");
    rerender(
      <CommentContent data-testid="nested-reply">
        Default
        <CommentReplyList />
      </CommentContent>,
    );
    expect(
      document.querySelector('[data-slot="comment-content"]')?.textContent,
    ).not.toBe("Reply");

    const content = screen.getByTestId("nested-reply");

    expect(
      content?.querySelector("[data-slot=comment-reply-list]"),
    ).not.toBeNull();
  });
});

describe("CommentFooter", () => {
  it("renders actions and metadata", () => {
    render(
      <CommentFooter className="footer-actions" aria-label="Comment actions">
        <button type="button">Like</button>
        <button type="button">Reply</button>
      </CommentFooter>,
    );

    const footer = screen.getByLabelText("Comment actions");
    expect(footer.getAttribute("role")).toBe("comment footer");
    expect(footer.getAttribute("data-slot")).toBe("comment-footer");
    expect(footer.className).toContain("footer-actions");
    expect(screen.getByRole("button", { name: "Like" })).not.toBeNull();
    expect(screen.getByRole("button", { name: "Reply" })).not.toBeNull();
  });

  it("renders an empty footer safely", () => {
    render(<CommentFooter data-testid="empty-footer" />);
    expect(screen.getByTestId("empty-footer").childElementCount).toBe(0);
  });
});

describe("CommentHeader and Header items", () => {
  it("renders the header with item group and item children", () => {
    render(
      <CommentHeader className="header" data-testid="header">
        <CommentHeaderItemGroup>
          <CommentHeaderItem>
            <strong>Ada Lovelace</strong>
          </CommentHeaderItem>
          <CommentHeaderItem>
            <time>2h ago</time>
          </CommentHeaderItem>
        </CommentHeaderItemGroup>
      </CommentHeader>,
    );

    const header = screen.getByTestId("header");
    expect(header.getAttribute("role")).toBe("comment header");
    expect(header.getAttribute("data-slot")).toBe("comment-header");
    expect(header.className).toContain("header");
    expect(header.textContent).toContain("Ada Lovelace");
    expect(header.textContent).toContain("2h ago");
  });

  it("preserves slot roles for every header subcomponent", () => {
    render(
      <CommentHeaderItemGroup data-testid="group">
        <CommentHeaderItem data-testid="item">Edited</CommentHeaderItem>
      </CommentHeaderItemGroup>,
    );

    const group = screen.getByTestId("group");
    const item = screen.getByTestId("item");
    expect(group.getAttribute("role")).toBe("comment header item group");
    expect(group.getAttribute("data-slot")).toBe("comment-item-group");
    expect(item.getAttribute("role")).toBe("comment header item");
    expect(item.getAttribute("data-slot")).toBe("comment-item");
  });
});

describe("CommentMain", () => {
  it("renders main comment content and children", () => {
    render(
      <CommentMain className="custom-main" data-testid="main">
        <p>Primary comment message</p>
      </CommentMain>,
    );

    const main = screen.getByTestId("main");
    expect(main.getAttribute("role")).toBe("main comment content");
    expect(main.getAttribute("data-slot")).toBe("comment-main");
    expect(main.className).toContain("custom-main");
    expect(main.textContent).toContain("Primary comment message");
  });
});

describe("CommentMessage compound components", () => {
  it("renders message content, text, and media together", () => {
    render(
      <CommentMessageContent
        className="message-content"
        data-testid="message-content"
      >
        <CommentMessageText className="message-text" data-testid="message-text">
          The implementation is ready for review.
        </CommentMessageText>
        <CommentMessageMedia
          src="/architecture.png"
          alt="System architecture diagram"
          className="message-image"
        />
      </CommentMessageContent>,
    );

    const content = screen.getByTestId("message-content");
    const text = screen.getByTestId("message-text");
    const image = screen.getByRole("img", {
      name: "System architecture diagram",
    }) as HTMLImageElement;

    expect(content.getAttribute("role")).toBe("comment message content");
    expect(content.getAttribute("data-slot")).toBe("comment-content");
    expect(text.textContent).toContain("implementation is ready");
    expect(text.getAttribute("role")).toBe("comment message text");
    expect(image.src).toContain("/architecture.png");
    expect(image.className).toContain("message-image");
  });

  it("supports a render function for rich message text", () => {
    render(
      <CommentMessageText render={() => <mark>Rendered annotation</mark>}>
        Prefix
      </CommentMessageText>,
    );

    const text = document.querySelector('[data-slot="comment-message"]');
    expect(text?.textContent).toContain("Prefix");
    expect(text?.textContent).toContain("Rendered annotation");
  });

  it("handles empty text and an undefined render callback", () => {
    render(<CommentMessageText render={undefined} />);
    const text = document.querySelector('[data-slot="comment-message"]');
    expect(text?.textContent).toBe("");
  });

  it("renders media wrapper metadata and an empty media src", () => {
    render(<CommentMessageMedia src="" alt="Preview unavailable" />);
    const wrapper = document.querySelector('[data-slot="comment-media"]');
    const image = screen.getByRole("img", {
      name: "Preview unavailable",
    }) as HTMLImageElement;
    expect(wrapper?.getAttribute("role")).toBe("comment media");
    expect(image.hasAttribute("src")).toBe(false);
  });
});

describe("CommentRail", () => {
  it("renders a rail slot and custom class", () => {
    render(<CommentRail className="custom-rail" />);
    const rail = document.querySelector('[data-slot="comment-rail"]');
    expect(rail?.getAttribute("data-slot")).toBe("comment-rail");
    expect(rail?.className).toContain("custom-rail");
  });
});

describe("CommentReply compound components", () => {
  it("renders reply items and preserves nested reply content", () => {
    render(
      <Comment disableBend={false} disableThreads={false}>
        <CommentReplyItem className="reply-item" data-testid="reply-item">
          <CommentBody>Nested reply body</CommentBody>
        </CommentReplyItem>
      </Comment>,
    );

    const item = screen.getByTestId("reply-item");
    expect(item.getAttribute("role")).toBe("comment reply item");
    expect(item.getAttribute("data-slot")).toBe("comment-reply-item");
    expect(item.className).toContain("reply-item");
    expect(item.textContent).toContain("Nested reply body");
  });

  it("renders an empty reply item safely", () => {
    render(
      <Comment>
        <CommentReplyItem data-testid="empty-reply" />
      </Comment>,
    );
    const renderArea = screen
      .getByTestId("empty-reply")
      .querySelector('[data-slot="comment-reply-render"]');
    expect(renderArea?.childElementCount).toBe(0);
  });

  it("renders a reply list and multiple reply items", () => {
    render(
      <Comment>
        <CommentReplyList className="reply-list" data-testid="reply-list">
          <CommentReplyItem>First reply</CommentReplyItem>
          <CommentReplyItem>Second reply</CommentReplyItem>
        </CommentReplyList>
      </Comment>,
    );

    const list = screen.getByTestId("reply-list");
    expect(list.getAttribute("role")).toBe("comment reply list");
    expect(list.getAttribute("data-slot")).toBe("comment-reply-list");
    expect(list.className).toContain("reply-list");
    expect(list.textContent).toContain("First reply");
    expect(list.textContent).toContain("Second reply");
  });

  it("renders an empty reply list safely", () => {
    render(
      <Comment>
        <CommentReplyList data-testid="empty-list" />
      </Comment>,
    );
    expect(screen.getByTestId("empty-list").childElementCount).toBe(0);
  });

  it("handles reply toggle click and forwards button props", () => {
    const onClick = vi.fn();
    render(
      <Comment>
        <CommentReplyToggle
          className="toggle-custom"
          data-testid="reply-toggle"
          aria-label="Show three replies"
          onClick={onClick}
        >
          3 replies
        </CommentReplyToggle>
      </Comment>,
    );

    const toggle = screen.getByRole("button", { name: "Show three replies" });
    expect(toggle.textContent).toContain("3 replies");
    expect(toggle.className).toContain("toggle-custom");
    fireEvent.click(toggle);
    expect(onClick).toHaveBeenCalledTimes(1);

    const container = toggle.parentElement;
    expect(container?.getAttribute("data-slot")).toBe("comment-reply-toggle");
  });

  it("hides reply toggle when threads are disabled", () => {
    render(
      <Comment disableThreads>
        <CommentReplyToggle>Replies</CommentReplyToggle>
      </Comment>,
    );

    const container = document.querySelector(
      '[data-slot="comment-reply-toggle"]',
    );
    expect(container?.className).toContain("hidden");
    expect(container?.getAttribute("aria-disabled")).toBe("true");
  });
});

describe("CommentSide", () => {
  it("renders side content and an avatar thread line", () => {
    render(
      <Comment>
        <CommentSide className="custom-side" data-testid="side">
          <CommentBody>Side comment</CommentBody>
        </CommentSide>
      </Comment>,
    );

    const side = screen.getByTestId("side");
    expect(side.getAttribute("role")).toBe("comment side");
    expect(side.getAttribute("data-slot")).toBe("comment-side");
    expect(side.className).toContain("custom-side");
    expect(side.textContent).toContain("Side comment");
    expect(side.querySelector('[data-slot="comment-thread"]')).not.toBeNull();
  });

  it("can render a side with no children", () => {
    render(
      <Comment>
        <CommentSide data-testid="empty-side" />
      </Comment>,
    );
    expect(screen.getByTestId("empty-side").childElementCount).toBe(1); // generated thread line
  });
});

describe("CommentThreadLine", () => {
  it("renders reply thread rail, vertical line, and bend", () => {
    render(
      <Comment>
        <CommentThreadLine data-testid="reply-thread" varients="reply" />
      </Comment>,
    );

    const thread = screen.getByTestId("reply-thread");
    expect(thread.getAttribute("role")).toBe("threadline");
    expect(thread.getAttribute("data-slot")).toBe("comment-thread");
    expect(thread.querySelector('[data-thread="vertical"]')).not.toBeNull();
    expect(thread.querySelector('[data-thread="bend"]')).not.toBeNull();
  });

  it("renders avatar variant with no bend", () => {
    render(
      <Comment>
        <CommentThreadLine varients="avatar" data-testid="avatar-thread" />
      </Comment>,
    );

    const thread = screen.getByTestId("avatar-thread");
    expect(thread.querySelector('[data-thread="vertical"]')).not.toBeNull();
    expect(thread.querySelector('[data-thread="bend"]')).toBeNull();
  });

  it("hides all thread decorations when threads are disabled", () => {
    render(
      <Comment disableThreads>
        <CommentThreadLine varients="reply" data-testid="disabled-thread" />
      </Comment>,
    );

    const thread = screen.getByTestId("disabled-thread");
    expect(thread.querySelector('[data-thread="vertical"]')).toBeNull();
    expect(thread.querySelector('[data-thread="bend"]')).toBeNull();
    expect(thread.querySelector('[data-slot="comment-rail"]')).toBeNull();
  });

  it("hides only the bend when bending is disabled", () => {
    render(
      <Comment disableBend>
        <CommentThreadLine varients="reply" data-testid="no-bend-thread" />
      </Comment>,
    );

    const thread = screen.getByTestId("no-bend-thread");
    expect(thread.querySelector('[data-thread="vertical"]')).not.toBeNull();
    expect(thread.querySelector('[data-thread="bend"]')).toBeNull();
  });

  it("throws a clear error outside the Comment provider", () => {
    expect(() => render(<CommentThreadLine />)).toThrow(
      "useThreadLine` can only be used within components wrapped by CommentThreadLineProvider",
    );
  });

  it("renders exported vertical and bend subcomponents independently", () => {
    render(
      <div>
        <ThreadVertical />
        <ThreadBend>
          <span>Connector</span>
        </ThreadBend>
      </div>,
    );

    expect(
      document.querySelector('[data-thread="vertical"]')?.getAttribute("role"),
    ).toBe("thread vertical line");
    const bend = document.querySelector('[data-thread="bend"]');
    expect(bend?.textContent).toBe("Connector");
  });
});
