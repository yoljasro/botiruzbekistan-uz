import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
// next componenet

export const Contact = () => {
  return (
    <>
    <h1 className={styles.title}>Kontakt</h1>
    <div className={styles.contact} id='contact'>
      <div className={styles.content}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Hamkorlik va Reklama</h2>
            <p>Telefon: +998 |95| 707-08-07</p>
            <p>E-mail: botir.mirzalagaliev@gmail.com</p>
          </div>
          <div className={styles.card}>
            <h2>Ijtimoiy Tarmoqlar</h2>
            <div className={styles.links}>
            <div className={styles.icon}>
                <a rel='noore[,                                                                                                                                                                                                                                                                                                                                                                                                         ' className={styles.text} href="https://instagram.com/botir.uzbekistan">Instagram</a>
                <a className={styles.text} href="https://wa.me/qr/H7LPF2NHCBRCB1">Whatsapp</a>

            </div>
            <div className={styles.icon}>
            <a className={styles.text} href="https://www.facebook.com/botir.mirzagaliev">Facebook</a>
            <a className={styles.text} href="https://t.me/botir_uzbekistan">Telegram</a> 
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
