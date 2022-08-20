
import styled from 'styled-components'

const Menu  = styled.aside`
    background: #101820;
    position: absolute;
    width: 100%;
    max-width: 950px;
    top: 0;
    left: ${({ active }) => active ? '0' : '-100%'};
    padding: 25px 60px 50px;
    transition: all 0.5s;
    z-index: 10;

    div {
        display: flex;
        justify-content: space-between;

        img {
            cursor: pointer;
        }
    
        button {
            cursor: pointer;
            background-color: transparent;
            border: none;
            position: absolute;
            right: 30px;
            top: 40px;
}
            &:hover {
                border: none; 
                svg path {
                    fill: #C22F45;
                }
            }
            &:active {
                border: none;
            }
        }
    

    nav {
        margin: 90px 60px 100px 0; 
        li  a {
                cursor: pointer;
                text-decoration: none;
                line-height: 2em;
                font-size: 20px;
                font-weight: 100;
                letter-spacing: .2rem;
                color: rgba(255,255,255);
                &:hover {
                    color: #C22F45;
                }
            } 
    }
`

const LeftMenu = ({active, handleActive}) => {
    
    return (
            <Menu active={active}>
                <div>
                    <a href='/'>
                    <img
                        src = "src/assets/logo/logo-white.webp"
                        alt = "Logo da Opus Incorporadora"/>
                    </a>
                    <button onClick={handleActive} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.9" height="24.9" viewBox="0 0 24.9 24.9">
                            <g  transform="translate(-768 302.1)">
                                <path  d="M39.045,32.35,49.149,22.2a1.34,1.34,0,0,0-1.895-1.895L37.15,30.455,27,20.306A1.34,1.34,0,0,0,25.106,22.2L35.21,32.35,25.106,42.5a1.308,1.308,0,0,0,0,1.895,1.308,1.308,0,0,0,1.895,0L37.15,34.245,47.3,44.394a1.308,1.308,0,0,0,1.895,0,1.308,1.308,0,0,0,0-1.895Z" transform="translate(743.3 -322)" fill="#fff"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <nav>
                    <li>
                        <ul><a href='/'>Institucional</a></ul>
                        <ul><a href='/'>Empreendimentos</a></ul>
                        <ul><a href='/'>Revista Opus</a></ul>
                        <ul><a href='/'>Portal do Cliente</a></ul>
                        <ul><a href='/'>Portal do Corretor</a></ul>
                        <ul><a href='/'>Contato</a></ul>
                    </li>
                </nav>   
            </Menu>
    );
}

export default LeftMenu;
