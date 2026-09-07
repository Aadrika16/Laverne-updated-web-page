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

      <section id="home">
        <Hero />
      </section>

      <section id="collections">
        <Collections />
      </section>

      <section id="categories">
        <CuratedCategories />
      </section>

      <section id="our-story">
        <FounderStory />
      </section>

      <section id="exclusive">
        <ExclusiveCollection />
      </section>

      <section id="instagram">
        <Instagram />
      </section>

      <Footer />
    </div>
  );
};

export default Home;