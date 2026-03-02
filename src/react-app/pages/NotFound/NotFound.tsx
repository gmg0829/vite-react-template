import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.primaryButton}>
            <Home size={18} />
            Go Home
          </Link>
          <Link to="/blog" className={styles.secondaryButton}>
            <Search size={18} />
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
