import { allProductsData } from './FakeData';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FaCartArrowDown } from "react-icons/fa";

export default function ProductDetail() {
    let { productId } = useParams();

    const getProductById = (id) => {
        return allProductsData.find(product => product.id === parseInt(id));
    };

    const product = getProductById(productId);

    const addToCart = (product) => {
        console.log('Product added to cart:', product);
    };

    if (!product) {
        return <div className="text-center text-lg text-red-600">Product not found</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <div className="flex justify-center items-center py-10 px-4">
                <div className="bg-gray-200 border border-gray-400 rounded-lg flex flex-col lg:flex-row p-6 lg:p-10 w-full max-w-6xl">
                    
                    {/* Product Image */}
                    <div className="flex justify-center items-center mb-8 lg:mb-0 lg:mr-10">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-[300px] h-auto lg:max-h-[400px] object-cover rounded-md"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">{product.name}</h2>
                        <p className="text-lg text-gray-700 mb-2">Price: ${product.price}</p>
                        <p className="text-lg text-gray-700 mb-4">Quality: {product.quality}</p>
                        <p className="text-lg text-gray-800 font-semibold mb-1">Description:</p>
                        <p className="text-gray-700 text-base mb-6 max-w-lg">{product.description}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-full sm:w-auto"
                        >
                            <FaCartArrowDown className="mr-3" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 underline mt-10 mb-6">
                Similar products from different stores
            </h1>
        </div>
    );
}
