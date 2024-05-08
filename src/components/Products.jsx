import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FaSearch } from 'react-icons/fa';
import { shirtsData } from './FakeData'; // Corrected import statement
import { sweatpantsData } from './FakeData'; // Corrected import statement
import { tShirtsData } from './FakeData';
import { tracksuitsData } from './FakeData';
import { jeansData } from './FakeData';
import { suitsData } from './FakeData';
import { accessoriesData } from './FakeData';
import { outerwearData } from './FakeData';
import { outfitsData } from './FakeData';
import { shoesData } from './FakeData';

export default function Products() {
  useEffect(() => {
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [productsData, setProductsData] = useState([]);

  // Add more category data arrays here

  const handleCategoryClick = (category) => {
    switch (category) {
      case 'shirts':
        setProductsData(shirtsData);
        break;
      case 'sweatpants':
        setProductsData(sweatpantsData);
        break;
        case 't-shirts':
      setProductsData(tShirtsData);
      break;
    case 'tracksuits':
      setProductsData(tracksuitsData);
      break;
    case 'jeans':
      setProductsData(jeansData);
      break;
    case 'suits':
      setProductsData(suitsData);
      break;
    case 'accessories':
      setProductsData(accessoriesData);
      break;
    case 'outerwear':
      setProductsData(outerwearData);
      break;
    case 'outfits':
      setProductsData(outfitsData);
      break;
      case 'shoes':
        setProductsData(shoesData); // Added case for shoes
        break; 
      default:
        setProductsData([]);
        break;
    }
  };

  return (
    <div className="relative">
      <Navbar prop={false} className="fixed top-0 w-full"/>

      <div className="flex justify-center mt-9">
        <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="px-20 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            style={{ backgroundColor: '#0000FF' }}
            className="px-7 py-3 bg-blue-500 text-white font-semibold rounded-md transition-all duration-300 hover:py-4 hover:px-8 ml-4"
          >
            Search
          </button>
        </div>
      </div>

      <div className="overflow-hidden mt-16">
        <aside id="sidebar-multi-level-sidebar" className="fixed top-16 left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-800 overflow-y-auto mt-6">
          <div className="h-full px-3 py-4 overflow-y-auto font-serif">
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <ul className="list-disc pl-6">
            <li className="mb-2">
                <button onClick={() => handleCategoryClick('shoes')} className="text-black text-xl hover:text-blue-600">Shoes</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('shirts')} className="text-black text-xl hover:text-blue-600">Shirts</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('sweatpants')} className="text-black text-xl hover:text-blue-600">Sweatpants</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('t-shirts')} className="text-black text-xl hover:text-blue-600">T-shirts</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('tracksuits')} className="text-black text-xl hover:text-blue-600">Tracksuits</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('jeans')} className="text-black text-xl hover:text-blue-600">Jeans</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('suits')} className="text-black text-xl hover:text-blue-600">Suits</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('accessories')} className="text-black text-xl hover:text-blue-600">Accessories</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('outerwear')} className="text-black text-xl hover:text-blue-600">Outerwear(Jackets & Hoodies)</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleCategoryClick('outfits')} className="text-black text-xl hover:text-blue-600">Outfits</button>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 ml-64 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)', display: 'flex', flexWrap: 'wrap' }}>
          <div className="p-1 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {productsData.map(product => (
              <div key={product.id} style={{ flexBasis: '25%', padding: '6px' }}>
              <img src={product.image} alt={product.name} style={{  height: '350px' }} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.store}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
