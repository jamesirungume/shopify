import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';


export default function Login() {
  return (
    <div> 
      <Link to="/" className="text-3xl font-bold underline">
        Home
        <div>
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <p>Product 1</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <p>Product 1</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <p>Product 1</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Product 2" />
              <p>Product 2</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <p>Product 3</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <p>Product 3</p>
            </div>
      </Link>
    </div>
  )
}
