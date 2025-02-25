import React from 'react';

import styles from './styles.module.scss';

interface SubtitleProps {
  text: string;
  color?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color = 'var(--text-tertiary)' }) => {
  return (
    <div className={styles.subtitle}>
      <h3 style={{ color }}>{text}</h3>
    </div>
  );
};

export default Subtitle;
