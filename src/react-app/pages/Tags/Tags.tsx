import { Link } from 'react-router-dom';
import { Tag as TagIcon } from 'lucide-react';
import { getAllTags } from '../../data';
import styles from './Tags.module.css';

export function Tags() {
  const tags = getAllTags();

  return (
    <div className={styles.tagsPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <TagIcon size={32} />
            All Tags
          </h1>
          <p className={styles.subtitle}>
            Browse articles by topic
          </p>
        </div>

        <div className={styles.grid}>
          {tags.map((tag, index) => (
            <Link
              key={tag.name}
              to={`/tags/${tag.name}`}
              className={styles.tagCard}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className={styles.tagName}>{tag.name}</span>
              <span className={styles.tagCount}>{tag.count} articles</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
