export interface Author {
  name: string;
  avatar: string;
  bio: string;
  github?: string;
  twitter?: string;
  email?: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage?: string;
  date: string;
  tags: string[];
  readingTime: number;
  views: number;
  author: Author;
}

export interface Tag {
  name: string;
  count: number;
  color?: string;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface PostResponse {
  post: Post;
  prevPost?: Post;
  nextPost?: Post;
}

export interface TagsResponse {
  tags: Tag[];
}
