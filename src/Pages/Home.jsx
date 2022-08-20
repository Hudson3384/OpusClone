import React from 'react';
import EnterpriseCarousel from '../Components/EnterpriseCarousel';

import Header from '../Components/Header';
import VideoSection from '../Components/VideoSection';

const Home = () => {
    return (
        <>
          <Header/>
          <EnterpriseCarousel/>
          <VideoSection/>
        </>
    );
}

export default Home;
