import React from 'react';
import styled from 'styled-components';


const Baseline = styled.div`
        width:100%;
        height: 980px;
        background-image: url('src/assets/images/banner.webp');
        background-repeat: no-repeat;
        background-position: initial;
        position: relative;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(16, 24, 32, 0.8);
        }

        video {
            position: relative;
        }
`

const VideoSection = () => {

   
    return (
       <Baseline>
        <video autoPlay loop muted>
            <source src='src/assets/videos/home.mp4' type='video/mp4'/>
        </video>
       </Baseline>
    );
}

export default VideoSection;
