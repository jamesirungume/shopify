import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Images/Home.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { shirtsData, sweatpantsData, tShirtsData, tracksuitsData, jeansData, suitsData, accessoriesData, outerwearData, outfitsData, shoesData } from './FakeData';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Function to handle scroll event
  const handleScroll = () => {
    // Check if user has scrolled beyond a certain threshold, set isScrolled accordingly
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on component unmount
    };
  }, []); // Empty dependency array to ensure effect runs only once on mount

  const allProductsData = [
    ...shirtsData,
    ...sweatpantsData,
    ...tShirtsData,
    ...tracksuitsData,
    ...jeansData,
    ...suitsData,
    ...accessoriesData,
    ...outerwearData,
    ...outfitsData,
    ...shoesData
  ];
  const highRankingProducts = allProductsData.filter(product => product.Ranking === 'High');
  const renderQualityTag = (quality) => {
    let tagColor;
    switch (quality) {
      case 'premium':
        tagColor = 'bg-green-500';
        break;
      case 'standard':
        tagColor = 'bg-yellow-500';
        break;
      case 'basic':
        tagColor = 'bg-red-500';
        break;
      default:
        tagColor = 'bg-gray-500';
        break;
    }

    return (
      <span className={`inline-block px-2 py-1 text-xs font-semibold text-white uppercase rounded ${tagColor}`}>
        {quality}
      </span>
    );
  };

  return (
    <>
      <Navbar prop={!isScrolled}  /> {/* Pass the inverse of isScrolled to the prop */}
      <div style={{ maxHeight: '100vh' }}>
        <div className="relative w-screen h-[90vh]">
          <img src={Home} alt="My Image" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl font-bold text-center mb-8 font-poppins w-[80%]">
              Get the most out of your shopping
            </h2>
            <h1 className="text-white text-5xl font-bold text-center mb-12 font-poppins w-[80%]">
              All clothes and footwear store
            </h1>
            <Link to="/Products">
            <button 
              className="text-white text-2xl font-bold py-4 px-16 rounded-md transition-all duration-300 hover:py-4 hover:px-16 hover:scale-105" 
              style={{ backgroundColor: '#0000FF' }}
            >
              Shop now
            </button>
            </Link>
          </div>
        </div>
        <div style={{ padding: '15px' }}>
          <div className='flex justify-between'>
            <h1 className="text-xl text-black font-semibold hover:text-gray-700 hover:text-gray-500 underline cursor-pointer">
              Recently popular products
            </h1>
            <div className="flex items-center">
              <Link to="/Products" className="text-xl text-black font-semibold hover:text-gray-700 hover:text-gray-500 underline cursor-pointer">
                All Products
              </Link>
              <FaArrowRightLong className="text-gray-700 text-lg hover:text-gray-500 ml-2 w-9 h-6" />
            </div>
          </div>
          <div className='p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700' style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', margin: '15px auto' }}>
            {highRankingProducts.map(product => (
              <div key={product.id} style={{ flexBasis: '25%', padding: '6px', textAlign: 'start', position: 'relative' }}>
                <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px', minHeight: '210px', minWidth: '280px', objectFit: 'cover' }} />
                <div className="p-3 mb-5" style={{ position: 'absolute', top: '0', left: '0' }}>
                  {renderQualityTag(product.quality)}
                </div>
                <div className="p-3">
                  <p className="text-xl text-black font-semibold hover:text-gray-700">{product.name}</p>
                  <p className="text-gray-700 text-lg hover:text-gray-500">Price: ${product.price}</p>
                  <p className="text-gray-700 text-lg hover:text-gray-500">Available at: {product.store}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
    </>
  );
}
