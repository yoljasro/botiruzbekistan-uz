  import React from 'react';
  import HalalCard from './info';
  import styles from './index.module.scss';
  import { useTranslations } from 'next-intl';

  export const Halal: React.FC = () => {
    const t = useTranslations()
    return (
      <div className={styles.halal}>
        <div>
        <h2 className={styles.halalTitle}>{t("work.title")}</h2>
        <p className={styles.halalDescription}>
        {t("work.info")}
        </p>
        </div>
        <div className={styles.halalCardsContainer}>
          <HalalCard
            image="/img/gerbb.png"
            title={t("work.embassy")}
            description={t("work.embassyInfo")}
          />
          <HalalCard
            image="/img/turismm.png"
            title={t("work.tourism")}
            description={t("work.tourismInfo")}
          />
          <HalalCard
            image="/img/hokmmm.png"
            title={t("work.region")}
            description={t("work.regionInfo")}
          />
          <HalalCard
            image="/img/halal.svg"
            title={t("work.worldHalal")}
            description={t("work.worldHalalInfo")}
          />
        </div>
      </div>
    );
  };
