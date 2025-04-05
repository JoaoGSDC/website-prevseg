import React from 'react';

import styles from './styles.module.scss';

interface SubtitleProps {
  text: string;
  color?: string;
  weight?: number;
  size?: number;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color = 'var(--text-tertiary)', weight, size }) => {
  return (
    <div className={styles.subtitle}>
      <h3 style={{ color, fontSize: size, fontWeight: weight }}>{text}</h3>
    </div>
  );
};

export default Subtitle;
