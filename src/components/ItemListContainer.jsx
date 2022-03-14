import React from 'react'

const ItemListContainer = (props) => {

    let {texto,subtitulo}=props

  return (
      
  <div className='props'>
      <section className='section'> 
      <h1> {texto} </h1>
      <h5> {subtitulo}</h5>
      </section> 
  </div>
  ) 
}

export default ItemListContainer

