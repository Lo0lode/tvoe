"use client";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "@/app/assets/images/socialNet/logoTvoe.svg";
import telegram from "@/app/assets/images/socialNet/telegram.svg";
import vk from "@/app/assets/images/socialNet/vk.svg";
import youtube from "@/app/assets/images/socialNet/youtube.svg";
import tiktok from "@/app/assets/images/socialNet/tiktok.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBtnNetCont}>
        <span className={styles.footerBtn}>Написать в поддержку</span>
        <div className={styles.footerSocialNetCont}>
          <span className={styles.footerSocialNet}>Telegram <Image src={telegram} alt="telegram"/></span>
          <span className={styles.footerSocialNet}>ВКонтакте <Image src={vk} alt="vk"/></span>
          <span className={styles.footerSocialNet}>Youtube <Image src={youtube} alt="youtube"/></span>
          <span className={styles.footerSocialNet}>TikTok <Image src={tiktok} alt="tiktok"/></span>
        </div>
      </div>
      <div className={styles.footerNavCont}>
        <div className={styles.footerNav}>
        <span>Главная</span>
        <span>Фильмы</span>
        <span>Сериалы</span>
        <span>TB</span>
        <span>Контакты</span>
        </div>
        <div className={styles.footerUserToolsCont}>
          <span>Реферальная программа</span>
          <span>Скачать приложение</span>
          <span>Вопросы и ответы</span>
          <span>Условия использования</span>
        </div>
      </div>
        <hr style={{ border: 'none', height: '1px',width:"100%", backgroundColor: 'white', }} />
      <div className={styles.footerCopyrightCont}>
            <span className={styles.footerClassification}>18+</span>
        <div className={styles.footerCopyright}>
            <span>2024, ООО «ТВОЁ ЛАЙВ»</span>
            <span>Все права защищены.</span>
        </div>
        <span className={styles.footerLogoCont}><Image src={logo} alt="logo"/></span>

      </div>
    </footer>
  );
}
