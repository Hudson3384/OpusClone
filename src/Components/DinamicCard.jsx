import React from 'react';
import styled from 'styled-components';




const DinamicCard = ({src, alt, local, title, subtitle}) => {

    const Card = styled.a`
    display: flex;
    flex-direction: column;
    width: 31rem;
    height: 56.5rem;
    text-decoration: none;

    img {
        width: 100%;
        transition: all 0.5s;
        &:hover {
                border-radius: 40px 0;
            }
    }
 
`

const Infos = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    color: #434343;
    span {
        font-weight: 500;
        color: red;
        margin-right: 5px;
    }
    img {
        &:hover {
                border-radius: 50px 0 50px 0;
            }
    }
    p {
       
        margin-right: 5px;
        font-weight: 600;
    }
`
const Title = styled.h2`
    font-size: 20px;
    font-weight:700;
    text-decoration: none;
    color: black;
    
`

const SubTitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #434343;

`



    return (
        <Card href='/'>
            <img src={src} alt={alt}/>
            <Infos>
                <p>Entregues</p>
                <span>/ </span>
                <p> {local}</p>
            </Infos>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Card>
    );
}

export default DinamicCard;
