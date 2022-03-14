import React from 'react'
import ItemCount from './ItemCount'

const Item = () => {
  return (
    <div>
      <ItemCount stock={10} initial={1} />
    </div>
  )
}

export default Item
