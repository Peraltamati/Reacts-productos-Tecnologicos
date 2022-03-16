import React, { useState } from 'react'
import ItemList from './ItemList'



const ItemListContainer = () => {

  const [arrayproductos, setArrayProductos] = useState([
  {titulo: "MONITOR", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },
  {titulo: "NOTEBOOK", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },
  {titulo: "CPU GAMER", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" }
])
function productoPromise(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let productos=[{arrayproductos}]
        if(productos.length===0){
          reject("No hay productos")
        }else{
          resolve(productos)
        }
    },3000)
  })
}
productoPromise().then((productos)=>{
  console.log(productos)
}).catch((error)=>{
  console.log("No hay productos"+error)
})

  return (
    
   <div>
     <ItemList lista={arrayproductos}/>
   </div>   
    
   
  )
}

export default ItemListContainer

//CONTADOR!!
/*const ItemListContainer = (props) => {

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

export default ItemListContainer*/