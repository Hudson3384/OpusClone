import React from 'react';
import DinamicCarousel from '../Components/DinamicCarousel';
import EnterpriseCarousel from '../Components/EnterpriseCarousel';

import Header from '../Components/Header';
import Magazine from '../Components/Magazine';
import VideoSection from '../Components/VideoSection';

const Home = () => {
    return (
        <>
          <Header/>
          <EnterpriseCarousel/>
          <VideoSection/>
          <DinamicCarousel/>
          <Magazine/>
        </>
    );
}

export default Home;
