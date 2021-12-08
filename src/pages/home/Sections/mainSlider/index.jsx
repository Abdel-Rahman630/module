import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Container from 'react-bootstrap/Container';
import classes from './slider.module.css';
import classes2 from '../../../../UI/Link/Link.module.css';
import bg from '../../../../assets/img/home/slider/bg1.jpg';
import bg2 from '../../../../assets/img/home/slider/bg2.jpg';
import bg3 from '../../../../assets/img/home/slider/bg3.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainLink from "../../../../UI/Link";
import WOW from 'wowjs';

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation, Autoplay, EffectFade
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function MainSlider() {

  new WOW.WOW({
    live: false
  }).init();
  

  const [sliderState, setSliderState] = useState([
    {
        "title": "Welcome To Aswaaq",
        "body": "Building Specialized Market Places",
        "link": "Know More",
        img: bg
    },
    {
        "body": "Lorem ipsum dolor sit amet, consetetur.",
        "link": "Know More",
        img: bg2
    },
    {
      "body": "Lorem ipsum dolor sit amet, consetetur.",
      "link": "Know More",
      img: bg3
    }
  ]); 


  return (
    <section className={classes.mainSlider}>
      
        <Swiper 
              autoplay={{
                  "delay": 2500,
                  "disableOnInteraction": false
                }}  
                slidesPerView={1} 
                loop={true} 
                effect={'fade'} 
                pagination={{"clickable": true}} 
                navigation={true} 
                speed={1000}
                className="mySwiper">
                  {sliderState.map((slide) => {
                      return (
                        <SwiperSlide className={classes.slide}>
                          <div className={classes.imgParent}>
                            <img src={slide.img} alt="" />
                          </div>
                          <Container className={classes.sliderContent}>
                              <div className={classes.sliderTxt}>
                                <div className="animation">
                                  <h4>{slide.title}</h4>
                                  <h1>{slide.body}</h1>
                                </div>
                                <MainLink className={`${classes2.mainAnchorLink} ${classes2.blueAnchorLink} `} top="">
                                  <span>{slide.link}</span>  
                                </MainLink>
                              </div>
                          </Container>
                        </SwiperSlide>   
                      )
                  })}
          </Swiper>
      
    </section>
  )};
