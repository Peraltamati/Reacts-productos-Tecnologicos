import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import ItemList from './ItemList'

const ItemDetailContainer = () => {

  const [productoDetalle, setProductoDetalle] = useState([])

  useEffect(() => {

    function detallePromise() {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          let producto = [
            { titulo: "Notebook ACER GAMER",precio: "120.000",img: "https://i.ibb.co/qYDHH4w/acer.jpg",descripcion: "Acer Predator Helios 300 Flagship 15.6 Full Hd Backlit. Teclado Gaming Laptop. Pc Intel Core I7-7700Hq Quad-Core. Nvidia Geforce Gtx 1060 32Gb Ram. 512Gb Pcie Nvme Ssd. Windows 10 Home (B07BQPTLHM)" }
          ]
          if(producto.length===0){
            reject("No hay productos")
          }else{
            resolve(producto)
          }
        },2000);
      })
    }

    detallePromise().then(producto=>setProductoDetalle(producto)).catch((error)=>{
      alert(""+error)
    })


  },[])

  return (
    <div>
          <ItemList detalle={productoDetalle}/>
    </div>
  )
}

export default ItemDetailContainer
