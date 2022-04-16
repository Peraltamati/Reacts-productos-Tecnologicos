import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {

    const {cart, totalCart, vaciarCart, eliminarItem}= useContext(CartContext)

    if(cart.length===0){

        return <div className="container" >
                    <img className="imgcart2" src="https://i.ibb.co/vYg4yfj/vacio.png" alt="Card image cap"/>
                        <Link to="/" className='btn btn-primary mx-5 mt-5'>Volver</Link>
                         </div>
        
    }
  return (
    <div className='my-4 '>
     
      <h2>Tu compra</h2>
      <hr/>
      
      {
        
          cart.map((item)=> (
            
              <div key={item.id} className="container">
                <div className='ctn'>
                   <h4 className=' mx-2'>{item.titulo}</h4>
                    <img className="imgcart " src={item.img} alt="Card image cap"/>
                      <p className='mx-2'>Cantidad: {item.cantidad}</p>
                        <p className='mx-2'>Precio: ${item.cantidad * item.precio}</p>
                        
              </div>
              <button className="btn btn-danger mt-4" onClick={() => eliminarItem(item.id)}>Eliminar producto</button> 
              <hr/>
              </div>
              
              
              
              
          ))
          
      }
      
       
      <h2 className='mt-4'>Total: ${totalCart()}</h2>

      <div className="my-3">
        <button className="btn btn-danger mt-4" onClick={vaciarCart}>Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success mx-2 mt-4">Terminar mi compra</Link>
                </div>
    
    </div>
  )
}

export default Cart
