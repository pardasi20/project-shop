import React from 'react'

export default function Calculate(props) {
    const shoppingCart=props.shoppingCart
    const setShoppingCart=props.setShoppingCart
    const cartTotal = shoppingCart.reduce((prev, item) => prev + item.price * item.count,0);
  return (
  
     <>
        <p className=' bg-green-500 text-white p-2 m-2'>ToyallPrice :$ {cartTotal}   </p>
        
    </>

   
  )
}
