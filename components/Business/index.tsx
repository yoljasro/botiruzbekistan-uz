import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
// next components
import Image from 'next/image';
import styles from './index.module.scss';

interface BusinessProps {
  title: string;
  description: string;
  businesses: Business[];
  trade?: string;
  it?: string
}

interface Business {
  name: any;
  description: string;
  icon: React.ReactNode;
  trade?: string;
  it? : string;
}

export const Business: React.FC<BusinessProps> = ({ title, description, businesses }) => {
  return (
    <div className={styles.businessComponent}>
      <div className={styles.businessHeader}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
      </div>
      <div className={styles.businessCards}>
        {businesses.map((business, index) => (
          <div className={styles.businessCard} key={index}>
            <div className={styles.businessIcon}>
              {/* <Image src={'/img/hokimiyat'} alt='icon'/>  */} 
              {/* // fdfd */}
            </div>
            <h3 className={styles.name}>{business.name}</h3>
            <div className={styles.spans}>
            <p className={styles.info}>{business.description}</p>
            <span>
              {business.trade}
            </span> <br />
            <span className={styles.company}>
              {business.it}
            </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
