import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { Post } from '../../types';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/post/${post.slug}`} className={styles.card}>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{format(new Date(post.date), 'MMM d, yyyy')}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.readTime}>
            <Clock size={14} />
            {post.readingTime} min read
          </span>
        </div>

        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>

        <div className={styles.footer}>
          <div className={styles.tags}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <span className={styles.readMore}>
            Read more <ArrowRight size={16} />
          </span>
        </div>
      </div>

      <div className={styles.glow} />
    </Link>
  );
}
