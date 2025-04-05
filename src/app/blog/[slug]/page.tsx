/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import styles from './styles.module.scss';
import BlogHeader from '../components/BlogHeader';
import BlogFilters from '../components/BlogFilters';
import Image from 'next/image';
import LastBlogPosts from '@/sections/LastBlogPosts';

interface BlogPostProps {
  title: string;
  content: string;
  image: string;
}

async function fetchPost(slug: string): Promise<BlogPostProps | undefined> {
  try {
    // Simulação de chamada à API
    console.log('slug recebido:', slug);
    return {
      title: 'A Importância da Boa Formação',
      image: 'https://academiamontecastelo.com.br/wp-content/uploads/2020/01/post-1.jpg',
      content: '<p>Não só a força física, mas a inteligência é essencial para a atividade...</p>',
    };
  } catch (error: any) {
    console.error(error);
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <BlogHeader />

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.header}>
            <h1>{post.title}</h1>
            <figure>
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
            </figure>
          </div>

          <div className={styles.text} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <BlogFilters />
      </div>

      <div className={styles.lastPosts}>
        <LastBlogPosts
          posts={[
            {
              id: 1,
              title: 'A Importância da Boa Formação',
              excerpt: 'Não só a força física, mas a inteligência é essencial para a atividade...',
              imageUrl: '/images/background-2.jpg',
            },
            {
              id: 2,
              title: 'A Importância da Boa Formação',
              excerpt: 'Não só a força física, mas a inteligência é essencial para a atividade...',
              imageUrl: '/images/background-2.jpg',
            },
            {
              id: 3,
              title: 'A Importância da Boa Formação',
              excerpt: 'Não só a força física, mas a inteligência é essencial para a atividade...',
              imageUrl: '/images/background-2.jpg',
            },
          ]}
        />
      </div>

      <div className={styles.divider} />
    </div>
  );
}
