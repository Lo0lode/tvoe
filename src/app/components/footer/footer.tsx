"use client";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "@/app/assets/images/socialNet/logoTvoe.svg";
import telegram from "@/app/assets/images/socialNet/telegram.svg";
import vk from "@/app/assets/images/socialNet/vk.svg";
import youtube from "@/app/assets/images/socialNet/youtube.svg";
import tiktok from "@/app/assets/images/socialNet/tiktok.svg";
import promo from "@/app/assets/images/logosForHeader/promo.svg"
import tgMobile from "@/app/assets/images/socialNet/telegramMobile.svg"
import vkMobile from "@/app/assets/images/socialNet/vkMobile.svg"
import youtubeMobile from "@/app/assets/images/socialNet/youtubeMobile.svg"
import tiktokMobile from "@/app/assets/images/socialNet/tikTokmobile.svg"
import filmsLogo from "@/app/assets/images/socialNet/filmsLogo.svg"
import homePageLogo from "@/app/assets/images/socialNet/homePageLogo.svg"
import serialsLogo from "@/app/assets/images/socialNet/serialsLogo.svg"
import tvLogo from "@/app/assets/images/socialNet/tvLogo.svg"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerNavMobile}>
                <div className={styles.promo}>
                    <Image src={promo} alt="promocodeSVG"/> <span>Промокод</span>
                </div>
                <span>Контакты</span>
                <span>Реферальная программа</span>
                <span>Скачать приложение</span>
                <span>Вопросы и ответы</span>
                <span>Условия использования</span>
                <div className={styles.socialNetMobile}>
                    <Image src={tgMobile} alt={"TelegramSVG"}/>
                    <Image src={vkMobile} alt={'vkSVG'}/>
                    <Image src={youtubeMobile} alt={"youtubeSVG"}/>
                    <Image src={tiktokMobile} alt={"tiktokSVG"}/>
                </div>
                <span className={styles.promo}>Написать в поддержку</span>
            </div>
            <div className={styles.footerBtnNetCont}>
                <span className={styles.footerBtn}>Написать в поддержку</span>
                <div className={styles.footerSocialNetCont}>
                    <span>Telegram <Image src={telegram} alt="telegram"/></span>
                    <span>ВКонтакте <Image src={vk} alt="vk"/></span>
                    <span>Youtube <Image src={youtube} alt="youtube"/></span>
                    <span>TikTok <Image src={tiktok} alt="tiktok"/></span>
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
                    <span>Вопросы и ответы</span>
                    <span>Условия использования</span>
                </div>
            </div>
            <hr className={styles.line}/>
            <div className={styles.footerCopyrightCont}>
                <span className={styles.footerClassification}>18+</span>
                <div className={styles.footerCopyright}>
                    <span>2024, ООО «ТВОЁ ЛАЙВ»</span>
                    <span>Все права защищены.</span>
                </div>
                <span className={styles.footerLogoCont}><Image src={logo} alt="logo"/></span>
            </div>
            <nav className={styles.footerBottomNav}>
                <div className={styles.active}>
                    <Image src={homePageLogo} alt="homePageLogo"/>
                    <span>Главная</span>
                </div>
                <div>
                    <Image src={filmsLogo} alt="filmsLogo"/>
                    <span>Фильмы</span>
                </div>
                <div>
                    <Image src={serialsLogo} alt="serialsLogo"/>
                    <span>Сериалы</span>
                </div>
                <div>
                    <Image src={tvLogo} alt="tvLogo"/>
                    <span>TB</span>
                </div>
            </nav>
        </footer>
    );
}
