import { collection, getDocs, query, where} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../utils/firebase'
import ItemList from './ItemList'



const ItemListContainer = () => {
  
      const{category}=useParams()

  const [arrayproductos, setArrayProductos] = useState([])
  
  useEffect(()=>{ 



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
  

 },[category])

  return (
    
   <div>
     <ItemList lista={arrayproductos}/>
   </div>   
    
   
  )
}

export default ItemListContainer



