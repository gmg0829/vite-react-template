import { Post } from '../../types';
import { PostCard } from './PostCard';
import styles from './PostList.module.css';

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No posts found.</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {posts.map((post, index) => (
        <div 
          key={post.slug} 
          className={styles.item}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
