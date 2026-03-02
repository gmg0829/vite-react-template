import { Github, Twitter, Mail, Heart, Sparkles } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Sparkles className={styles.icon} />
            <span className={styles.brandName}>Blog</span>
            <p className={styles.description}>
              Sharing knowledge and experiences about web development.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <a href="/" className={styles.link}>Home</a>
              <a href="/blog" className={styles.link}>Articles</a>
              <a href="/tags" className={styles.link}>Tags</a>
              <a href="/about" className={styles.link}>About</a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Social</h4>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Github size={16} /> GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Twitter size={16} /> Twitter
              </a>
              <a href="mailto:hello@example.com" className={styles.link}>
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Built with <Heart size={14} className={styles.heart} /> using React + Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}
