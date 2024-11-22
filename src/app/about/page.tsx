import React from 'react';

const AboutUs = () => {
  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center text-center px-5" style={{ backgroundImage: "url('/pic2.png')" }}>
      <div className="bg-black/60 p-10 sm:p-20 rounded-lg">
        <h1 className="text-white font-bold mb-5 text-3xl">
          About Us
        </h1>
        <p className="text-white text-lg leading-relaxed">
          Welcome to Watch Store. Where we believe a watch is more than just an accessory; it is a statement of style, precision, and craftsmanship. Our mission is to bring you a diverse selection of premium timepieces from around the globe, each chosen for its quality and unique design. Whether you are a connoisseur or simply appreciate the beauty of a well-made watch, we are here to help you find the perfect piece to complement your personality and elevate your look.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
