import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {

    const {cart, totalCart, vaciarCart, eliminarItem}= useContext(CartContext)

    if(cart.length===0){

        return <div className='container my-4'>
                    <h2>Tu carrito esta vacio</h2>
                        <Link to="/" className='btn btn-primary mx-5 mt-5'>Volver</Link>
                         </div>
        
    }
  return (
    <div className='container my-4'>
      <h2>Tu compra</h2>
      <hr/>
      {
          cart.map((item)=> (
              <div key={item.id}>
                 <h4 className='mt-3'>{item.titulo}</h4>
                 <img className="imgcart" src={item.img} alt="Card image cap"/>
                     <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                          <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>Eliminar item</button> 
              </div>
          ))
      }
        <hr/>
      <h2>Total: ${totalCart()}</h2>

      <div className="my-2">
        <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success mx-2 mt-3">Terminar mi compra</Link>
                </div>
    </div>
  )
}

export default Cart
