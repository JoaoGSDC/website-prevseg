import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const BlogPosts: React.FC<{
  content: {
    posts: {
      id: string;
      title: string;
      image: string;
      preview: string;
      category: string;
      date: string;
      author: string;
    }[];
  };
}> = ({ content }) => {
  return (
    <div className={styles.posts}>
      <ul>
        {content.posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <figure>
              <Link
                href={`/blog/${post.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^a-z0-9-]/g, '')}`}
              >
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
              </Link>
            </figure>

            <div className={styles.text}>
              <div className={styles.info}>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.author}</span>
                <span>{post.category}</span>
              </div>

              <h2>{post.title}</h2>

              <p>{post.preview}</p>

              <Link
                href={`/blog/${post.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^a-z0-9-]/g, '')}`}
              >
                Leia mais +
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
