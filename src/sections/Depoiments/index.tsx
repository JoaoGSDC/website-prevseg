'use client';

import React from 'react';
import styles from './styles.module.scss';
import button from '../../styles/button.module.scss';
import Image from 'next/image';

const Depoiments: React.FC = () => {
  return (
    <>
      <section id="depoimentos" className={styles.container}>
        <div className={styles.video}>
          <figure>
            <Image src="/logo.png" alt="logo" fill />
          </figure>
        </div>

        <div className={styles.depoiments}>
          <div className={styles.title}>
            <h4>Trabalhe conosco</h4>
            <h1>Seja um profissional PrevSeg!</h1>
          </div>

          <div className={styles.depoimentContainer}>
            <div className={styles.depoimentHeader}>
              <p>Ensino de excelência que forma profissionais verdadeiramente capacitados.</p>
            </div>

            <div className={styles.depoimentContent}>
              <form className={styles.form}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Telefone" />
                <input type="file" accept="application/pdf" />

                <button type="submit" className={button.primaryVariant}>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Depoiments;
