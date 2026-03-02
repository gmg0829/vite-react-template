import { useState } from 'react';
import { Search } from 'lucide-react';
import { PostList } from '../../components/Post';
import { posts, getAllTags } from '../../data';
import styles from './BlogList.module.css';

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = getAllTags();

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = !selectedTag || 
      post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase());
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className={styles.blogList}>
      <div className={styles.header}>
        <h1 className={styles.title}>All Articles</h1>
        <p className={styles.subtitle}>
          Explore {posts.length} articles on web development, design, and technology.
        </p>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.tags}>
          <button
            className={`${styles.tagButton} ${!selectedTag ? styles.active : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag.name}
              className={`${styles.tagButton} ${selectedTag === tag.name ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag.name)}
            >
              {tag.name}
              <span className={styles.tagCount}>{tag.count}</span>
            </button>
          ))}
        </div>
      </div>

      <PostList posts={filteredPosts} />

      {filteredPosts.length === 0 && (
        <div className={styles.noResults}>
          <p>No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
