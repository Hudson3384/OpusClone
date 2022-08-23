import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
        display: flex;
        width: 1200px;
            


        
    `
    const CardContent = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 4rem;
        h2 {
            font-weight: 500;
            font-size:4.4rem;
            color: #373a3c;
            margin-bottom: 15px;
        }
        h3 {
            color:#373a3c; 
            font-size: 1.6rem;
            margin-bottom: 2.2rem;
            line-height: 1.5em;
        }

        span{
            font-size: 10px;
            text-transform: uppercase;
            align-items: center;
            margin-bottom: 0.5rem;

            svg {
                margin-right: 0.5rem;
            }
        }

        h4 {
            color:#585a5c; 
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 100;

            svg {
                margin-right: 0.5rem;
            }
        }

        a {
            text-decoration: none;
            margin: 40px 0 0 0;
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
         }
        
    `
    const CardImage = styled.div`
        img {
            max-width: 1000px;
            width: 100%;
            transition: all 1s;
            &:hover {
                border-radius: 50px 0 50px 0;
            }
        }
             
    `

const EnterpriseCard = ({title,description,location,details,link,src,alt}) => {

    

    return (
        <Card>
            <CardContent>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.122" height="12.153" viewBox="0 0 9.122 12.153">
                    <path id="Caminho_10" data-name="Caminho 10" d="M14.722,9.069l.023.033c.028.042.057.082.086.127l3.3,4.743a.516.516,0,0,0,.846,0l3.294-4.739c.032-.044.062-.087.092-.127l.02-.03h0a4.561,4.561,0,1,0-7.661,0ZM18.555,4.7a1.9,1.9,0,1,1-1.9,1.9,1.9,1.9,0,0,1,1.9-1.9Z" transform="translate(-13.994 -2.039)" fill="#a4a4a4"></path>
                    </svg>{location}
                </span>
                <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.553" height="14.657" viewBox="0 0 12.553 14.657">
                        <g id="Grupo_77" data-name="Grupo 77" transform="translate(6.416) rotate(30)">
                            <path id="Caminho_11" data-name="Caminho 11" d="M2.16,11.45l1.383,1.383,1.339-1.339-.951-.907.951-.951-.951-.907.994-.951V6.784a3.164,3.164,0,0,0,1.123-.735,3.544,3.544,0,1,0-5.012,0,3.164,3.164,0,0,0,1.123.735Zm.518-9.981a1.222,1.222,0,1,1,0,1.728A1.226,1.226,0,0,1,2.679,1.469Z" fill="#a4a4a4" fillRule="evenodd"></path>
                        </g>
                    </svg>
                    {details}
                </h4>
                <a href={link}>Saiba Mais</a>
            </CardContent>
            <CardImage>
                <img src={src} alt={alt}/>
            </CardImage>
        </Card>
    );
}

export default EnterpriseCard;
