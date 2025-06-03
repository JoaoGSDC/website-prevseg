/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaMagnifyingGlass,
  FaMapLocationDot,
  FaRegMessage,
  FaBars,
  FaWhatsapp,
} from 'react-icons/fa6';
import { scrollToSection } from '@/utils/scrollToSection';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarTop}>
        <div className={styles.optionsContainer}>
          <div className={styles.contact}>
            <FaRegMessage />
            {`Entre em contato: (19) 34426055`}
          </div>

          <div className={styles.address}>
            <FaMapLocationDot />
            {`Av. Dr. Alfredo Ferraz de Abreu, 1394, Centro, Limeira-SP`}
          </div>
        </div>

        <div className={styles.optionsContainer}>
          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/prevseglimeira/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/prevseglimeira" target="_blank">
              <FaFacebook />
            </a>
          </div>

          <button>
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>

      <div className={styles.navbarBottom}>
        <div className={styles.optionsContainer}>
          <figure>
            <Image src="/logo.png" alt="logo" fill />
          </figure>

          {isMobile ? (
            <button className={styles.hamburger} onClick={toggleMenu}>
              {menuOpen ? null : <FaBars />}
            </button>
          ) : (
            <>
              <Link href="/">
                <p>INÍCIO</p>
              </Link>

              <a onClick={() => scrollToSection('quem-somos')}>
                <p>QUEM SOMOS</p>
              </a>

              <a onClick={() => scrollToSection('cursos')}>
                <p>CURSOS</p>
              </a>

              <Link href="/blog">
                <p>BLOG</p>
              </Link>

              <a onClick={() => scrollToSection('depoimentos')}>
                <p>DEPOIMENTOS</p>
              </a>

              <a onClick={() => scrollToSection('contato')}>
                <p>CONTATO</p>
              </a>
            </>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeMenu} onClick={toggleMenu}>
            <IoClose />
          </button>

          <Link href="/" onClick={toggleMenu}>
            <p>INÍCIO</p>
          </Link>

          <a
            onClick={() => {
              scrollToSection('quem-somos');
              toggleMenu();
            }}
          >
            <p>QUEM SOMOS</p>
          </a>

          <a
            onClick={() => {
              scrollToSection('cursos');
              toggleMenu();
            }}
          >
            <p>CURSOS</p>
          </a>

          <Link href="/blog" onClick={toggleMenu}>
            <p>BLOG</p>
          </Link>

          <a
            onClick={() => {
              scrollToSection('depoimentos');
              toggleMenu();
            }}
          >
            <p>DEPOIMENTOS</p>
          </a>

          <a
            onClick={() => {
              scrollToSection('contato');
              toggleMenu();
            }}
          >
            <p>CONTATO</p>
          </a>

          <div className={styles.socialMedia}>
            <a href="https://api.whatsapp.com/send?phone=5519974102924" target="_blank">
              <FaWhatsapp />
            </a>

            <a href="https://www.instagram.com/academiamontecastelooficial/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/academiamontecastelo" target="_blank">
              <FaFacebook />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
