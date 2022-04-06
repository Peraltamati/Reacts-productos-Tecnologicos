import { collection, doc, getDoc, getDocs, query, where} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../utils/firebase'
import ItemList from './ItemList'



const ItemListContainer = () => {
  
      const{category}=useParams()

  const [arrayproductos, setArrayProductos] = useState([])
  
  useEffect(()=>{ 
//function productoPromise(){


 const productosREf = collection(db, 'items')
 const q = category ? query(productosREf, where("categoryId", "==", category)) : productosREf

 getDocs(q)
 .then((resp)=>{
   setArrayProductos(resp.docs.map((doc)=>{

    return{

      id: doc.id,
      ...doc.data()
    }
   }))
 })
  


  //return new Promise((resolve,reject)=>{
   // setTimeout(()=>{
        //let productos=[

        //  {id:1,titulo: "MONITOR",img:"https://i.ibb.co/nPwDBPB/kisspng-benq-27-hd-computer-monitor-computer-monitors-liq-smartfocus-5b1f953f1646a2-9391566415287964.png", categoryId:"monitor",precio: 31000,stock:10,
         // descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },

          //{id: 2,titulo: "NOTEBOOK",img:"https://i.ibb.co/qYDHH4w/acer.jpg", categoryId:"notebook",precio: 120000,stock:12,
          // descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },

         // {id:3,titulo: "CPU GAMER",img:"https://i.ibb.co/zVbgjfg/kisspng-pc-gamer-amd-fx-8300-hydra-geforce-gtx-1060-5b6349e98d1c94-675070951533233641578.png",categoryId:"gamer",precio: 250000,stock:20,
         // descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" } 
       // ]
       // if(productos.length===0){
         // reject("No hay productos")
       // }else{
          //resolve(productos)
       // }
   // },3000)
 // })
//}

//if(!category){
 // productoPromise().then(product=>setArrayProductos(product)).catch((error)=>{
    //alert(""+error)
    
  //})
//}else{
 // productoPromise().then((product)=>{
    //setArrayProductos(product.filter((productosRef)=>productosRef.categoryId===category))
  //})
//}

 },[category])

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

