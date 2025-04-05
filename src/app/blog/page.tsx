import { Metadata } from 'next';
import styles from './styles.module.scss';
import BlogHeader from './components/BlogHeader';
import BlogPosts from './components/BlogPosts';
import BlogFilters from './components/BlogFilters';
import PaginationWrapper from './components/PaginationWrapper';

interface BlogProps {
  posts: {
    id: string;
    title: string;
    image: string;
    preview: string;
    category: string;
    date: string;
    author: string;
  }[];
}

export const metadata: Metadata = {
  title: 'Blog',
};

const fetchPosts = async (): Promise<BlogProps> => {
  return {
    posts: [
      {
        id: '1',
        title: 'A Importância da Boa Formação',
        image: 'https://academiamontecastelo.com.br/wp-content/uploads/2020/01/post-1.jpg',
        preview:
          'Não só a força física, mas a inteligência é essencial para a atividade. Neste ramo de atuação, é incontestável que exista a necessidade de uma boa formação em academias especializadas de vigilantes, isso não apenas para cumprir a exigência do mercado, após formação, o profissional deverá estar preparado e capacitado a ser empregado em setores públicos ou privados, armados ou desarmados.',
        category: 'Segurança',
        date: '2020-01-02',
        author: 'Academia Monte Castelo',
      },
      {
        id: '2',
        title: 'A Busca Constante pela Qualificação e Aprimoramento Profissional',
        image: 'https://academiamontecastelo.com.br/wp-content/uploads/2020/01/ARTIGO2-B.jpg',
        preview:
          'O vigilante deve estar sempre atento a cursos e instruções que os capacite e qualifique, estudam as tecnologias de segurança do mercado, aprendem operações de vídeo vigilância, monitoramento de câmeras e equipamentos eletrônicos, além de treinamento de tiro defensivo.',
        category: 'Segurança',
        date: '2020-01-02',
        author: 'Academia Monte Castelo',
      },
      {
        id: '3',
        title: 'O Vigilante na Segurança Privada',
        image: 'https://academiamontecastelo.com.br/wp-content/uploads/2019/11/ARTIGO-1-B.jpg',
        preview:
          'No Brasil, os agentes de segurança autorizados a atuar oﬁcialmente no setor da segurança privada “armada ou desarmada” são profissionais designados pela legislação como “vigilantes”.',
        category: 'Segurança',
        date: '2019-09-11',
        author: 'Academia Monte Castelo',
      },
    ],
  };
};

const Blog = async () => {
  const content = await fetchPosts();

  return (
    <div className={styles.container}>
      <BlogHeader />

      <div className={styles.content}>
        <BlogPosts content={content} />
        <BlogFilters />
      </div>

      <PaginationWrapper totalPages={1} />
    </div>
  );
};

export default Blog;
