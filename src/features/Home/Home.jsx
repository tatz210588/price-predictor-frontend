import React, { useRef, useState } from 'react';
import Navbar from '../../layout/Navbar';
import HeroSection from './HeroSection';
import HowWork from './HowWork';
import ApartmentQuery from './ApartmentQuery';

const Home = () => {
  const heroSectionRef = useRef(null);

  const scrollToHeroSection = () => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [show, setShow] = useState(false)
  const handleshow =(value)=>{
    setShow(value)
  }

  return (
    <>
      <Navbar />
      {
        !show && (
          <>
            <div ref={heroSectionRef}>
              <HeroSection handleShow={handleshow}/>
            </div>
            <HowWork handleScrollUp={scrollToHeroSection} />
          </>
        )
      }
      {
        show && (
          <ApartmentQuery handleShow={handleshow}/>
        )
      }
    </>
  );
};

export default Home;
