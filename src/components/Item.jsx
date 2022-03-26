import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id,titulo,descripcion,img,precio}) => {
  return (
    <div className='container'> 
     <div className="card"  style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
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