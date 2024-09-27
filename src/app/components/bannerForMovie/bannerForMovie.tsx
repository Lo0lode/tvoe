"use client";
import avatarName from "@/app/assets/images/banner/avatarName.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "./bannerForMovie.module.scss";
import heart from "@/app/assets/images/bannerForMovie/heartForMovie.svg";
import share from "@/app/assets/images/bannerForMovie/shareForMovie.svg";
import allMute from "@/app/assets/images/bannerForMovie/allMuteForMovie.svg";
import fullScreen from "@/app/assets/images/bannerForMovie/fullScreenForMovie.svg";
import Image, {StaticImageData} from "next/image";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerNameCont}>
                <Image height={100} width={340} src={avatarName} alt="AvatarName"/>
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
            Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг
            должен справиться с четырьмя стихиями и вступить в схватку
            с безжалостным противником, который пытается его остановить.
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
    );
}
