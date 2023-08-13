import React, { useState } from 'react'
// next components
import Image from 'next/image'
import Link from 'next/link'
// react icons
import { FaInstagram  , FaTelegram , FaFacebook} from 'react-icons/fa';
// intl
import { useTranslations } from 'next-intl';
// styles
import styles from './index.module.sass'

export const Footer = () => {
  const t = useTranslations()
  
  return (
    <div id='footer' className={styles.footer}>
        <div className={styles.footer__social}>
          <Link href={'https://instagram.com/botir.uzbekistan'}>
          <FaInstagram className={styles.footer__icon}/>
          </Link>
          <Link href={'https://t.me/botir_uzbekistan'}>
          <FaTelegram className={styles.footer__icon}/>
          </Link>
          <Link href={'https://www.facebook.com/botir.mirzagaliev/'}>
          <FaFacebook className={styles.footer__icon}/>
          </Link>
        </div>
        <div className={styles.footer__info}>
          <p>{t("contactBlock.email")}</p>
          <p>{t("contactBlock.phone")}</p>
          <span>@ 2023 All reserved by BOTIR.UZBEKISTAN</span>
        </div>
      </div>
  )
}

