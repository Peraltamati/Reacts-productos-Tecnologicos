import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({id,titulo,precio,descripcion,img,stock}) => {
  
  return (
    <div>
      
       <div className='container'> 
     <div className="card"  style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <h6 className='precio'>$ {precio}</h6>
            <div className='stock'><ItemCount stock={stock}/></div>
            <a href="#" className="btn btn-primary mx-auto">Add to Card</a>
              </div>
                </div>
                </div>
    </div>
  )
}

export default ItemDetail
