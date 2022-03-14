import React, { useState } from 'react'
import mas from './assets/mas.png'
import menos from './assets/menos.png'

const ItemCount = ({stock,initial}) => {

const [contador, setContador]= useState(initial)

 
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
   
        <div className='contador'>
        <div >  
      <div >
           <h3>CONTADOR</h3>
           <h5>Cantidad de stock: {stock}</h5>
           
      </div >
      
    <div className='botones' > 
      <button className='btn' onClick={restar} ><img className='icon'  src={menos}/></button> 
      <h5 className='ajuste'>{contador} </h5> 
      <button className='btn' onClick={sumar}><img className='icon'  src={mas}/></button>
   
  </div>
  </div>
</div>
  
    
  )
}

export default ItemCount
