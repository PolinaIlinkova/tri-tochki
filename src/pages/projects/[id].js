import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectData from "../../components/UI/ProjectData";
import styles from "./[id].module.css";
import MainContainer from "../../layout/MainContainer";
import Header from "../../layout/Header";

import ContactForm from "../../layout/ContactForm";
import Footer from "../../layout/Footer";
import Button from "../../components/UI/Button";
import { HashLink } from "react-router-hash-link";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) return <p>Проект не найден</p>;

  return (
    <>
      <MainContainer>
        <Header dark={true} />
        <div className={styles.projectWrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.description}>
              <p>
                <b>Тип помещения:</b> {project.type}
              </p>
              <p>
                <b>Площадь:</b> {project.area}
              </p>
              <p>
                <b>Услуги:</b> {project.services}
              </p>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className={styles.swiperContainer}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {project.gallery.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`${project.title} ${index + 1}`}
                  className={styles.galleryImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.que}>
          <div className={styles.faq}>
            <h2>Понравился проект?</h2>
            <p>Грамотный ремонт начинается с качественного проекта. Наши проекты содержат в себе всю необходимую документацию для качественного ремонта, который сэкономит вам не только время, но и позаботится о вашем бюджете. </p>
            <HashLink smooth to={'/#content'}><Button text="Содержание проекта"></Button></HashLink>
          </div>
          <ContactForm />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
