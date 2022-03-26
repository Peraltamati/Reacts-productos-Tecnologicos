import React from 'react';
import carrito from './assets/carrito.png';




const CartWidget = () => {
  return (
    <div>
      <button className='btn position-relative'><img className='img' src={carrito}/> 
      <span className='badge position-absolute top-0 start-100 translate-middle rounded-pill bg-danger'>
        0
      </span>
      </button>
      
      
    </div>
    
  )
}

export default CartWidget


