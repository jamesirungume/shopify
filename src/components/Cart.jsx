import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';


export default function Cart() {
  return (
    <div> 
      <Link to="/" className="text-3xl font-bold underline">
        Home
      </Link>
    </div>
  )
}
