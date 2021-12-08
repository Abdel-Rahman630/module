// import {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Container from 'react-bootstrap/Container';
import classes from './clients.module.css';
import imgSrc2 from "../../../../assets/img/home/clients/cocacola.png";
import imgSrc from "../../../../assets/img/home/clients/mall.png";
import imgSrc5 from "../../../../assets/img/home/clients/misr.png";
import imgSrc4 from "../../../../assets/img/home/clients/novotel.png";
import imgSrc3 from "../../../../assets/img/home/clients/vodafone.png";
import SwiperCore, {
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper";
import { useState } from "react";

  SwiperCore.use([Scrollbar, A11y, Autoplay]);


export default function Clients() {

    const [logo, setLogo] = useState([
        {img: imgSrc},
        {img: imgSrc2},
        {img: imgSrc3},
        {img: imgSrc4},
        {img: imgSrc5},
    ])
        

  return (
    <section className={classes.clients}>
       <Container>
            <Swiper
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                speed={1200}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}  
                loop={true}
                breakpoints={{
                        "200": {
                            "slidesPerView": 2,
                        },
                        "768": {
                            "slidesPerView": 3,
                        },
                        "1024": {
                            "slidesPerView": 5,
                        }
                    }}
                >
                {logo.map((img) => {
                    return (
                        <SwiperSlide>
                            <div className={classes.imgParent}>
                                <a href="/" target="_blank" rel="noreferrer">
                                    <img src={img.img} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
       </Container>
    </section>
  )};