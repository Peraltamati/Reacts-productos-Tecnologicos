import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({id,titulo,precio,descripcion,img,stock}) => {
  const [cantidad, setCantidad]= useState(1)
  const handleAgregar=()=> {
    const ItemAlCarrito={
      id,
      titulo,
      precio,
      img,
     stock,
    cantidad
    }

    console.log(ItemAlCarrito)
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
                  <button className="btn btn-primary mx-auto"onClick={handleAgregar}>Agregar al carrito</button>
                    </div>
                      </div>
                        </div>
                          </div>
  )
}

export default ItemDetail
