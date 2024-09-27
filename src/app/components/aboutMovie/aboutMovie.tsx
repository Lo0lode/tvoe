"use client"
import styles from "./aboutMovie.module.scss"
import Image from "next/image";
import warning from "@/app/assets/images/warning.svg"

import {useState} from "react";

export default function AboutMovie (){
    const [selectedTab, setSelectedTab ] =useState(0)
    const tabsList = ["Описание","О сериале","Съемочная группа"]
    return (
        <div className={styles.aboutMovieCont}>
            <div className={styles.aboutMovie}>
                <div className={styles.movieAttributes}>
                    {tabsList.map((tab,index)=>(
                        <span key={tab +index} onClick={()=> setSelectedTab(index)} className={`${selectedTab === index && styles.activeNav}`}>{tab}</span>
                    ))}
                </div>
                <div className={styles.movieDescription}>
                    <span>1980-е годы, тихий провинциальный американский городок.
                        Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл.
                        Выяснить обстоятельства дела полны решимости родные мальчика и местный шериф, также события затрагивают лучшего друга Уилла — Майка.
                        Он начинает собственное расследование. Майк уверен, что близок к разгадке, и теперь ему предстоит оказаться в эпицентре ожесточенной битвы потусторонних сил.</span>
                </div>
                <div className={styles.warning}>
                    <span>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит здоровью.</span>
                </div>
                <div className={styles.copyright}>
                    <Image src={warning} alt="warning"/>
                    <span>Сообщить о нарушении авторских прав</span>
                </div>
            </div>
            <div className={styles.ratingCont}>
                <div className={styles.rating}>
                    <span>9,4</span>
                </div>
                <div className={styles.selectRating}>
                    <span className={styles.question}>Как тебе сериал?</span>
                    <span className={styles.recommendations}>Оценка улучшит твои рекомендации</span>
                    <span className={styles.grades}>1 2 3 4 5 6 7 8 9 10</span>
                </div>
            </div>

        </div>
    )

}
