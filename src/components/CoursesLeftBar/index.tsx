import Link from 'next/link';
import { RiPoliceBadgeFill } from 'react-icons/ri';
import styles from './styles.module.scss';
import Image from 'next/image';

const CoursesLeftBar = () => {
  return (
    <aside className={styles.leftBarContainer}>
      <ul className={styles.leftBar}>
        <li>
          <Link href="/segmentos/condominios">Condomínios residenciais e empresariais</Link>
        </li>
        <li>
          <Link href="/segmentos/clinicas">Clínicas e hospitais</Link>
        </li>
        <li>
          <Link href="/segmentos/eventos">Eventos em geral</Link>
        </li>
        <li>
          <Link href="/segmentos/empresas">Empresas e indústrias</Link>
        </li>
        <li>
          <Link href="/segmentos/educacao">Instituições de ensino</Link>
        </li>
        <li>
          <Link href="/segmentos/shoppings">Shoppings</Link>
        </li>
      </ul>

      <div className={styles.infoContainer}>
        <div className={styles.icon}>
          <RiPoliceBadgeFill />
        </div>

        <h1>Excelência e legalidade em segurança privada</h1>
        <p>
          A PREVSEG é especializada em vigilância patrimonial, autorizada pelo Departamento de Polícia Federal e
          certificada pelo SESVESP, garantindo conformidade legal e qualidade nos serviços.
        </p>

        <a href="https://wa.me/5519974145216" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          Entre em contato
        </a>

        <figure>
          <Image src="/images/background-1.jpg" alt="background" width={400} height={200} />
        </figure>
      </div>
    </aside>
  );
};

export default CoursesLeftBar;
