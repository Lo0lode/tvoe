"use client"
import styles from "./reviews.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

export default function Reviews(){
    interface Review {
        name: string;
        date: string;
        rating: number;
        text: string;
        id: number;
    }
    const reviews: Review[] = [
        {
            name: "Иван",
            date: "15 Мая 2023",
            rating: 10,
            text: "Отличный фильм! Мне очень понравился.",
            id: 1,
        },
        {
            name: "Мария",
            date: "12 Марта 2023",
            rating: 8,
            text: "Спасибо за очень приятный фильм!",
            id: 2,
        },
        {
            name: "Петр",
            date: "10 Марта 2023",
            rating: 9,
            text: "Необычный и интересный фильм.",
            id: 3,
        },
        {
        name: "Олег",
            date: "08 Июня 2023",
            rating: 7,
            text: "Я немного рассержусь на фильм, но он был хорош.",
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
            rating: 6,
            text: "Слабый фильм, но очень хорошо смотрел.",
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
            text: "Хороший фильм, но плохо смотрел.",
            id: 9,
        },]

    return (
        <div className={styles.reviewsCont}>
            <div className={styles.headingReviewsCont}>
                <span className={styles.headingReviews}>Отзывы</span>
            </div>
            <div className={styles.reviews}>
                <Swiper
                    slidesPerView={5}
                    loop={false}
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