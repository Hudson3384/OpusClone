import React from 'react';
import DinamicCard from './DinamicCard';
import styled from 'styled-components';
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";



const DinamicCarousel = () => {


    const  Carousel = styled(Swiper)`
        --swiper-navigation-size: 22px;
        --swiper-theme-color: #c22f45; 
        margin-bottom: 20px;
        margin-left: 50px;
    `

    const Button = styled.a`
            text-decoration: none;
            position: relative;
            display: block;
            padding: 18px 0 16px 90px;
            font-size: 14px;
            line-height: 14px;
            font-weight: 200;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: black;
            border: 1px solid #727272;
            transition: all 0.3s;
            width: 230px;
            height: 50px;
            bottom: 70px;
            left: calc(60%);
            
            border: solid #000000 1px;
            &:before {
                content: "";
                position: absolute;
                background: #C22F45;
                width: 32px;
                height: 2px;
                left: 33px;
                top: calc(50% - 1px);
            }
            &:hover {
                letter-spacing: 0.2em;}
    `

    return (
        <>
        <Carousel
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay= {{ delay: 5000}}        
        >
            <SwiperSlide>
                <DinamicCard
                    src="src/assets/images/DinamicCarousel/1.webp" 
                    alt="Imagem do Empreendimento"
                    local="Setor Bueno"
                    title="Trya By Opus"
                    subtitle="1, 2, 3 Suites de 155 á 165 m²"
                />
            </SwiperSlide>
            <SwiperSlide>
                <DinamicCard
                    src="src/assets/images/DinamicCarousel/2.png" 
                    alt="Imagem do Empreendimento"
                    local="Setor Bueno"
                    title="Opus Geo Work 136"
                    subtitle="1, 2, 3 Suites de 49 á 715 m²"
                />
            </SwiperSlide>
            <SwiperSlide>
                <DinamicCard
                    src="src/assets/images/DinamicCarousel/3.png" 
                    alt="Imagem do Empreendimento"
                    local="Setor Bueno"
                    title="Opus Geo Home 136"
                    subtitle="1, 2, 3 Suites de 49 á 165 m²"
                />
            </SwiperSlide>
            <SwiperSlide>
                <DinamicCard
                    src="src/assets/images/DinamicCarousel/4.png" 
                    alt="Imagem do Empreendimento"
                    local="Setor Bueno"
                    title="Opus Geo Home 136"
                    subtitle="1, 2, 3 Suites de 49 á 165 m²"
                />
            </SwiperSlide>
            <SwiperSlide>
                <DinamicCard
                    src="src/assets/images/DinamicCarousel/5.png" 
                    alt="Imagem do Empreendimento"
                    local="Setor Bueno"
                    title="Opus Geo Home 136"
                    subtitle="1, 2, 3 Suites de 49 á 165 m²"
                />
            </SwiperSlide>
        </Carousel>
        <Button href='/'>SAIBA MAIS</Button>
        </>
    );
}

export default DinamicCarousel;
