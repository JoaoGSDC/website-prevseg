import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IPost } from '@/interfaces/post.interface';

interface BlogPostsProps {
  content: {
    posts: IPost[];
  };
}

const BlogPosts = ({ content }: BlogPostsProps) => {
  return (
    <div className={styles.posts}>
      <ul>
        {content.posts.map((post) => (
          <li key={post._id} className={styles.post}>
            <figure>
              <Link
                href={`/blog/${
                  post.title
                    .toLowerCase()
                    .normalize('NFD') // separa letras de acentos
                    .replace(/[\u0300-\u036f]/g, '') // remove acentos
                    .replace(/[^\w\s-]/g, '') // remove caracteres especiais
                    .trim()
                    .replace(/\s+/g, '-') // substitui espaços por hífens
                }
                  `}
              >
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
              </Link>
            </figure>

            <div className={styles.text}>
              <div className={styles.info}>
                <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown Date'}</span>
                <span>{post.author}</span>
                <span>{post.category}</span>
              </div>

              <h2>{post.title}</h2>

              <p>{post.excerpt}</p>

              <Link
                href={`/blog/${
                  post.title
                    .toLowerCase()
                    .normalize('NFD') // separa letras de acentos
                    .replace(/[\u0300-\u036f]/g, '') // remove acentos
                    .replace(/[^\w\s-]/g, '') // remove caracteres especiais
                    .trim()
                    .replace(/\s+/g, '-') // substitui espaços por hífens
                }
                  `}
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
