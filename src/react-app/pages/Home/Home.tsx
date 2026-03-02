import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Palette, Zap } from 'lucide-react';
import { PostList } from '../../components/Post';
import { getRecentPosts } from '../../data';
import styles from './Home.module.css';

export function Home() {
  const recentPosts = getRecentPosts(3);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gridPattern} />
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Welcome to my blog</span>
          </div>
          
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.gradient}>Your Name</span>
          </h1>
          
          <p className={styles.subtitle}>
            Full Stack Developer • UI/UX Enthusiast • Open Source Contributor
          </p>
          
          <p className={styles.description}>
            "Code changes the world, writing records growth."
            <br />
            Sharing my journey through code, design, and everything in between.
          </p>
          
          <div className={styles.cta}>
            <Link to="/blog" className={styles.primaryButton}>
              <span>Read Articles</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Code size={24} />
              </div>
              <h3>Clean Code</h3>
              <p>Writing maintainable and elegant code is my passion.</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Palette size={24} />
              </div>
              <h3>Beautiful Design</h3>
              <p>Creating delightful user experiences with modern UI/UX.</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Zap size={24} />
              </div>
              <h3>High Performance</h3>
              <p>Building fast and efficient applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className={styles.recentPosts}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Latest Articles</h2>
            <Link to="/blog" className={styles.viewAll}>
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <PostList posts={recentPosts} />
        </div>
      </section>
    </div>
  );
}
