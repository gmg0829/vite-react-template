import { Author } from '../types';

export const defaultAuthor: Author = {
  name: 'Your Name',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=blog',
  bio: 'Full Stack Developer | UI/UX Enthusiast | Open Source Contributor',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  email: 'hello@example.com',
};

export const authors = {
  default: defaultAuthor,
};
