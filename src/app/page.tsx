'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Hero from './components/Hero';



const Example = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100,    // Offset value before animation starts
    });
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Example;
