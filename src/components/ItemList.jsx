import React from 'react'
import Item from './Item'

const ItemList = ({lista}) => {
  return (
    <div className='ctn' >
       {lista.map((item)=><Item key={item.titulo} titulo={item.titulo} descripcion={item.descripcion}/>)}
       
    </div>
  )
}

export default ItemList
