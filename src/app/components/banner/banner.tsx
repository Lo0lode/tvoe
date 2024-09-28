"use client";
import avatarName from "@/app/assets/images/banner/avatarName.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "./banner.module.scss";
import Image, {StaticImageData} from "next/image";
import movie1 from "@/app/assets/images/banner/movie1.svg";
import movie2 from "@/app/assets/images/banner/movie2.svg";
import movie3 from "@/app/assets/images/banner/movie3.svg";
import movie4 from "@/app/assets/images/banner/movie4.svg";
import movie5 from "@/app/assets/images/banner/movie5.svg";
import {useState, useEffect} from "react";
import style from "@/app/components/weeklyTop/weeklyTop.module.scss";
import Link from "next/link";

interface Movies {
    id: number;
    image: StaticImageData;
}

export default function Banner() {
    const [mobileScreen, setMobileScreen] = useState(6);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            console.log('Ширина экрана:', width);

            if (width <= 375) {
                setMobileScreen(3);
            } else {
                setMobileScreen(6);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const movies: Array<Movies> = [
        {id: 1, image: movie1},
        {id: 2, image: movie2},
        {id: 3, image: movie1},
        {id: 4, image: movie4},
        {id: 5, image: movie5},
        {id: 6, image: movie1},
        {id: 7, image: movie1},
        {id: 8, image: movie3},
    ];
    return (
        <div className={styles.banner}>
            <div className={styles.bannerNameCont}>
                <Image height={100} width={340} src={avatarName} alt="AvatarName" className={styles.avatarName}/>
                <div className={styles.bannerInfo}>
                    <span>7,9</span>
                    <span>2024</span>
                    <span>Фентези</span>
                    <span>США</span>
                    <span>16+</span>
                </div>
            </div>
            <div className={styles.swiperCont}>
                <Swiper
                    slidesPerView={mobileScreen}
                    spaceBetween={0}
                    loop={true}
                    navigation={{
                        prevEl: ".prev-button",
                        nextEl: ".next-button",
                    }}

                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Link href={`/movie`}>
                                <Image className={styles.swiperImage}
                                       src={movie.image}
                                       alt="movie"
                                />
                                <div className=".next-button"></div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
