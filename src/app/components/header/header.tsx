"use client"
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@/app/assets/images/logosForHeader/logo.svg";
import textLogo from "@/app/assets/images/logosForHeader/textLogo.svg"
import installSvg from "@/app/assets/images/logosForHeader/install.svg"
import lupa from "@/app/assets/images/logosForHeader/lupa.svg"
import promo from "@/app/assets/images/logosForHeader/promo.svg"
import { useState } from "react";

export default function Header() {
    const [selectedTab, setSelectedTab ] =useState(0)
    const tabsList = ["Главная","Фильмы","Сериалы","ТВ"]
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoNav} >
        <div className={styles.headerLogo}>
          <Image src={logo} alt="logo" />
          <Image src={textLogo} alt="textLogo"/>
        </div>
        <nav className={styles.headerNav}>
            {tabsList.map((tab,index)=>(
                <span key={tab +index} onClick={()=> setSelectedTab(index)} className={`${selectedTab === index && styles.activeNav}`}>{tab}</span>
            ))}
        </nav>
      </div>

      <div className={styles.headerNavRight}>
        <div className={`${styles.Btn} ${styles.grey}`}>
          <Image src={installSvg} alt="install" className={styles.installImage} />
            <span className={styles.installText}>Установить</span>
        </div>
        <div className={`${styles.Btn} ${styles.gradient}`}>
            <span>7 дней за 0 ₽</span>
        </div>
        <div className={`${styles.Btn} ${styles.grey} ${styles.promo}`}>
          <Image src={promo} alt="promocode" />
            <span>Промокод</span>
        </div>
        <div className={styles.Btn}>
          <Image style={{paddingRight:"2px"}} src={lupa} alt="search"  />
            <span className={styles.searchText}>Войти</span>
        </div>

      </div>
    </header>
  );
}
