import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import heroImg from '../Assets/Hero Image.png';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}  // Pass the imported image directly
        title="We Crush Your Competitors, Goals, And Sales Records - Without The B.S."
        
        buttonText="GET FREE CONSULTATION"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </>
  );
}
