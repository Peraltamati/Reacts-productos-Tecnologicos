import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'

const ItemDetail = ({id,titulo,precio,descripcion,img,stock}) => {

  const [cantidad, setCantidad]= useState(1)
 
  const {agregarCarrito, isInCart}=useContext(CartContext)

  const handleAgregar=()=> {

    if(cantidad===0) return

    if(!isInCart(id)){

      const addItem ={
        id,
        titulo,
        precio,
        img,
       stock,
       cantidad
      }

      agregarCarrito(addItem)
    
    }

  }

  
  return (
<div>
  
  <div className='ctn1'> 
     <div className="card"  style={{ width: '18rem' }}>
     <div className="card-header"><h5 className='my-0 fw-bold'>{titulo}</h5></div>
      <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
            <p className="card-text">{descripcion}</p>
              <h6 className='precio'>$ {precio}</h6>
                <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} />
                  <button className="btn btn-primary mx-auto"disabled={stock===0} onClick={handleAgregar}>Agregar al carrito</button>
                  { 
                    isInCart(id)>0 &&
                    <Link to="/Cart" className='btn btn-success mx-auto mt-3'>
                                Ver carrito 
                    </Link>
                    }
                      <Link to="/" className='btn btn-secondary mx-auto mt-3'>Regresar al listado</Link>
                    </div>
                      </div>
                        </div>
                          </div>
  )
}

export default ItemDetail
