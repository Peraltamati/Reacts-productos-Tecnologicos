import React from 'react'
import Item from './Item'

const ItemList = ({lista}) => {
  return (
    <div>
       {lista.map((item)=><Item key={item.titulo} descripcion={item.descripcion} titulo={item.titulo}/>)}
       
    </div>
  )
}

export default ItemList
