import React from 'react'
import Item from './Item'

const ItemList = ({detalle}) => {
  return (
    <div className='ctn' >
       {detalle.map(item => <Item key={item.titulo} titulo={item.titulo} descripcion={item.descripcion} img={item.img} precio={item.precio}/>)}
       
    </div>
  )
}

export default ItemList
