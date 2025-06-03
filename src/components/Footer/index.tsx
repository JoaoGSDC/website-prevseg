/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollToSection';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Sobre nós</h3>
          <p>
            A PREVSEG é uma empresa de segurança privada especializada em vigilância patrimonial, devidamente autorizada
            pelo Departamento de Polícia Federal (DPF) para atuar no setor. Com ampla experiência e compromisso com a
            legalidade, a PREVSEG possui o Certificado de Regularidade de Situação de Funcionamento de Segurança
            Especializada, emitido pelo DECADE/DPCRD da Secretaria de Segurança Pública do Estado de São Paulo.
          </p>
          <p>
            Além disso, a empresa conta com o Certificado de Regularidade de Segurança (CRS) concedido pelo SESVESP
            (Sindicato das Empresas de Segurança Privada do Estado de São Paulo), reforçando seu compromisso com a
            conformidade legal e a excelência nos serviços prestados.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Endereço</h3>
          <p>Av. Dr. Alfredo Ferraz de Abreu, 1394, Centro, Limeira-SP</p>
          <figure>
            <Image src="/images/map.webp" alt="map" fill />
          </figure>
        </div>

        <div className={styles.column}>
          <h3>Contatos</h3>
          <a href="https://api.whatsapp.com/send?phone=5519974102924">
            <p className={styles.option}>
              <FaWhatsapp />
              (19) 34426055
            </p>
          </a>

          <div className={styles.column} style={{ marginTop: 32 }}>
            <h3>Horário de funcionamento</h3>
            <p>Segunda a sexta: 7h às 18h</p>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Navegação</h3>

          <Link href="/">
            <p className={styles.option}>INÍCIO</p>
          </Link>

          <p className={styles.option} onClick={() => scrollToSection('quem-somos')}>
            QUEM SOMOS
          </p>

          <p className={styles.option} onClick={() => scrollToSection('cursos')}>
            CURSOS
          </p>

          <Link href="/blog">
            <p className={styles.option}>BLOG</p>
          </Link>

          <p className={styles.option} onClick={() => scrollToSection('depoimentos')}>
            DEPOIMENTOS
          </p>

          <p className={styles.option} onClick={() => scrollToSection('contato')}>
            CONTATO
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} PrevSeg. All rights reserved.</p>

        <figure>
          <Image src="/logo.png" alt="logo" fill />
        </figure>

        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/prevseglimeira/" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/prevseglimeira" target="_blank">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
