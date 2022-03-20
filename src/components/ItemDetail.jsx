import React from 'react'

const ItemDetail = ({titulo,precio,descripcion,img}) => {
  return (
    <div>
       <div className='container'> 
     <div className="card"  style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <h6 className="card-title">$ {precio}</h6>
            <a href="#" className="btn btn-primary mx-auto">Ver mas</a>
              </div>
                </div>
                </div>
    </div>
  )
}

export default ItemDetail
