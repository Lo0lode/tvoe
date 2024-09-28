"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "./newMovie.module.scss";
import Image, {StaticImageData} from "next/image";
import newMovie0 from "@/app/assets/images/newMovies/newMovie0.svg";
import newMovie1 from "@/app/assets/images/newMovies/newMovie1.svg";
import newMovie2 from "@/app/assets/images/newMovies/newMovie2.svg";
import newMovie3 from "@/app/assets/images/newMovies/newMovie3.svg";
import newMovie4 from "@/app/assets/images/newMovies/newMovie4.svg";
import newMovie5 from "@/app/assets/images/newMovies/newMovie5.svg";
import {useEffect, useState} from "react";
import Link from "next/link";

interface Movies {
    id: number;
    title: string;
    year: string;
    timing?: string;
    newSeason?: string;
    quantityOfSeason?: string
    rating: string;
    image: StaticImageData;
}

export default function NewMovie() {

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


    const movies: Array<Movies> = [
        {id: 1, image: newMovie0, title: "Муфаса: Король Лев", year: '2024,', timing: "2 ч 32 мин", rating: "9,9"},
        {id: 2, image: newMovie1, title: "Амфибия", year: '2024,', timing: "2 ч 32 мин", rating: "9,9"},
        {
            id: 3,
            image: newMovie2,
            title: "Слишком стар, чтобы умереть молодым",
            year: '2024,',
            quantityOfSeason: "2 сезона",
            newSeason: "Новый сезон",
            rating: "9,9"
        },
        {
            id: 4,
            image: newMovie3,
            title: "Джокер: Безумие на двоих",
            year: '2024,',
            timing: "2024, 1 ч 56 мин",
            rating: "9,9"
        },
        {
            id: 5,
            image: newMovie4,
            title: "Хороших девочек не убивают",
            year: '2024,',
            quantityOfSeason: "5 сезонов",
            newSeason: "Новый сезон",
            rating: "5,4"
        },
        {id: 6, image: newMovie5, title: "Лощина", year: '2024,', timing: "2 ч 42 мин", rating: "9,9"},
        {id: 7, image: newMovie1, title: "Амфибия", year: '2024,', timing: "2 ч 32 мин", rating: "9,9"},

    ];
    return (
        <div className={styles.newMovieCont}>
            <span className={styles.newMovie}>Новинки</span>
            <div className={styles.swiperCont}>
                <div>
                    <Swiper
                        slidesPerView={mobileScreen}
                        spaceBetween={17}
                        loop={true}
                        navigation={{
                            prevEl: ".prev-button",
                            nextEl: ".next-button",
                        }}
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <Link href={`/movie`}>
                                    <Image
                                        className={styles.movieImage}
                                        src={movie.image}
                                        alt="movie"
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )

}