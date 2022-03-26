import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const{itemId}=useParams()

  const [productoDetalle, setProductoDetalle] = useState({})
 

  useEffect(() => {

    function detallePromise() {
      return new Promise((resolve, reject) => {

        setTimeout(() => {                                                                                         
          let producto =
          [{id:1,titulo: "MONITOR",img:"https://i.ibb.co/nPwDBPB/kisspng-benq-27-hd-computer-monitor-computer-monitors-liq-smartfocus-5b1f953f1646a2-9391566415287964.png", categoryId:"monitor",precio: "31.000", stock:10,
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },

          {id:2,titulo: "NOTEBOOK",img:"https://i.ibb.co/qYDHH4w/acer.jpg", categoryId:"notebook",precio: "120.000",stock:15,
           descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" },

          {id:3,titulo: "CPU GAMER",img:"https://i.ibb.co/zVbgjfg/kisspng-pc-gamer-amd-fx-8300-hydra-geforce-gtx-1060-5b6349e98d1c94-675070951533233641578.png",categoryId:"gamer",precio: "250.000",stock:20,
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae" }]
        
          if(producto.length===0){
            reject("No hay productos")
          }else{
            resolve(producto)
           
          }
        },2000);
      })
    }

    detallePromise().then((producto) =>{
      setProductoDetalle(producto.find((e)=>e.id==itemId))
    }).catch((error)=>{

      alert(""+error)
  
    })
    

  },[])
  
  return (
    <div>
         
         <ItemDetail {...productoDetalle}/>
          
          
    </div>
  )
}

export default ItemDetailContainer
