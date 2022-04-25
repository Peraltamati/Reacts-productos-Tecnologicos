import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ItemDetailContainer = () => {

  const{itemId}=useParams()

  const [productoDetalle, setProductoDetalle] = useState({})
 

  useEffect(() => {
     
    const getData = async()=>{

      const queryDoc = doc(db,'items',itemId)
        const responseDoc = await getDoc(queryDoc)
          const dataDoc = responseDoc.data()
            const newDocumento ={id: responseDoc.id, ...dataDoc}
              setProductoDetalle(newDocumento)
    }

    
      getData()
  },[])
  
  return (
    <div>
         
         <ItemDetail {...productoDetalle}/>
          
          
    </div>
  )
}

export default ItemDetailContainer
