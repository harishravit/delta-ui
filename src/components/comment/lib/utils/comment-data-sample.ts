
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

type Replies = IComment & { parentId: string };
export interface IComment {
  id: string;
  user: CommentUser;
  message: CommentMessage;
  createdAt: string;
  likes: number;
  dislikes: number;
  isEdited?: boolean;
  replies: Replies[];
}

