import Subtitle from '@/components/Subtitle';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { GiEagleHead } from 'react-icons/gi';

const WhoWeAre: React.FC = () => {
  return (
    <section id="quem-somos" className={styles.container}>
      <Subtitle text="Quem somos" />
      <h1>Quem nós somos?</h1>

      <div className={styles.content}>
        <div className={styles.image}>
          <div className={styles.form} />

          <figure>
            <Image src="/images/teste.jpg" alt="Descrição da imagem" layout="responsive" width={500} height={300} />
          </figure>
        </div>

        <div className={styles.circle}>
          <GiEagleHead />
        </div>

        <div className={styles.textContent}>
          <h2>PrevSeg</h2>
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
      </div>
    </section>
  );
};

export default WhoWeAre;
