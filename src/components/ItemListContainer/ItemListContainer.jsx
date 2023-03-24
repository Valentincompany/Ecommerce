import React from 'react'
import "./Item.css"

 export const ItemListContainer = (props) => {
  return (
            <div className='item'>
                <h1>{props.titulo}</h1>
            </div>
  )
}
