import React, { useEffect, useState } from "react";
import styled from "styled-components";




const Baseline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  background: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
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
  iframe {
    position: relative;
    top: 50px;
    border-radius: 30px;
    box-shadow: 4px 4px 4px 1px;
    z-index: 5;
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
      justify-content: center;
      max-width: 1200px;
      width: 80%;
      padding: 0 30px;

  `
  const TextContent = styled.div`
    width: 50%;
    color:#585a5c;
    h3 {
      font-size: 40px;
      padding: 40px 0;
      color: black;
      font-weight: bold;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

  `
  const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const CallButton = styled.a`
       text-decoration: none;
       margin: 40px 0 0 0;
       justify-content: center;
       align-items: center;
       display: flex;
       flex-direction: row;
       font-size: 14px;
       line-height: 14px;
       font-weight: 200;
       text-transform: uppercase;
       color: black;
       border: 1px solid #727272;
       transition: all 0.3s;
       width: 230px;
       height: 50px;
       &:before {
                content: "";
                background: #C22F45;
                width: 32px;
                height: 2px;
                margin-right: 20px;
                
      
              }
                &:hover {
                    letter-spacing: 0.1rem;
                }
        
  `


const VideoSection = () => {
  const [onClickVideo, setonClickVideo] = useState(true);
  const handleVideoClick = () => {
    setonClickVideo(!onClickVideo)
    console.log(onClickVideo)
  }


  return (
    <>
    <Baseline>
      <ImageContainer>
        <img src="src/assets/images/banner.webp" />
      </ImageContainer>
      <VideoContainer>
        {onClickVideo ?
        <video autoPlay loop muted>
          <source src="src/assets/videos/home.mp4" type="video/mp4" />
        </video> : 
        <iframe width="728" height="410" autoPlay src="https://www.youtube.com/embed/eiP8Ncnbv9k?autoplay=1" title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
        
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
