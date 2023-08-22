import React, { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FormControl, IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FiMenu } from 'react-icons/fi';
import { langs, localStorageKeys } from "../../constants";
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './index.module.scss';

export const Navbar: FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const path = router.asPath;
  const [selectedLang, setSelectedLang] = useState(router.locale);
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleChangeLang = (event: SelectChangeEvent) => {
    const eventLang = event.target.value;
    setSelectedLang(eventLang);
    localStorage.setItem(localStorageKeys.selectedLang, eventLang);
    router.push(path, undefined, { locale: eventLang });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logoCont}>
      <Image className={styles.navbar__logo} src={'/img/logo.png'} alt='logo' width={130} height={120}  objectFit='contain'/>
      </div>
      <IconButton className={styles.navbar__menuIcon} onClick={toggleMenu}>
        <FiMenu />
      </IconButton>
      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__menuItem} onClick={closeMenu}>
          <Link
            activeClass="active"
            to="bio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("bio")}
          </Link>
        </li>
        <li className={styles.navbar__menuItem} onClick={closeMenu}>
          <Link
            activeClass="active"
            to="halal"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("halal")}
          </Link>
        </li>
        <li className={styles.navbar__menuItem} onClick={closeMenu}>
          <Link
            activeClass="active"
            to="business"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("business")}
          </Link>
        </li>
        {/* <li className={styles.navbar__menuItem} onClick={closeMenu}>
          <Link
            activeClass="active"
            to="trading"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("trading")}
          </Link>
        </li> */}
        <li className={styles.navbar__menuItem} onClick={closeMenu}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
      {isOpen && (
        <div className={styles.navbar__mobileMenu}>
          <div className={styles.navbar__mobileMenuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="bio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("bio")}
            </Link>
          </div>
          <div className={styles.navbar__mobileMenuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="halal"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("halal")}
            </Link>
          </div>
          <div className={styles.navbar__mobileMenuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="business"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("business")}
            </Link>
          </div>
          <div className={styles.navbar__mobileMenuItem} onClick={closeMenu}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
      <div className={styles.navbar__langCont}>
      <FormControl className={styles.navbar__language}>
        <Select
          value={selectedLang}
          onChange={handleChangeLang}
          className={styles.navbar__select}
        >
          {langs.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </nav>
  );
};