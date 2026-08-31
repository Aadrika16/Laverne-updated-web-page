import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Collections from '../../components/Collections';
import CuratedCategories from '../../components/CuratedCategories';
import FounderStory from '../../components/FounderStory';
import ExclusiveCollection from '../../components/ExclusiveCollection';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Collections />
      <CuratedCategories />
      <FounderStory />
      <ExclusiveCollection />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home;