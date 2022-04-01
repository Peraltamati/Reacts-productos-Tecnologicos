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
      console.log(addItem)
    }

  }

  
  return (
<div>
  
  <div className='container'> 
     <div className="card"  style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
              <h6 className='precio'>$ {precio}</h6>
                <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} />
                  <button className="btn btn-primary mx-auto"disabled={stock===0} onClick={handleAgregar}>Agregar al carrito</button>
                    <Link to="/Cart" >
                      <button className='btn btn-primary mx-auto mt-3'> Terminar mi compra</button>
                    </Link>
                    </div>
                      </div>
                        </div>
                          </div>
  )
}

export default ItemDetail
