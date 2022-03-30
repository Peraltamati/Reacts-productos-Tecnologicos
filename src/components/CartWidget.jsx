import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import carrito from './assets/carrito.png';




const CartWidget = () => {

  const{ cantidadCart}=useContext(CartContext)
  return (
    <div>
      <button className='btn position-relative'><img className='img' src={carrito}/> 
      <span className='badge position-absolute top-0 start-100 translate-middle rounded-pill bg-danger'>
        {cantidadCart()}
      </span>
      </button>
      
      
    </div>
    
  )
}

export default CartWidget


