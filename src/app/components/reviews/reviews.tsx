"use client"
import styles from "./reviews.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";

interface Review {
    name: string;
    date: string;
    rating: number;
    text: string;
    id: number;
}
export default function Reviews(){

    const [mobileScreen, setMobileScreen] = useState(6);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            console.log('Ширина экрана:', width);

            if (width <= 375) {
                setMobileScreen(7);
            } else {
                setMobileScreen(5);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const reviews: Review[] = [
        {
            name: "Иван",
            date: "15 Мая 2023",
            rating: 10,
            text: "Отличный фильм!",
            id: 1,
        },
        {
            name: "Мария",
            date: "12 Марта 2023",
            rating: 8,
            text: "Приятный фильм!",
            id: 2,
        },
        {
            name: "Петр",
            date: "10 Марта 2023",
            rating: 9,
            text: "Необычный фильм.",
            id: 3,
        },
        {
        name: "Олег",
            date: "08 Июня 2023",
            rating: 7,
            text: "Пойдет",
            id: 4,
        },
        {
            name: "Николай",
            date: "06 Июня 2023",
            rating: 10,
            text: "КРУТО!!",
            id: 5,
        },
        {
        name: "Анна",
            date: "04 Июня 2023",
            rating: 5,
            text: "Слабый фильм.",
            id: 6,
        },
        {
        name: "Дмитрий",
            date: "02 Июля 2023",
            rating: 6,
            text: "Слабый фильм, но терпимо.",
            id: 7,
        },
        {
            name: "Михаил",
            date: "31 Июля 2023",
            rating: 9,
            text: "Очень крутой фильм!",
            id: 8,
        },
        {
            name: "Ирина",
            date: "30 Июля 2023",
            rating: 8,
            text: "Хороший фильм.",
            id: 9,
        },]

    return (
        <div className={styles.reviewsCont}>
            <div className={styles.headingReviewsCont}>
                <span className={styles.headingReviews}>Отзывы</span>
            </div>
            <div className={styles.reviews}>
                <Swiper
                    slidesPerView={mobileScreen}
                    spaceBetween={1}
                    loop={true}
                    navigation={{
                        prevEl: ".prev-button",
                        nextEl: ".next-button",
                    }}
                >
                    {reviews.map((review) => {
                        return (
                            <SwiperSlide
                                key={review.id}>
                                <div className={styles.swiperItem}>
                                    <span className={styles.swiperName}>{review.name}</span>
                                    <span className={styles.swiperDate}>{review.date}</span>
                                    <span className={styles.swiperRating}>{review.rating}</span>
                                    <span className={styles.swiperText}>{review.text}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}