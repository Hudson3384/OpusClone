import React, { useState } from "react";
import styled from "styled-components";

const Baseline = styled.div`
  width: 100%;
  height: 980px;
  align-items: center;
`;
const ImageContainer = styled.div`
  position: absolute;
  background: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    opacity: 0.2;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  video {
    position: relative;
    top: 50px;
    filter: grayscale(1);
  }
  button {
    cursor: pointer;
    width: 135px;
    height: 135px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 100%;
    border: 2px solid white;
    &:hover {
      border-color: #c22f45;
      svg path {
        fill: #c22f45;
      }
    }
  }
`

  const Text = styled.section`
      margin: 60px;
      display: flex;
      width: 1200px;

  `
  const TextContent = styled.div`
    width: 50%;
    color:#585a5c;
    h3 {
      font-size: 40px;
      padding: 40px 0;
    }
    p {
      font-size: 14px;
      line-height: 1.6rem;
    }

  `
  const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    text-align: center;
    justify-content: center;
  `
  const CallButton = styled.a`
       text-decoration: none;
       margin: 40px 0 0 0;
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
       border: solid #000000 1px;
       &:before {
        width: 25px;
         left: 24px;
         content: "";
         position: absolute;
        background: #C22F45;
        width: 32px;
        height: 2px;
        left: 33px;
        top: calc(50% - 1px);
          }
                &:hover {
                    letter-spacing: 0.2em;
                }
        
  `


const VideoSection = () => {

    const [video, setvideo] = useState("src/assets/videos/home.mp4");
    //const [onClickVideo, setonClickVideo] = useState(false);
    const handleVideoClick = () => {
        // setonClickVideo(true)
        setvideo('https://youtu.be/eiP8Ncnbv9k')
    }
  return (
    <>
    <Baseline>
      <ImageContainer>
        <img src="src/assets/images/banner.webp" />
      </ImageContainer>
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <button onClick={handleVideoClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="31"
            viewBox="0 0 23 31"
          >
            <path
              id="Polígono_1"
              data-name="Polígono 1"
              d="M15.5,0,31,23H0Z"
              transform="translate(23) rotate(90)"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </VideoContainer>
      <Text>
        <TextContent>
        <h3>Você tem todos os motivos para escolher um Opus<span>.</span></h3>
        <p>O que você deseja? Pode ser uma localização nobre, um atendimento premiado ou o maior programa de personalização do mercado.
            Não importa, a gente entrega com perfeição em cada detalhe. Afinal, na Opus o alto padrão está em tudo e onde mais importa:
            no nosso DNA. O DNA de uma empresa sólida, que atua com a responsabilidade de quem sabe que sonhos são feitos para se
            tornarem concretos.</p>
        </TextContent>
        <ButtonContainer>
        <CallButton>
            <span>CONHEÇA A OPUS</span>
        </CallButton>
        </ButtonContainer>
        
    </Text>
    </Baseline>
    
    </>
  );
};

export default VideoSection;
