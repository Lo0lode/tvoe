"use client";
import avatarName from "@/app/assets/images/banner/avatarName.png";
import "swiper/css";
import styles from "./bannerForMovie.module.scss";
import heart from "@/app/assets/images/bannerForMovie/heartForMovie.svg";
import share from "@/app/assets/images/bannerForMovie/shareForMovie.svg";
import allMute from "@/app/assets/images/bannerForMovie/allMuteForMovie.svg";
import fullScreen from "@/app/assets/images/bannerForMovie/fullScreenForMovie.svg";
import backBtn from "@/app/assets/images/bannerForMovie/backBtn.svg";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <div className={styles.bannerCont}>
            <div className={styles.banner}>
                <Link href={`/`}>
                    <div className={styles.backBtnCont}>
                        <Image src={backBtn} alt="backBtn" className={styles.backBtnImg}/>
                        <button className={styles.backBtn}> Назад</button>
                    </div>
                </Link>
                <div className={styles.bannerNameCont}>
                <Image height={100} width={340} src={avatarName} alt="AvatarName" className={styles.avatarName}/>
                    <div className={styles.bannerInfoMobile}>
                        <span className={styles.rating}>7,9</span>
                        <span>2024</span>
                        <span>1 сезон</span>
                        <span>Фентези</span>
                    </div>
                    <div className={styles.bannerInfo}>
                        <span className={styles.rating}>7,9</span>
                        <span className={styles.premiere}>Премьера</span>
                        <span>2024</span>
                        <span>Фентези</span>
                        <span>США</span>
                        <span>16+</span>
                    </div>
                    <div className={styles.aboutMovieCont}>
                        <span className={styles.nameMovie}>
                            Сериал Аватар: легенда об Аанге смотреть онлайн
                        </span>
                        <span className={styles.aboutMovie}>
                            Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг
                            должен справиться с четырьмя стихиями и вступить в схватку
                            с безжалостным противником, который пытается его остановить.
                        </span>
                    </div>
                    <div className={styles.toolsCont}>
                        <div className={styles.leftContTools}>
                            <span className={styles.Btn}>Смотреть бесплатно</span>
                            <Image className={styles.heart} src={heart} alt="heart"/>
                            <Image className={styles.share} src={share} alt="share"/>
                        </div>
                        <div className={styles.rightContTools}>
                            <Image className={styles.allMute} src={allMute} alt="allMute"/>
                            <Image className={styles.fullScreen} src={fullScreen} alt="fullScreen"/>
                        </div>
                    </div>
                </div>
            </div>
            {<div className={styles.bannerMobile}>
            <div className={styles.aboutMovieContMobile}>
                <span className={styles.nameMovieMobile}>
                    Сериал Аватар: легенда об Аанге смотреть онлайн
                </span>
                <span className={styles.aboutMovieMobile}>
                            Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг
                            должен справиться с четырьмя стихиями и вступить в схватку
                            с безжалостным противником, который пытается его остановить.
                        </span>
            </div>
            <div className={styles.toolsContMobile}>
                <div className={styles.leftContToolsMobile}>
                    <div className={styles.btnCont}>
                        <button className={styles.BtnMobile}>Смотреть бесплатно</button>
                    </div>
                    <div className={styles.navCont}>
                        <Image className={styles.heartMobile} src={heart} alt="heart"/>
                        <Image className={styles.shareMobile} src={share} alt="share"/>
                    </div>
                </div>
            </div>
            </div>}
        </div>
            );
            }