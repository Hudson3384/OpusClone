import React from "react";
import styled from "styled-components";
import EnterpriseCard from "./EnterpriseCard";
import { Swiper, SwiperSlide as Slide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carousel = styled(Swiper)`
    --swiper-navigation-size: 22px;
    --swiper-theme-color: #c22f45; 
  .swiper-slide {
    width: 100%;
    padding: 100px 90px;
  }

  .swiper-button-prev {
    font-size: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #373a3c;
    &:hover {
      color: #c22f45;
    }
  }

  .swiper-button-next {
    font-size: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #373a3c;
    &:hover {
      color: #c22f45;
    }
  }

`;

const EnterpriseCarousel = () => {
  return (
    <Carousel
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      //    autoplay= {{ delay: 10000}}
    >
      <Slide>
        <EnterpriseCard
          title={"Opus Brava Design"}
          description={"Em meio a uma paisagem urbana, um refúgio da natureza."}
          location={"Setor Bueno"}
          details={"3 e 4 Suítes 157 a 324m²"}
          link={"https://opus.inc"}
          src={"src/assets/images/1.webp"}
          alt={"Image da Opus Brava Design"}
        />
      </Slide>
      <Slide>
        <EnterpriseCard
          title={"Opus Geo Home 136"}
          description={"Múltiplas formas de morar com aconchego e privacidade"}
          location={"Setor Bueno"}
          details={"3 e 4 Suítes 157 a 324m²"}
          link={"https://opus.inc"}
          src={"src/assets/images/2.webp"}
          alt={"Image da Opus Brava Design"}
        />
      </Slide>
      <Slide>
        <EnterpriseCard
          title={"Opus Brava Design"}
          description={"Em meio a uma paisagem urbana, um refúgio da natureza."}
          location={"Setor Bueno"}
          details={"3 e 4 Suítes 157 a 324m²"}
          link={"https://opus.inc"}
          src={"src/assets/images/2.webp"}
          alt={"Image da Opus Brava Design"}
        />
      </Slide>
    </Carousel>
  );
};

export default EnterpriseCarousel;
