import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, Eye, Calendar, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug, posts } from '../../data';
import styles from './PostDetail.module.css';

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </div>
    );
  }

  const currentIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to articles
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>
              <Calendar size={14} />
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>
              <Clock size={14} />
              {post.readingTime} min read
            </span>
            <span className={styles.separator}>•</span>
            <span className={styles.views}>
              <Eye size={14} />
              {post.views} views
            </span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`} className={styles.tag}>
                <Tag size={12} />
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <Markdown
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const isInline = !match;
                return isInline ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                );
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>

        <nav className={styles.navigation}>
          {prevPost ? (
            <Link to={`/post/${prevPost.slug}`} className={styles.navLink}>
              <ArrowLeft size={16} />
              <div>
                <span className={styles.navLabel}>Previous</span>
                <span className={styles.navTitle}>{prevPost.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link to={`/post/${nextPost.slug}`} className={`${styles.navLink} ${styles.next}`}>
              <div>
                <span className={styles.navLabel}>Next</span>
                <span className={styles.navTitle}>{nextPost.title}</span>
              </div>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </article>
  );
}
