import React, { useState } from 'react';
// react icons
import { FaInstagram  , FaTelegram , FaFacebook} from 'react-icons/fa';
// next components
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.sass';

export const Trading = () => {

  return (
    <div className={styles.trading} id='halal'>
      <div className={styles.trading__info}>
      <h2 className={styles.trading__title}>Trading</h2>
      <p className={styles.trading__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum, fuga laborum placeat et doloremque cupiditate odio animi similique dolor quos eos sapiente? Neque eaque sint velit quasi quod suscipit.</p>
      </div>
      <div className={styles.trading__cards}>
        <div className={styles.trading__card}>
          <Image src={'/img/halal.svg'} alt='halal' width={100} height={100}/>
          <h2 className={styles.trading__cardTitle}>Title</h2>
          <p className={styles.trading__cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat officia nisi sint doloribus sunt. Excepturi suscipit accusantium laboriosam iusto minus nostrum labore delectus, recusandae vitae, repudiandae dolorem deleniti ea.</p>
        </div>
        <div className={styles.trading__card}>
          <Image src={'/img/halal.svg'} alt='halal' width={200} height={100}/>
          <h2 className={styles.trading__cardTitle}>Title</h2>
          <p className={styles.trading__cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat officia nisi sint doloribus sunt. Excepturi suscipit accusantium laboriosam iusto minus nostrum labore delectus, recusandae vitae, repudiandae dolorem deleniti ea.</p>
        </div>
        <div className={styles.trading__card}>
          <Image src={'/img/halal.svg'} alt='halal' width={200} height={100}/>
          <h2 className={styles.trading__cardTitle}>Title</h2>
          <p className={styles.trading__cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat officia nisi sint doloribus sunt. Excepturi suscipit accusantium laboriosam iusto minus nostrum labore delectus, recusandae vitae, repudiandae dolorem deleniti ea.</p>
        </div>

       
      </div>
      <div className={styles.trading__social}>
          <FaInstagram className={styles.trading__icon}/> 
          <FaTelegram className={styles.trading__icon}/>
          <FaFacebook className={styles.trading__icon}/>
        </div>
        <p className={styles.trading__website}>
          <Link href={'https://forexample.uz'}>
          halisaytiyoq.uz
          </Link>
          </p>
    </div>
  );
};