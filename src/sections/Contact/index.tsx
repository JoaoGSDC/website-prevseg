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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.263005002458!2d-47.4083415!3d-22.5692646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c880f369ac0105%3A0x8ba3761550b46ac0!2sPrevseg%20Seguran%C3%A7a%20Privada!5e0!3m2!1spt-BR!2sbr!4v1748977797173!5m2!1spt-BR!2sbr"
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
