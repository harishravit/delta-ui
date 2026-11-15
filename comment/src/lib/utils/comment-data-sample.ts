import { formatCommentTime, getAvatar } from "@/lib/utils/helpers";

export interface CommentUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  company: string;
}

export interface CommentMedia {
  id: string;
  type: "image" | "gif" | "video";
  url: string;
  alt?: string;
}

export interface CommentMessage {
  text: string;
  media: CommentMedia[] | null;
}

export interface IComment {
  id: string;
  user: CommentUser;
  message: CommentMessage;
  createdAt: string;
  replies: IComment[];
  likes: number;
  dislikes: number;
  isEdited?: boolean;
}

export const comments: IComment[] = [
  {
    id: "comment-1",
    user: {
      id: "user-1",
      name: "Olivia Rhye",
      username: "olivia",
      avatar: getAvatar("olivia-rhye"),
      role: "Software Engineer",
      company: "Zoho",
    },
    message: {
      text: "I really like this design! The overall layout feels clean and intuitive.",
      media: null,
    },
    createdAt: formatCommentTime("2026-11-11T10:30:00Z"),
    likes: 24,
    dislikes: 0,
    replies: [
      {
        id: "reply-1",
        user: {
          id: "user-2",
          name: "Phoenix Baker",
          username: "phoenix",
          avatar: getAvatar("phoenix-baker"),
          role: "Product Designer",
          company: "Figma",
        },
        message: {
          text: "Agreed! The spacing and typography are really well balanced.",
          media: null,
        },
        createdAt: formatCommentTime("2026-11-11T11:00:00Z"),
        likes: 8,
        dislikes: 0,
        replies: [
          {
            id: "reply-1-1",
            user: {
              id: "user-3",
              name: "Lana Steiner",
              username: "lana",
              avatar: getAvatar("lana-steiner"),
              role: "Frontend Developer",
              company: "Vercel",
            },
            message: {
              text: "We should use this as our design reference 😂",
              media: [
                {
                  id: "media-1",
                  type: "image",
                  url: "https://i.pinimg.com/736x/a2/3f/ae/a23fae2d1e7d83eb0150dc64b12352b9.jpg",
                  alt: "Vadivelu surprised reaction meme",
                },
              ],
            },
            createdAt: formatCommentTime("2026-11-11T11:20:00Z"),
            likes: 5,
            dislikes: 0,
            replies: [],
          },
        ],
      },
      {
        id: "reply-2",
        user: {
          id: "user-4",
          name: "Demi Wilkinson",
          username: "demi",
          avatar: getAvatar("demi-wilkinson"),
          role: "UX Researcher",
          company: "Notion",
        },
        message: {
          text: "Looking forward to seeing the final implementation!",
          media: null,
        },
        createdAt: formatCommentTime("2026-11-11T12:00:00Z"),
        likes: 3,
        dislikes: 0,
        replies: [
          {
            id: "reply-2",
            user: {
              id: "user-4",
              name: "Demi Wilkinson",
              username: "demi",
              avatar: getAvatar("demi-wilkinson"),
              role: "UX Researcher",
              company: "Notion",
            },
            message: {
              text: "Looking forward to seeing the final implementation!",
              media: null,
            },
            createdAt: formatCommentTime("2026-11-11T12:00:00Z"),
            likes: 3,
            dislikes: 0,
            replies: [],
          },
          {
            id: "reply-2",
            user: {
              id: "user-4",
              name: "Wilkinson",
              username: "",
              avatar: getAvatar("demi-wilkinson"),
              role: "UX Researcher",
              company: "Notion",
            },
            message: {
              text: "Looking forward to seeing the final implementation!",
              media: null,
            },
            createdAt: formatCommentTime("2026-11-11T12:00:00Z"),
            likes: 3,
            dislikes: 0,
            replies: [
              {
                id: "reply-2",
                user: {
                  id: "user-4",
                  name: "Demi Wilkinson",
                  username: "demi",
                  avatar: getAvatar("demi-wilkinson"),
                  role: "UX Researcher",
                  company: "Notion",
                },
                message: {
                  text: "Looking forward to seeing the final implementation!",
                  media: null,
                },
                createdAt: formatCommentTime("2026-11-11T12:00:00Z"),
                likes: 3,
                dislikes: 0,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },,
];
