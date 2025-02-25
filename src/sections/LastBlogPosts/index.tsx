import Subtitle from '@/components/Subtitle';
import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import { FaRegNewspaper } from 'react-icons/fa6';
import Link from 'next/link';

interface LastBlogPostsProps {
  posts?: {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
  }[];
}

const LastBlogPosts: React.FC<LastBlogPostsProps> = ({ posts }) => {
  return (
    <section className={styles.container}>
      <Subtitle text="Novidades do blog" color="#fff" />

      <h1>Confira as últimas postagens do nosso blog</h1>

      <div className={styles.cards}>
        {posts?.map((post) => (
          <Link href={'#'} key={post.id} className={styles.card}>
            <figure className={styles.figure}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="responsive"
                width={500}
                height={300}
                className={styles.image}
              />
            </figure>

            <div className={styles.textContent}>
              <div className={styles.block}>
                <FaRegNewspaper />
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LastBlogPosts;
