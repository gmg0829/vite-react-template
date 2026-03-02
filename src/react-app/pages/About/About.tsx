import { Github, Twitter, Mail, MapPin, Code, Heart } from 'lucide-react';
import { defaultAuthor } from '../../data';
import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.avatarWrapper}>
            <img 
              src={defaultAuthor.avatar} 
              alt={defaultAuthor.name}
              className={styles.avatar}
            />
          </div>
          
          <h1 className={styles.name}>{defaultAuthor.name}</h1>
          <p className={styles.bio}>{defaultAuthor.bio}</p>
          
          <div className={styles.location}>
            <MapPin size={16} />
            <span>Shanghai, China</span>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>
              <Code size={20} />
              About Me
            </h2>
            <p>
              I'm a passionate full-stack developer with a keen interest in building 
              beautiful and performant web applications. I love working with modern 
              technologies like React, TypeScript, and cloud platforms.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or sharing knowledge through 
              technical writing.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              <Heart size={20} />
              Interests
            </h2>
            <ul className={styles.interests}>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Open Source</li>
              <li>Cloud Computing</li>
              <li>Machine Learning</li>
              <li>Technical Writing</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Connect</h2>
            <div className={styles.social}>
              {defaultAuthor.github && (
                <a 
                  href={defaultAuthor.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Github size={20} />
                  GitHub
                </a>
              )}
              {defaultAuthor.twitter && (
                <a 
                  href={defaultAuthor.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Twitter size={20} />
                  Twitter
                </a>
              )}
              {defaultAuthor.email && (
                <a 
                  href={`mailto:${defaultAuthor.email}`}
                  className={styles.socialLink}
                >
                  <Mail size={20} />
                  Email
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
