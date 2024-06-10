import { allProductsData } from './FakeData';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FaCartArrowDown } from "react-icons/fa";


export default function ProductDetail() {
    let { productId } = useParams(); // Get the product ID from route parameters
  
    // Function to get product details by ID
    const getProductById = (id) => {
        // Find the product in the allProductsData array by ID
        return allProductsData.find(product => product.id === parseInt(id));
    };
  
    // Fetch the product details
    const product = getProductById(productId);
  
    // Function to add product to cart
    const addToCart = (product) => {
        // Implement your logic to add the product to the cart
        console.log('Product added to cart:', product);
    };
  
    if (!product) {
        return <div>Product not found</div>;
    }
  
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
        <Navbar/>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
              <div style={{ width: '60%', border: '2px solid #ccc', borderRadius: '5px', padding: '90px 80px', display: 'flex', backgroundColor: '#ececec' }}>
                  <div >
                      <img src={product.image} alt={product.name} style={{ maxWidth: '90%', height: 'auto', maxHeight: '250px', minHeight: '400px', minWidth: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className='ml-20'>
                      <h2 style={{ marginBottom: '20px', color: '#333', fontFamily: 'Poppins', fontSize: '35px' }}>{product.name}</h2>
                      <p style={{ marginBottom: '10px', color: '#666', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>Price: ${product.price}</p>
                      <p style={{ marginBottom: '20px', color: '#666', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>Quality: {product.quality}</p>
                      <p style={{ marginBottom: '5px', color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>Description: </p>
                      <p style={{ marginBottom: '90px', color: '#666', fontFamily: 'Arial, sans-serif', fontSize: '20px',width:'500px' }}>{product.description}</p>
                      <button style={{ display: 'flex',alignItems: 'center',padding: '18px 90px', backgroundColor: '#0000FF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' }} onClick={() => addToCart(product)}>
                      <FaCartArrowDown style={{ marginRight: '20px' }} />
                      Add to Cart 
                     </button>
                  </div>
              </div>
          </div>
          <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '30px', textAlign: 'center', textDecoration: 'underline', fontWeight: 'bold' }}>Similar product from different stores</h1>

          </div>
      );
      
}
