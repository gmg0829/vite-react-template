import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag as TagIcon } from 'lucide-react';
import { PostList } from '../../components/Post';
import { getPostsByTag } from '../../data';
import styles from './TagPosts.module.css';

export function TagPosts() {
  const { tag } = useParams<{ tag: string }>();
  const decodedTag = decodeURIComponent(tag || '');
  const posts = getPostsByTag(decodedTag);

  return (
    <div className={styles.tagPosts}>
      <div className={styles.container}>
        <Link to="/tags" className={styles.backLink}>
          <ArrowLeft size={18} />
          All tags
        </Link>

        <div className={styles.header}>
          <div className={styles.tagIcon}>
            <TagIcon size={24} />
          </div>
          <h1 className={styles.title}>{decodedTag}</h1>
          <p className={styles.count}>{posts.length} articles</p>
        </div>

        <PostList posts={posts} />

        {posts.length === 0 && (
          <div className={styles.empty}>
            <p>No articles found for this tag.</p>
          </div>
        )}
      </div>
    </div>
  );
}
