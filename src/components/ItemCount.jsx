import React, { useState } from 'react'
import mas from './assets/mas.png'
import menos from './assets/menos.png'

const ItemCount = ({stock,initial}) => {

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
      <div  >
           
           <h7 >Stock: {stock}</h7>
           
      </div >
      
    <div className='botones' > 
      <button className='ajuste-contador' onClick={restar} ><img className='icon'  src={menos}/></button> 
      <h5 className='ajuste-contador'>{contador} </h5> 
      <button className='ajuste-contador' onClick={sumar}><img className='icon'  src={mas}/></button>
   
  </div>
  
  </div>
 

  
    
  )
}

export default ItemCount
