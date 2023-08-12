import React, { useState } from 'react'
// styles
import styles from './index.module.sass'
// mui
import {Button , FormControl} from '@mui/material'
// next components
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  
  return (
    <div id='header' className={  styles.header}>
      <div className={styles.header__info}>
      <h1 className={styles.header__title}>Botir Uzbekistan</h1>
      <p className={styles.header__desc}>- O\zbekistonda , Toshkent shahrida tugilgan. <br />
- Oliy malumotni Yevropada qolga kiritgan. <br /> - Shu bilan birgalikda , Yevropadagi Ozbekiston elchixonasi bilan - hamkorlikda ishlagan.   <br /> - Keyinchalik , 
Turizm Vazirligini Yevropadagi Vakili sifatida oz ish faoliyatini yuritgan. <br /> - Ozbekistonga kelganidan song Hokimiyatda ishlagan. <br /> - Hokimiyatdan keyin Butunjahon Halol Qomitasining Rais Orinbosar bolib tayinlangan. <br />

- Hozirgi kunda ushbu lavozim bilan birgalikda yana bir necha yonalishdagi bizneslarning egasi. <br /> - Asos solinayotgan bizneslar va ularning faoliyati haqida  saytda korib borishingiz mumkin. </p>
      {/* <Button className={styles.header__btn} variant='contained'>Batafsil koring</Button> */}
      </div>
      <div className={styles.header__img}>
        <Image className={styles.header__person} src={'/img/botiroriginal.png'} alt='botir' width={400} height={600}/>
      </div>
      </div>
  )
}

