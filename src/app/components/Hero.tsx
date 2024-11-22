import React from "react";

const BackgroundPage: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center text-white text-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div className="bg-black/50 p-5 rounded-lg">
        <h1 className="text-4xl mb-4">
          Welcome to <span className="text-yellow-500">Watch Store</span>
        </h1>
        <p className="mt-6 text-lg mb-6 italic">
          Explore our exclusive collection of luxury watches designed to elevate
          your style. Don&apos;t miss out—click the button below to find the
          perfect watch for you!
        </p>
        <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-red-500 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BackgroundPage;
