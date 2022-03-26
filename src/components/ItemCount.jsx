import React, { useState } from 'react'
import mas from './assets/mas.png'
import menos from './assets/menos.png'

const ItemCount = ({stock}) => {

const [contador, setContador]= useState(1)

 
const sumar = () => {
   if(contador < stock){
    setContador(contador + 1) 
   }
    
}

const restar = () => {
    if(contador >1){
        setContador(contador - 1)
    }
    
}



  return (
   
       
        <div >  
      <div className='text-center lead ' >
           
           <span>Unidades disponibles: {stock}</span>
           
      </div >
      
    <div className='botones mx-auto' > 
      <button className='btn btn-outline-primary' onClick={restar}>-</button> 
      <span className='mx-3'>{contador} </span> 
      <button className='btn btn-outline-primary' onClick={sumar}>+</button>
   
  </div>
  
  </div>
 

  
    
  )
}

export default ItemCount
