"use client";
import styles from "./seasonBlock.module.scss";
import episodes1 from "@/app/assets/images/episodes/episodes1.png";
import episodes2 from "@/app/assets/images/episodes/edisodes2.png";
import episodes3 from "@/app/assets/images/episodes/episodes3.png";
import episodes4 from "@/app/assets/images/episodes/episodes4.png";
import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {v4 as uuidv4} from "uuid";

interface Season {
    title: string;
    series: Episode[];
}

interface Episode {
    id: string;
    title: string;
    time: string;
    image: StaticImageData;
    watched?: boolean;
}
export default function SeasonBlock() {
    const [activeSeason, setActiveSeason] = useState<number>(1);
    const [mobileScreen, setMobileScreen] = useState(6);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            console.log('Ширина экрана:', width);

            if (width <= 375) {
                setMobileScreen(2);
            } else {
                setMobileScreen(6);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const infoFromAPI: Season[] = [
        {
            title: "Трейлер",
            series: [
                {
                    id: uuidv4(),
                    title: "Трейлер",
                    time: "5:24",
                    image: episodes1,
                },
            ],
        },
        {
            title: "Сезон 1",
            series: [
                {
                    id: uuidv4(),
                    title: "Серия 1",
                    time: "20:24",
                    image: episodes1,
                    watched: true,
                },
                {
                    id: uuidv4(),
                    title: "Серия 2",
                    time: "20:24",
                    image: episodes2,
                    watched: true,
                },
                {
                    id: uuidv4(),
                    title: "Серия 3",
                    time: "20:24",
                    image: episodes3,
                },
                {
                    id: uuidv4(),
                    title: "Серия 4",
                    time: "20:24",
                    image: episodes4,
                },
                {
                    id: uuidv4(),
                    title: "Серия 5",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 6",
                    time: "20:24",
                    image: episodes2,
                },
                {
                    id: uuidv4(),
                    title: "Серия 7",
                    time: "20:24",
                    image: episodes3,
                },
                {
                    id: uuidv4(),
                    title: "Серия 8",
                    time: "20:24",
                    image: episodes4,
                },
                {
                    id: uuidv4(),
                    title: "Серия 9",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 10",
                    time: "20:24",
                    image: episodes2,
                },
            ],
        },
        {
            title: "Сезон 2",
            series: [
                {
                    id: uuidv4(),
                    title: "Серия 1",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 2",
                    time: "20:24",
                    image: episodes2,
                },
                {
                    id: uuidv4(),
                    title: "Серия 3",
                    time: "20:24",
                    image: episodes3,
                },
                {
                    id: uuidv4(),
                    title: "Серия 4",
                    time: "20:24",
                    image: episodes4,
                },
                {
                    id: uuidv4(),
                    title: "Серия 5",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 6",
                    time: "20:24",
                    image: episodes2,
                },
                {
                    id: uuidv4(),
                    title: "Серия 7",
                    time: "20:24",
                    image: episodes3,
                },
                {
                    id: uuidv4(),
                    title: "Серия 8",
                    time: "20:24",
                    image: episodes4,
                },
                {
                    id: uuidv4(),
                    title: "Серия 9",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 10",
                    time: "20:24",
                    image: episodes2,
                },
            ],
        },
        {
            title: "Сезон 3",
            series: [
                {
                    id: uuidv4(),
                    title: "Серия 1",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 2",
                    time: "20:24",
                    image: episodes2,
                },
                {
                    id: uuidv4(),
                    title: "Серия 3",
                    time: "20:24",
                    image: episodes3,
                },
                {
                    id: uuidv4(),
                    title: "Серия 4",
                    time: "20:24",
                    image: episodes4,
                },
                {
                    id: uuidv4(),
                    title: "Серия 5",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 6",
                    time: "20:24",
                    image: episodes2,
                },
                {
                    id: uuidv4(),
                    title: "Серия 7",
                    time: "20:24",
                    image: episodes3,
                },
                {
                    id: uuidv4(),
                    title: "Серия 8",
                    time: "20:24",
                    image: episodes4,
                },
                {
                    id: uuidv4(),
                    title: "Серия 9",
                    time: "20:24",
                    image: episodes1,
                },
                {
                    id: uuidv4(),
                    title: "Серия 10",
                    time: "20:24",
                    image: episodes2,
                },
            ],
        },
    ];

    return (
        <div className={styles.seasonalBlockCont}>
            <div className={`${styles.seasonalBlock} ${styles.conteiner}`}>
                <div className={` ${styles.seasonalBlock}`}>
                    {infoFromAPI.map((season, index) => {
                        return (
                            <span onClick={() => {
                                setActiveSeason(index)
                            }} key={season.title + index}>{season.title}</span>
                        )
                    })}
                </div>
                <div>
                    <Swiper
                        slidesPerView={mobileScreen}
                        spaceBetween={80}
                        loop={false}
                        navigation={{
                            prevEl: ".prev-button",
                            nextEl: ".next-button",
                        }}
                    >
                        {infoFromAPI[activeSeason].series.map((episodes, index) => {
                            return (
                                <SwiperSlide
                                    key={episodes.id + index}>
                                    <div className={styles.swiperItem}>
                                        <Image className={styles.seasonImage} src={episodes.image} alt={episodes.title}/>
                                        <span className={styles.swiperTime}>{episodes.time}</span>
                                    </div>
                                    <div>
                                        <div className={`${episodes.watched && styles.swiperProgressBar}`}></div>
                                        <h3>{episodes.title}</h3>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </div>
        </div>
    );
}
