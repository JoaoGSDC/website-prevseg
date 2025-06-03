'use client';

import styles from './styles.module.scss';
import { GiFactory, GiHealthNormal, GiHomeGarage, GiPartyPopper, GiShoppingBag, GiTeacher } from 'react-icons/gi';
import Link from 'next/link';
import Subtitle from '@/components/Subtitle';
import { scrollToSection } from '@/utils/scrollToSection';

export default function OurCourses() {
  return (
    <section id="cursos" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Subtitle text="Onde atuamos" />

          <div className={styles.title}>
            <h1>Áreas de atuação</h1>

            <p>
              Atuamos com excelência em segurança patrimonial, pessoal e eletrônica, oferecendo soluções completas e
              personalizadas para cada cliente. Nossa missão é proteger com eficiência e responsabilidade, garantindo
              tranquilidade e confiança por meio de equipes treinadas, tecnologia de ponta e rigoroso cumprimento das
              normas de segurança.
            </p>
          </div>
        </div>

        <div className={styles.courses}>
          <div className={styles.course}>
            <div className={styles.image}>
              <GiHomeGarage />
              <span>☆</span>
            </div>

            <div className={styles.courseContent}>
              <h4>Proteção 24 horas por dia</h4>
              <h1>Condomínios residenciais e empresariais</h1>
              <hr />
              <p>Segurança preventiva e controle de acesso para proteger moradores, visitantes e patrimônios.</p>
              <button onClick={() => scrollToSection('contato')}>
                <Link href="#">Ver mais +</Link>
              </button>
            </div>
          </div>

          <div className={styles.course}>
            <div className={styles.image}>
              <GiHealthNormal />
              <span>☆</span>
            </div>

            <div className={styles.courseContent}>
              <h4>Cuidado com segurança</h4>
              <h1>Clínicas e hospitais</h1>
              <hr />
              <p>
                Controle de fluxo e vigilância especializada para ambientes de saúde com foco em proteção e bem-estar.
              </p>
              <button onClick={() => scrollToSection('contato')}>
                <Link href="#">Ver mais +</Link>
              </button>
            </div>
          </div>

          <div className={styles.course}>
            <div className={styles.image}>
              <GiPartyPopper />
              <span>☆</span>
            </div>

            <div className={styles.courseContent}>
              <h4>Segurança para grandes públicos</h4>
              <h1>Eventos em geral</h1>
              <hr />
              <p>
                Planejamento estratégico e equipes treinadas para garantir a segurança de eventos de todos os portes.
              </p>
              <button onClick={() => scrollToSection('contato')}>
                <Link href="#">Ver mais +</Link>
              </button>
            </div>
          </div>

          <div className={styles.course}>
            <div className={styles.image}>
              <GiFactory />
              <span>☆</span>
            </div>

            <div className={styles.courseContent}>
              <h4>Proteção do patrimônio empresarial</h4>
              <h1>Empresas e indústrias</h1>
              <hr />
              <p>
                Soluções de vigilância para áreas industriais e corporativas, com foco na prevenção de riscos e perdas.
              </p>
              <button onClick={() => scrollToSection('contato')}>
                <Link href="#">Ver mais +</Link>
              </button>
            </div>
          </div>

          <div className={styles.course}>
            <div className={styles.image}>
              <GiTeacher />
              <span>☆</span>
            </div>

            <div className={styles.courseContent}>
              <h4>Ambiente seguro para aprender</h4>
              <h1>Instituições de ensino</h1>
              <hr />
              <p>Presença vigilante e protocolos de segurança adaptados para escolas, faculdades e universidades.</p>
              <button onClick={() => scrollToSection('contato')}>
                <Link href="#">Ver mais +</Link>
              </button>
            </div>
          </div>

          <div className={styles.course}>
            <div className={styles.image}>
              <GiShoppingBag />
              <span>☆</span>
            </div>

            <div className={styles.courseContent}>
              <h4>Segurança e conforto para clientes</h4>
              <h1>Shoppings</h1>
              <hr />
              <p>
                Vigilância estratégica, controle de acessos e suporte para uma experiência segura em centros comerciais.
              </p>
              <button onClick={() => scrollToSection('contato')}>
                <Link href="#">Ver mais +</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
