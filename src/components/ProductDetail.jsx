import {allProductsData} from './FakeData';
import { useParams } from 'react-router-dom';


export default function  ProductDetail() {
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
      <div>
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px',minHeight: '210px',minWidth: '280px', objectFit: 'cover' }} />
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        {/* Add to Cart button */}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
  