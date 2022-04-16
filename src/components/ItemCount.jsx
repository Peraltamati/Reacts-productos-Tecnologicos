import React from 'react'



const ItemCount = ({stock,cantidad,setCantidad}) => {

 
const sumar = () => {
   if(cantidad < stock){
    setCantidad(cantidad + 1) 
   }
    
}

const restar = () => {
    if(cantidad >1){
        setCantidad(cantidad - 1)
    }
    
}



  return (
   
       
        <div >  
            <div className='text-center lead ' >
           
              <span>Unidades disponibles: {stock}</span>
           
                </div >
      
    <div className='botones mx-auto' > 
      <button className='btn btn-outline-primary' disabled={stock===0} onClick={restar}>-</button> 
        <span className='mx-3'>{cantidad} </span> 
          <button className='btn btn-outline-primary' disabled={stock===0} onClick={sumar}>+</button>
      
      
      
            </div>
   
              </div>



  
    
  )
}

export default ItemCount
