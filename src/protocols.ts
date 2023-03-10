export type User = {
  id: number;
  username: string;
  picture: null | string;
  createdAt: Date | string;
  deletedAt: null;
};

export type Comment = {
  id: number;
  postId: number;
  userId: number;
  description: string;
  createdAt: Date | string;
  deletedAt: null;
  Users: Omit<User, "createdAt" | "deletedAt">;
};

export type Post = {
  id: number;
  userId: number;
  description: string;
  image: null | string;
  createdAt: Date | string;
  deletedAt: null;
  Users: User;
};

export type Theme = {
  backgroundPrincipal: string;
  backgroundSecundary: string;
  fontColor: string;
};
