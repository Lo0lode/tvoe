"use client"
import styles from "./aboutMovie.module.scss"
import Image from "next/image";
import warning from "@/app/assets/images/warning.svg"

import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

export default function AboutMovie (){
    const [selectedTab, setSelectedTab ] =useState(0)
    const grades = [
        {grade:1,id:1},
        {grade:2,id:2},
        {grade:3,id:3},
        {grade:4,id:4},
        {grade:5,id:5},
        {grade:6,id:6},
        {grade:7,id:7},
        {grade:8,id:8},
        {grade:9,id:9},
        {grade:10,id:10},
    ]
    const tabsList = ["Описание","О сериале","Съемочная группа"]
    return (
        <div className={styles.aboutMovieCont}>
            <div className={styles.aboutMovie}>
                <div className={styles.movieAttributes}>
                    {tabsList.map((tab, index) => (
                        <span key={tab + index} onClick={() => setSelectedTab(index)}
                              className={`${selectedTab === index && styles.activeNav}`}>{tab}</span>
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
                <div className={styles.warningMobile}>
                    <Image src={warning} alt="warningMobile"/>
                    <span> Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит здоровью.</span>
                </div>
                <div className={styles.copyright}>
                    <Image src={warning} alt="warning"/>
                    <span>Сообщить о нарушении авторских прав</span>
                </div>
                <div className={styles.copyrightMobile}>
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
            <div className={styles.ratingContMobile}>
                <div className={styles.ratingMobile}>
                    <span>9,4</span>
                    <hr className={styles.line}/>
                </div>
                <div className={styles.selectRatingMobile}>
                    <span className={styles.questionMobile}>Как тебе сериал?</span>
                    <span className={styles.recommendationsMobile}>Оценка улучшит твои рекомендации</span>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={1}
                        width={350}
                        loop={false}
                        navigation={{
                            prevEl: ".prev-button",
                            nextEl: ".next-button",
                        }}

                    >
                        {grades.map((grade) => (
                            <SwiperSlide key={grade.id}>
                                <span className={styles.gradesMobile}>{grade.grade}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )

}
