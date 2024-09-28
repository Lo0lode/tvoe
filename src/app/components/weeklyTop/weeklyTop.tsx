"use client"

import style from './weeklyTop.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import movie1 from '@/app/assets/images/weeklyTop/weeklyTop1.svg'
import movie2 from '@/app/assets/images/weeklyTop/weeklyTop2.svg'
import movie3 from '@/app/assets/images/weeklyTop/weeklyTop3.svg'
import movie4 from '@/app/assets/images/weeklyTop/weeklyTop4.svg'
import movie5 from '@/app/assets/images/weeklyTop/weeklyTop5.png'
import movie6 from '@/app/assets/images/weeklyTop/weeklyTop6.svg'
import movie7 from '@/app/assets/images/weeklyTop/weeklyTop7.svg'
import movie8 from '@/app/assets/images/weeklyTop/weeklyTop8.svg'
import movie9 from '@/app/assets/images/weeklyTop/weeklyTop9.svg'
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";


export default function WeeklyTop() {

    const [mobileScreen, setMobileScreen] = useState(6);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            console.log('Ширина экрана:', width);
            if (width <= 375) {
                setMobileScreen(2);
            } else {
                setMobileScreen(4);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    interface MoviesWatching {
        id: number,
        rating: number,
        image: StaticImageData,
    }

    const movies: Array<MoviesWatching> = [
        {
            id: 1,
            rating: 1,
            image: movie1
        },
        {
            id: 2,
            rating: 2,
            image: movie2
        },
        {
            id: 3,
            rating: 3,
            image: movie3
        },
        {
            id: 4,
            rating: 4,
            image: movie4
        },
        {
            id: 5,
            rating: 5,
            image: movie5
        },
        {
            id: 6,
            rating: 6,
            image: movie6
        },
        {
            id: 7,
            rating: 7,
            image: movie7
        },
        {
            id: 8,
            rating: 8,
            image: movie8
        },
        {
            id: 9,
            rating: 9,
            image: movie9
        },
    ]

    return (
        <div className={style.new}>
            <span className={style.top10}>ТОП-10 НЕДЕЛИ</span>
            <Swiper className={style.newSwiper}
                    spaceBetween={20}
                    slidesPerView={mobileScreen}
            >
                {movies.map((item) => <SwiperSlide
                    className={style.newSwiperSlide}
                    key={item.id}>
                    <Link className={style.newSwiperSlideLink} href={`/movie`}>
                        <div className={`${style.newSwiperRaiting} ${style.newStroke}`}>{item.rating}</div>
                        <div className={style.newSwiperImage}><Image src={item.image} alt="image"/></div>
                    </Link>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}