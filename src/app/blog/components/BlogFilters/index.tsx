import React from 'react';
import styles from './styles.module.scss';
import Subtitle from '@/components/Subtitle';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const BlogFilters: React.FC = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <Subtitle text="Pesquisar" color="var(--text-primary)" weight={700} size={16} />

        <div className={styles.input}>
          <input type="text" placeholder="Pesquisar..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className={styles.categories}>
        <Subtitle text="Categorias" color="var(--text-primary)" weight={700} size={16} />
        <ul>
          <li>
            <Link href="#">Segurança</Link>
          </li>
          <li>
            <Link href="#">Vigilância</Link>
          </li>
          <li>
            <Link href="#">CFTV</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogFilters;
