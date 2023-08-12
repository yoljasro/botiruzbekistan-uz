  import React from 'react';
  import HalalCard from './info';
  import styles from './index.module.scss';
  import { useTranslations } from 'next-intl';

  export const Halal: React.FC = () => {
    const t = useTranslations()
    return (
      <div className={styles.halal}>
        <div>
        <h2 className={styles.halalTitle}>Davlat xizmati</h2>
        <p className={styles.halalDescription}>
          Ushbu bolimda siz Botir Uzbekistaning davlat idoralaridagi faoliyati bilan tanishishingiz mumkin:
        </p>
        </div>
        <div className={styles.halalCardsContainer}>
          <HalalCard
            image="/img/gerbb.png"
            title="O'zbekistaon Respublikasining Latviya Respublikasidagi Elchixonasi"
            description="Diplomatik vakolatxona faoliyatiga yaqinda ko'mak berganligi uchun O'zbekiston Respublikasining Latviya Respublikasidagi Favqulodda va Muxtor Elchisi tomonidan taqdirlangan."
          />
          <HalalCard
            image="/img/turismm.png"
            title="Turizm Rivojlantirish Davlat Qo'mitasi"
            description="Yevropa Ittifoqiga kiradigan Latviya davlatining poytaxti Rigada O'zbekiston Respublikasining Turizm salohiyatini targ'ibot ishlarini amalga oshirgan."
          />
          <HalalCard
            image="/img/hokmmm.png"
            title="Toshkent viloyati Qibray Tumani Hokimligi"
            description="Investitsiya bo'limining bosh mutaxassisi"
          />
          <HalalCard
            image="/img/halal.svg"
            title="Butunjahon Halol Qo'mitasi"
            description="Butunjahon Halol Qo'mitasining Rais-Orinbosari"
          />
        </div>
      </div>
    );
  };
