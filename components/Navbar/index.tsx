import React, { useState, useEffect , FC } from 'react';
// router
import { useRouter } from 'next/router';
// next intl
import { useTranslations } from 'next-intl';
// next components
// import Link from 'next/link';
import Image from 'next/image';
// mui components
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
// constants
import { langs, localStorageKeys, paths } from "../../constants";
// react-scroll
import { Link, animateScroll as scroll } from 'react-scroll';
// styles
import styles from './index.module.sass';


 export const Navbar:FC<any> = () => {
    const t = useTranslations();
    const router = useRouter();
    const path = router.asPath
    const [selectedLang, setSelectedLang] = useState(router.locale);
    const [isOpen, setIsOpen] = useState(false);
    const [click, setClick] = useState(false)


    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    // lang settings
    const handleChangeLang = (event: SelectChangeEvent) => {
        const eventLang = event.target.value;
        setSelectedLang(eventLang);
        localStorage.setItem(localStorageKeys.selectedLang, eventLang);
        router.push(path, undefined, { locale: eventLang })
    };
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    // language router
  
    useEffect(() => {
      if (selectedLang) {
        router.push(router.asPath, undefined, {
          locale: selectedLang,
        });
      }
    }, [selectedLang]);
    
  return (
    <div className={styles.navbar}> 
    <div className={styles.navbar__logoCont}>
      <Image className={styles.navbar__logo} src={'/img/logo.png'} alt='logo' width={130} height={120}  objectFit='contain'/>
      </div>
      <ul className={styles.navbar__menu}>
      <li>
          <Link to='header' spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>
          {t("bio")}
          </Link>
          </li>
       
        <li>
          <Link to='halal' spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>
          {t("halal")}
          </Link>
          </li>

          <li>
          <Link to='bussiness' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
          {t("business")}
          </Link>
          </li>
        {/* <li>
          <Link to='trading' spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>
          {t("trading")}
          </Link>
          </li> */}
          <li>
          <Link to='contact' spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>
          {t("contact")}
          </Link>
          </li>
          
      </ul>
      
      <FormControl>
                    <Select
                        className={styles.navbar__language}
                        value={selectedLang}
                        onChange={handleChangeLang}
                    >
                        {
                            langs.map(lang => (
                                <MenuItem
                                className={styles.navbar__select}
                                    sx={{ textTransform: "capitalize" }}
                                    key={lang}
                                    value={lang.slice(0, 2)}
                                >
                                    {lang}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

    </div>
  )
}
