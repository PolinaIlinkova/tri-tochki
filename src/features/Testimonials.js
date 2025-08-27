import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Testimonials.module.css";
import MainContainer from "../layout/MainContainer";

const reviews = [
  {
    type: "image",
    src: "/rev/rev01.jpg",
    alt: "Отзыв из Instagram",
  },
  {
    type: "video",
    src: "https://youtube.com/embed/TRjDRHZT2_o",
    title: "Видео отзыв клиента",
    poster: "/rev/video-poster.jpg", // добавь картинку-заставку
  },
  {
    type: "image",
    src: "/rev/rev02.jpg",
    alt: "Отзыв из Telegram",
  },
];

const Testimonials = () => {
  const videoRef = useRef(null);

  return (
    <section className={styles.testimonials}>
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.heading}>Отзывы</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className={styles.swiper}
          onSlideChange={() => {
            // при смене слайда ставим видео на паузу
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {review.type === "image" ? (
                <img
                  src={review.src}
                  alt={review.alt}
                  className={styles.image}
                />
              ) : (
                <div className={styles.videoWrapper}>
                  <iframe
                   src={review.src}
                   title="Видео-отзыв"
                    preload="none"
                    className={styles.video}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </MainContainer>
    </section>
  );
};

export default Testimonials;