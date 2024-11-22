import React from 'react';
import Image from 'next/image'; // Importing the Image component

const CustomComponent = () => {
  return (
    <div className="flex flex-col items-center px-4 ">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div data-aos="fade-down-left" className="bg-white border shadow-md hover:shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300">
          <div className="w-full">
            <Image src="/pic1.png" alt="Card Image 1" width={500} height={300} className="w-full rounded-lg" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold italic text-gray-800">ROLEX</h2>
            <p className="italic text-gray-600">Luxury Watch</p>
            <p className="text-blue-700 font-bold mt-2">$12000</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:scale-105 hover:shadow-md transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-down-left" className="bg-white border shadow-md hover:shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300">
          <div className="w-full">
            <Image src="/pic3.png" alt="Card Image 2" width={500} height={300} className="w-full rounded-lg" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold italic text-gray-800">OMEGA</h2>
            <p className="italic text-gray-600">Sporty Design</p>
            <p className="text-blue-700 font-bold mt-2">$8000</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:scale-105 hover:shadow-md transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-down-left" className="bg-white border shadow-md hover:shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300">
          <div className="w-full">
            <Image src="/pic4.png" alt="Card Image 3" width={500} height={300} className="w-full rounded-lg" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold italic text-gray-800">PATEK PHILLIPE</h2>
            <p className="italic text-gray-600">Elegant Timepiece</p>
            <p className="text-blue-700 font-bold mt-2">$18000</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:scale-105 hover:shadow-md transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div data-aos="fade-down-left" className="bg-white border shadow-md hover:shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300">
          <div className="w-full">
            <Image src="/pic5.png" alt="Card Image 4" width={500} height={300} className="w-full rounded-lg" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold italic text-gray-800">TAG HEUER</h2>
            <p className="italic text-gray-600">Sporty & Stylish</p>
            <p className="text-blue-700 font-bold mt-2">$11000</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:scale-105 hover:shadow-md transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div data-aos="fade-down-left" className="bg-white border shadow-md hover:shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300">
          <div className="w-full">
            <Image src="/pic6.png" alt="Card Image 5" width={500} height={300} className="w-full rounded-lg" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold italic text-gray-800">Breitling</h2>
            <p className="italic text-gray-600">Bold & Rugged</p>
            <p className="text-blue-700 font-bold mt-2">$16000</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:scale-105 hover:shadow-md transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div data-aos="fade-down-left" className="bg-white border shadow-md hover:shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300">
          <div className="w-full">
            <Image src="/pic7.png" alt="Card Image 6" width={500} height={300} className="w-full rounded-lg" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold italic text-gray-800">SEIKO</h2>
            <p className="italic text-gray-600">Affordable & Reliable</p>
            <p className="text-blue-700 font-bold mt-2">$10000</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:scale-105 hover:shadow-md transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
