import React, { useState } from 'react'
// styles
import styles from './index.module.sass'
// useTranslations
import { useTranslations } from 'next-intl'
// mui
import {Button , FormControl} from '@mui/material'
// next components
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const t = useTranslations()
  
  return (
    <div id='bio' className={styles.header}>
        <div className={styles.header__info}>
          <h2 className={styles.header__title}>Botir Uzbekistan</h2>
          <p className={styles.header__desc}>{t("header.info")} </p>
        </div>
        
      <div className={styles.header__img}>
        <Image className={styles.header__person} src={'/img/botiroriginal.JPEG'} alt='botir' width={400} height={600}/>
      </div>
      </div>
  )
}

