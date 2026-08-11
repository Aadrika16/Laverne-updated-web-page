import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Stats from '../../components/Stats';
import Collections from '../../components/Collections';
import FounderStory from '../../components/FounderStory';
import SignatureCrafts from '../../components/SignatureCrafts';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
      <FounderStory />
      <SignatureCrafts />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home;