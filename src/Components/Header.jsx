import React, { useState } from 'react';
import styled from 'styled-components';
import LeftMenu from './LeftMenu';

const PrincipalMenu = styled.header`
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ECECEC;
    padding: 0 45px;

    button {
        border: none;
        cursor: pointer;
        &:hover {
            border: none;
            svg line {
                 stroke: #C22F45;
            }
        }
    }

    img {
        position: absolute;
        left: calc(50% - 116px);
        width: 116px;
        height: 45px;
    }

    ul {
        display: flex; 
        li {
            align-items: center;
            margin-right: 2rem;
            list-style-type: none;
            &:hover {
                    a {
                        color: #C22F45;
                        svg path  {
                            fill: #C22F45;
                        } 
                    }
                }
            a {
                font-size: 14px;
                text-decoration: none;  
                color: #707070;  
                svg {
                    margin-right: 0.5rem;
                }
            }
        }
    }
`

const Header = () => {
    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active)}
    return (
        <>
            <LeftMenu 
                handleActive={handleActive}
                active={active}/>
            <PrincipalMenu>
                <button onClick={handleActive}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="49.5" height="21.927" viewBox="0 0 49.5 21.927">
                        <g id="Grupo_49" data-name="Grupo 49" transform="translate(-273 -46)">
                            <g id="Grupo_1" data-name="Grupo 1" transform="translate(240.5 20.5)">
                                <line  x2="49.5" transform="translate(32.5 26.5)" fill="none" stroke="#000"   strokeWidth="2"></line>
                                <line  x2="49.5" transform="translate(32.5 36.463)" fill="none" stroke="#000" strokeWidth="2"></line>
                                <line  x2="49.5" transform="translate(32.5 46.427)" fill="none" stroke="#000" strokeWidth="2"></line>
                            </g>
                        </g>
                    </svg>
                </button>
                
                <img 
                    src='src\assets\logo\logo-black.webp'
                    alt="logo Da Opus Incorporadora"
                />
                <nav>
                    <ul>
                        <li><a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.697" height="16.02" viewBox="0 0 11.697 16.02">
                            <g id="noun_phone_talking_1372094" data-name="noun_phone talking_1372094" transform="translate(163.253 61.543)">
                            <g id="Grupo_89" data-name="Grupo 89" transform="translate(-163.253 -61.543)">
                            <path id="Caminho_12" data-name="Caminho 12" d="M14.779,3.108h.79v.75h-.79Zm1.425.75v-.75h.79v.75H16.2Zm-2.85-.75h.79v.75h-.79ZM17.536,0H12.914a.91.91,0,0,0-.907.907V4.534a.91.91,0,0,0,.907.907h.579V7.214L15.97,5.441h1.566a.909.909,0,0,0,.907-.907V.907A.91.91,0,0,0,17.536,0ZM6.747,2.186A15.784,15.784,0,0,0,8.718,10.27a15.775,15.775,0,0,0,6.017,5.75l1.887-3.269-2.79-2.17-.963.483A13.09,13.09,0,0,1,11.234,8.82a13.226,13.226,0,0,1-1.128-2.54l.9-.592-.484-3.5Z" transform="translate(-6.747)" fillRule="red"></path>
                            </g>
                            </g>
                            </svg>
                            Contato
                        </a></li>
                        <li><a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9.755" height="12.713" viewBox="0 0 9.755 12.713">
                            <g  transform="translate(-25.826 -27.564)">
                                <g  transform="translate(25.826 27.564)">
                                <path  d="M136.52,54.294c0,3.6.036,7.339,4.878,7.983,4.842-.644,4.878-4.378,4.878-7.983Zm4.361,2.587h1.032v2.635h-1.032Zm-3.053-2.912v-.631a3.575,3.575,0,1,1,7.139,0v.631h-1.54v-.631a2.04,2.04,0,1,0-4.059,0v.631Z" transform="translate(-136.52 -49.564)" fillRule="evenodd"></path>
                                </g>
                            </g>
                            </svg>
                            Portal do Corretor
                        </a></li>
                        <li><a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.437" height="12.437" viewBox="0 0 12.437 12.437">
                                <g id="noun_User_829920" transform="translate(-26.184 -4.827)">
                                    <g id="Grupo_24" data-name="Grupo 24" transform="translate(26.184 4.827)">
                                        <path id="Caminho_2" data-name="Caminho 2" d="M.9,305.371c.032-.236.056-.474.1-.707A6.214,6.214,0,0,1,3.63,300.6a4.9,4.9,0,0,0,3.488,1.419,4.914,4.914,0,0,0,3.49-1.423c.2.155.4.3.593.471a6.144,6.144,0,0,1,2.091,3.976c.012.107.029.216.044.323v.389H.9C.9,305.63.9,305.5.9,305.371Z" transform="translate(-0.9 -293.323)"></path>
                                        <path id="Caminho_3" data-name="Caminho 3" d="M107.57,1c.245.049.5.08.734.148a3.722,3.722,0,1,1-1.8-.066c.16-.036.326-.056.488-.083Z" transform="translate(-101.058 -1)"></path>
                                    </g>
                                </g>
                            </svg>
                            Portal do Cliente
                        </a></li>
                    </ul>
                </nav>
            </PrincipalMenu>
        </>
    );
}

export default Header;
