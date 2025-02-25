import React from 'react';
import styles from './styles.module.scss';
import button from '../../styles/button.module.scss';
import Subtitle from '@/components/Subtitle';

const Contact: React.FC = () => {
  return (
    <section id="contato" className={styles.container}>
      <Subtitle text="Contato" />
      <h1>Entre em contato conosco</h1>

      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="Nome" />
          <input type="tel" placeholder="Telefone" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Assunto" />
          <textarea placeholder="Mensagem" />

          <button type="submit" className={button.primaryVariant}>
            Enviar
          </button>
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3684.8147022663925!2d-47.378772!3d-22.548613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fdfeecccebf6b1%3A0xe30c62ec78f271eb!2sAcademia%20Monte%20Castelo!5e0!3m2!1spt-BR!2sbr!4v1738373492662!5m2!1spt-BR!2sbr"
          style={{ border: 0, flex: 1 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
