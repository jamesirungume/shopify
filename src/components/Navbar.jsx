import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

export default function Navbar({ prop }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 p-6 flex justify-between items-center ${prop ? 'bg-transparent fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className="flex items-center">
        <FaLink className="text-white text-4xl mr-2" />
        <h1 className="text-white text-3xl font-bold font-montserrat">Shopify +</h1>
      </div>

      <div className="max-w-7xl flex justify-end">
        <div className="flex space-x-10 mr-10 relative">
          <Link to="/" className="text-white hover:text-gray-300 text-lg text-center">
            Home
          </Link>
          <Link to="/" className="text-white hover:text-gray-300 text-lg text-center">
            Online stores
          </Link>
          <Link to="/Contact" className="text-white hover:text-gray-300 text-lg text-center">
            Contact
          </Link>
          <span className="text-white text-4xl font-bold mt-[-4px]">|</span>
          <Link to="/cart" style={{ marginLeft: '0.5rem' }} className="text-white hover:text-gray-300 text-lg text-center">
            Cart
          </Link>
          <Link to="/" className="text-white hover:text-gray-300 text-lg text-center">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
