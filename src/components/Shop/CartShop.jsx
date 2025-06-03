import React from 'react'

export default function CartShop(props) { 
    const shoppingCart=props.shoppingCart
    const setShoppingCart=props.setShoppingCart
    const removeItemHandler=(shopId)=>{
       let filteredShopp= shoppingCart.filter((item)=>{
            return(item.id!==shopId)
        })
        setShoppingCart(filteredShopp)
    }
    const addItem=(Id)=>{
        console.log(Id)
       
      let newItem= shoppingCart.map(item=>item.id === Id ? { ...item, count: item.count + 1 } : item)
      setShoppingCart(newItem)
    }
    const deleteItem=(Id)=>{
        let newItem= shoppingCart.map(item=>{
            if(item.id===Id){
                if(item.count>1){
                   return  { ...item, count: item.count - 1 }
                }else {
                    return item
                }     

            }else{
                return item
            }
        })
        
        setShoppingCart(newItem)

    }
  return (
    <>
  
   {
    
 shoppingCart.map(shop=>(
    <div key={shop.id} className='flex justify-around pt-2'>
    <span className='w-[40%] pl-1'>
        <img src={shop.img} className='w-[50px] h-[50px]'/>
    </span>
    <span className='w-[20%] pl-1'>${shop.price}</span>
    <span className='w-[20%] pl-1'>
        <button className='border bg-red-500 text-white uppercase py-2 px-3 rounded' onClick={()=>removeItemHandler(shop.id)}>remove</button>
    </span>
    
    <div className='w-[10%] flex justify-center gap-1 '><span className='hover:cursor-pointer' onClick={()=>addItem(shop.id)}>➕</span>
    <span className='font-bold'>{shop.count}</span>
   <span className='hover:cursor-pointer' onClick={()=>deleteItem(shop.id)}>➖</span></div>
    
</div>
 ))
   }
 
    </>
  )
}
