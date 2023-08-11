import React from 'react';
import Image from 'next/image';
import styles from './info.module.scss';

interface HalalCardProps {
  image: string;
  title: string;
  description: string;
}

const HalalCard: React.FC<HalalCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.cards}>
    <div className={styles.halalCard}>
      <div className={styles.halalCardImage}>
        <Image src={image} alt="halal" width={200} height={100} objectFit="contain" />
      </div>
      <div className={styles.halalCardContent}>
        <h2 className={styles.halalCardTitle}>{title}</h2>
        <p className={styles.halalCardDescription}>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default HalalCard;