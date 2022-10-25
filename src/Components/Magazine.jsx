import React from "react";
import styled from "styled-components";

const Magazine = () => {
  const MagazineBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `;

  const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35rem;
    height: 37rem;
    color: #373a3c;
    background-color: #ebebeb;
    h2 {
      font-size: 38px;
      font-weight: 500;
      margin-bottom: 30px;
    }
  `;
  const Grid = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    background-color: #101820;
    height: 52rem;
  `;

  const GridItem = styled.a`
    width: 40rem;
    height: 23rem;
    padding: 0;

    
    div {
      margin-top: 0;
      height: 22rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      
      &:hover {

        img {
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
      }
    }
    span {
      color: #a4a4a4;
      margin-bottom: 20px;
    }

    p {
      position: relative;
      font-size: 16px;
      margin: 20px 0px;
      line-height: 20px;
      &:before {
        content: "";
        position: absolute;
        top: 60px;
        left: 0;
        width: 33px;
        height: 3px;
        background: #c22f45;
      }
    }

    svg {
      position: relative;
      bottom: calc(0%);
      left: 100%;
    }
  `;

  const ImageContainer = styled.div`
    overflow: hidden;
    width: 40rem;
    height:32rem;
    padding: 0;
    margin: 0;
    img {
      margin-bottom: 0;
      transition: all 1s ease;
      width: 100%;
    }

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
    border: solid #000000 1px;
    &:before {
      content: "";
      position: absolute;
      background: #c22f45;
      width: 32px;
      height: 2px;
      left: 33px;
      top: calc(50% - 1px);
    }
    &:hover {
      letter-spacing: 0.2em;
    }
  `;

  return (
    <MagazineBlock>
      <Background>
        <h2>Revista Opus</h2>
        <Button>Ver Todas</Button>
      </Background>
      <Grid>
        <GridItem>
          <ImageContainer>
            <img src='src/assets/images/Magazine/1.png' />
          </ImageContainer>
          <div>
            <span>28.07.2022</span>
            <p>
              Zaha Hadid Architects projeta edifício inspirado no leito de um
              rio
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='11.526'
              height='20.934'
              viewBox='0 0 11.526 20.934'>
              <g
                id='Grupo_16'
                data-name='Grupo 16'
                transform='translate(-1018.474 -2811.947)'>
                <g
                  id='Grupo_15'
                  data-name='Grupo 15'
                  transform='translate(1030 2832.882) rotate(180)'>
                  <g id='back' transform='translate(0 0)'>
                    <path
                      id='Chevron_Right'
                      d='M.306,11.214,9.72,20.625a1.057,1.057,0,1,0,1.5-1.493L2.549,10.468,11.215,1.8A1.057,1.057,0,0,0,9.719.309L.3,9.72A1.067,1.067,0,0,0,.306,11.214Z'
                      transform='translate(0)'
                      fill='#fff'></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </GridItem>
        <GridItem>
          <img src='src/assets/images/Magazine/2.jpg' />
          <div>
            <span>28.07.2022</span>
            <p>
              Zaha Hadid Architects projeta edifício inspirado no leito de um
              rio
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='11.526'
              height='20.934'
              viewBox='0 0 11.526 20.934'>
              <g
                id='Grupo_16'
                data-name='Grupo 16'
                transform='translate(-1018.474 -2811.947)'>
                <g
                  id='Grupo_15'
                  data-name='Grupo 15'
                  transform='translate(1030 2832.882) rotate(180)'>
                  <g id='back' transform='translate(0 0)'>
                    <path
                      id='Chevron_Right'
                      d='M.306,11.214,9.72,20.625a1.057,1.057,0,1,0,1.5-1.493L2.549,10.468,11.215,1.8A1.057,1.057,0,0,0,9.719.309L.3,9.72A1.067,1.067,0,0,0,.306,11.214Z'
                      transform='translate(0)'
                      fill='#fff'></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </GridItem>
        <GridItem>
          <img src='src/assets/images/Magazine/3.jpeg' />
          <div>
            <span>28.07.2022</span>
            <p>
              Zaha Hadid Architects projeta edifício inspirado no leito de um
              rio
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='11.526'
              height='20.934'
              viewBox='0 0 11.526 20.934'>
              <g
                id='Grupo_16'
                data-name='Grupo 16'
                transform='translate(-1018.474 -2811.947)'>
                <g
                  id='Grupo_15'
                  data-name='Grupo 15'
                  transform='translate(1030 2832.882) rotate(180)'>
                  <g id='back' transform='translate(0 0)'>
                    <path
                      id='Chevron_Right'
                      d='M.306,11.214,9.72,20.625a1.057,1.057,0,1,0,1.5-1.493L2.549,10.468,11.215,1.8A1.057,1.057,0,0,0,9.719.309L.3,9.72A1.067,1.067,0,0,0,.306,11.214Z'
                      transform='translate(0)'
                      fill='#fff'></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </GridItem>
      </Grid>
    </MagazineBlock>
  );
};

export default Magazine;
