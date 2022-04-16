import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id,titulo,descripcion,img,precio}) => {
  return (
    <div className='ctn2'> 
     <div className="card"  style={{ width: '18rem' }}>
     <div className="card-header"><h5 className='my-0 fw-bolder'>{titulo}</h5></div>
      <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
            <p className="card-text">{descripcion}</p>
            <h6 className="precio">$ {precio}</h6>
            <Link to={`/detail/${id}`} className="btn btn-primary mx-auto">Mas detalles</Link>
              </div>
                </div>
                </div>
  )     
}
export default Item


//CONTADOR!!
/*import ItemCount from './ItemCount'

const Item = () => {
  return (
    <div>
      <ItemCount stock={10} initial={1} />
    </div>
  )
}

export default Item*/