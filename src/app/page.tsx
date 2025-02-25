import Carousel from '@/components/Carousel';
import styles from '../styles/app.module.scss';
import OurCourses from '@/sections/OurCourses';
import LastBlogPosts from '@/sections/LastBlogPosts';
import WhoWeAre from '@/sections/WhoWeAre';
import Depoiments from '@/sections/Depoiments';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <Carousel
            items={[
              {
                image: '/images/background-1.png',
                hollowText: 'Invista no',
                title: 'seu futuro',
                titleMarked: 'profissional',
                buttonPrimary: 'Saiba mais',
                buttonSecondary: 'Entrar em contato',
              },
            ]}
          />

          <OurCourses />

          <LastBlogPosts
            posts={[
              {
                id: 1,
                title: 'A Importância da Boa Formação',
                excerpt:
                  'Não só a força física, mas a inteligência é essencial para a atividade. Neste ramo de atuação, é incontestável que exista a necessidade de uma boa formação em academias especializadas de vigilantes, isso não apenas para cumprir a exigência do mercado, após formação, o profissional deverá estar preparado e capacitado a ser empregado em setores',
                imageUrl: '/images/background-2.jpg',
              },
              {
                id: 2,
                title: 'A Importância da Boa Formação',
                excerpt:
                  'Não só a força física, mas a inteligência é essencial para a atividade. Neste ramo de atuação, é incontestável que exista a necessidade de uma boa formação em academias especializadas de vigilantes, isso não apenas para cumprir a exigência do mercado, após formação, o profissional deverá estar preparado e capacitado a ser empregado em setores',
                imageUrl: '/images/background-2.jpg',
              },
              {
                id: 3,
                title: 'A Importância da Boa Formação',
                excerpt:
                  'Não só a força física, mas a inteligência é essencial para a atividade. Neste ramo de atuação, é incontestável que exista a necessidade de uma boa formação em academias especializadas de vigilantes, isso não apenas para cumprir a exigência do mercado, após formação, o profissional deverá estar preparado e capacitado a ser empregado em setores',
                imageUrl: '/images/background-2.jpg',
              },
            ]}
          />

          <WhoWeAre />

          <Depoiments />

          <Contact />
        </main>
      </div>
    </>
  );
}
