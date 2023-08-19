import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './index.module.scss';
// next componenet

export const Contact = () => {
  const t = useTranslations()

  return (
    <>
    <h1 className={styles.title}>{t("contactBlock.title")}</h1>
    <div className={styles.contact} id='contact'>
      <div className={styles.content}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>{t("contactBlock.advertising")}</h2>
            <p>{t("contactBlock.phone")}</p>
            <p>{t("contactBlock.email")}</p>
          </div>
          <div className={styles.card}>
            <h2>{t("contactBlock.social")}</h2>
            <div className={styles.links}>
            <div className={styles.icon}>
                <a rel='noreferrer' className={styles.text} href="https://instagram.com/botir.uzbekistan">{t("instagram")}</a>
                <a rel='noreferrer'  className={styles.text} href="https://wa.me/qr/H7LPF2NHCBRCB1">{t("contactBlock.whatsapp")}</a>
            </div>
            <div className={styles.icon}>
            <a rel='noreferrer'  className={styles.text} href="https://www.facebook.com/botir.mirzagaliev">{t("contactBlock.facebook")}</a>
            <a rel='noreferrer'  className={styles.text} href="https://t.me/botir_uzbekistan">{t("contactBlock.telegram")}</a> 
            </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.botirvs}>
        {/* <Image className={styles.botirImage}  src={'/img/botirvs.jpeg'}   alt='image' objectFit='contain' width={900} height={450}/> */}
      </div>
    </div>
    </>
  );
};
