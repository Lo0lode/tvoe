"use client"
import styles from "./promoBannerForMovie.module.scss";
import promoImage1 from "@/app/assets/images/promoBanner/promoImage1.svg";
import promoImage2 from "@/app/assets/images/promoBanner/promoImage2.svg";
import promoImage3 from "@/app/assets/images/promoBanner/promoImage3.svg";
import promoImage4 from "@/app/assets/images/promoBanner/promoImage4.svg";

import Image from "next/image";

const PromoBanner = () => {
  return (
    <>
      <div className={styles.promoBanner}>
        <div className={styles.promoCont}>
          <div className={styles.promoPrice}>
            <span className={styles.promo}>СМОТРИ МИРОВЫЕ ПРЕМЬЕРЫ</span>
            <span className={styles.price}>далее от 166 ₽/месяц по подписке</span>
          </div>
        <div className={styles.promoNavInfo}>
            <span className={`${styles.promoInfo} ${styles.span}`}> <Image src={promoImage1} alt="promoImage" style={{marginRight:"15px",}}/> Новинки каждую неделю</span>
            <span className={`${styles.promoInfo} ${styles.span}`}> <Image src={promoImage2} alt="promoImage" style={{marginRight:"15px"}}/> Ha любом устройстве</span>
            <span className={`${styles.promoInfo} ${styles.span}`}><Image src={promoImage3} alt="promoImage" style={{marginRight:"15px"}}/> Без рекламы и доплат</span>
            <span className={`${styles.promoInfo} ${styles.span}`}><Image src={promoImage4} alt="promoImage" style={{marginRight:"15px"}}/> Эксклюзивная озвучка </span>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default PromoBanner;
