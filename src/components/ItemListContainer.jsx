import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'



const ItemListContainer = () => {

  const [arrayproductos, setArrayProductos] = useState([])
  
  useEffect(()=>{ 
function productoPromise(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let productos=[
          {titulo: "MONITOR",img:"https://i.ibb.co/qYDHH4w/acer.jpg", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },
          {titulo: "NOTEBOOK",img:"https://i.ibb.co/qYDHH4w/acer.jpg", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },
          {titulo: "CPU GAMER",img:"https://i.ibb.co/qYDHH4w/acer.jpg", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" } 
        ]
        if(productos.length===0){
          reject("No hay productos")
        }else{
          resolve(productos)
        }
    },3000)
  })
}
productoPromise().then(productos=>setArrayProductos(productos)).catch((error)=>{
  alert(""+error)
})
   },[])

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