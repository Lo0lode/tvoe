"use client"
import styles from "./promoBanner.module.scss";
import promoImage1 from "@/app/assets/images/promoBanner/promoImage1.svg"
import promoImage2 from "@/app/assets/images/promoBanner/promoImage2.svg"
import promoImage3 from "@/app/assets/images/promoBanner/promoImage3.svg"
import promoImage4 from "@/app/assets/images/promoBanner/promoImage4.svg"
import premieresImage1 from "@/app/assets/images/promoBanner/premieresImage1.png"
import premieresImage2 from "@/app/assets/images/promoBanner/premieresImage2.png"
import premieresImage3 from "@/app/assets/images/promoBanner/premieresImage3.png"
import premieresImage4 from "@/app/assets/images/promoBanner/premieresImage4.png"
import Image from "next/image";

const PromoBanner = () => {
  return (
    <>
      <div className={styles.promoBanner}>
        <div className={styles.promoCont}>
        <span className={styles.promo}>СМОТРИ МИРОВЫЕ ПРЕМЬЕРЫ</span>
        <div className={styles.promoNav}>
          <div className={styles.promoNavInfo}>
            <span className={`${styles.promoInfo} ${styles.span}`}> <Image src={promoImage1} alt="promoImage" style={{marginRight:"15px",}}/> Новинки каждую неделю</span>
            <span className={`${styles.promoInfo} ${styles.span}`}> <Image src={promoImage2} alt="promoImage" style={{marginRight:"21px"}}/> Ha любом устройстве</span>
          </div>
          <div className={styles.promoNavInfo}>
            <span className={`${styles.promoInfo} ${styles.span}`}><Image src={promoImage3} alt="promoImage" style={{marginRight:"21px"}}/> Без рекламы и доплат</span>
            <span className={`${styles.promoInfo} ${styles.span}`}><Image src={promoImage4} alt="promoImage" style={{marginRight:"21px"}}/> Эксклюзивная озвучка </span>
          </div>
        </div>
        <div className={styles.promoDiscount}>
          <span className={styles.Btn}>Попробовать бесплатно</span>
          <span className={styles.promoPrice}>далее от 166 ₽/мес</span>
        </div>
        </div>
        <div className={styles.premieresImageCont}>
            <Image className={styles.premieresImage} src={premieresImage1} alt="premieresImage"/>
            <Image className={styles.premieresImage1} src={premieresImage3} alt="premieresImage"/>
            <Image className={styles.premieresImage2} src={premieresImage4} alt="premieresImage"/>

            <Image className={styles.premieresImage3} src={premieresImage3} alt="premieresImage"/>
            <Image className={styles.premieresImage4} src={premieresImage1} alt="premieresImage"/>
            <Image className={styles.premieresImage5} src={premieresImage4} alt="premieresImage"/>

            <Image className={styles.premieresImage6} src={premieresImage4} alt="premieresImage"/>
            <Image className={styles.premieresImage7} src={premieresImage3} alt="premieresImage"/>
            <Image className={styles.premieresImage8} src={premieresImage1} alt="premieresImage"/>
            <Image className={styles.premieresImage9} src={premieresImage2} alt="premieresImage"/>
        </div>
      </div>
    </>
  );
};

export default PromoBanner;
