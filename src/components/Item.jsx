import React from 'react'


const Item = ({titulo,descripcion}) => {
  return (
    <div className='container'> 
     <div className="card"  style={{ width: '18rem' }}>
      <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#" className="btn btn-primary mx-auto">Ver mas</a>
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