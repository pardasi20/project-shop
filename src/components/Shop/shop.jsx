import React, { useState , useEffect} from 'react'
import CartShop from './CartShop'
import Calculate from './Calculate'
export default function Shop() {
    const [products,setProducts]=useState([
        { id: 1, title: 'Album 1', price: 5, img: 'src/assets/Images/Album 1.png',count:0 },
        { id: 2, title: 'Album 2', price: 15, img: 'src/assets/Images/Album 2.png',count:0 },
        { id: 3, title: 'Album 3', price: 20, img: 'src/assets/Images/Album 3.png',count:0 },
        { id: 4, title: 'Album 4', price: 100, img: 'src/assets/Images/Album 4.png',count:0 },
        { id: 6, title: 'Shirt', price: 50, img: 'src/assets/Images/Shirt.png',count:0 },
        { id: 5, title: 'Coffee', price: 5, img: 'src/assets/Images/Cofee.png',count:0 },
        
    ])
    const [shoppingCart,setShoppingCart]=useState([])
 
       const addClickHandler=(newProduct)=>{
        console.log(newProduct)
        
        
        
        const existingProductIndex = shoppingCart.findIndex((item) => item.id === newProduct.id);
        console.log(existingProductIndex)
        if(existingProductIndex !==-1){
            const updatedShoppingCart = shoppingCart.map((item) =>
                item.id === newProduct.id ? { ...item, count: item.count + 1 } : item
              );
            setShoppingCart(updatedShoppingCart)
            
        }else{
            setShoppingCart([...shoppingCart,{...newProduct,count:1}])
        }
  
        
       }
       const removeCartHandler=()=>{
        setShoppingCart([])
       }
     
      
  return (
    <>
    <div className='container m-auto flex flex-wrap justify-evenly mt-20'>
    {
      products.map(product=>(
        <div key={product.id} className='w-[300px]  m-2'>
            <p className='p-1 text-center'>{product.title}</p>
            <img src={product.img}/>
            <div className='flex justify-between pt-4'>
                <span className='p-2'>${product.price}</span>
                <button className='bg-blue-300 p-2 text-white rounded ' onClick={()=>addClickHandler({...product})}>ADD TO CART</button>
            </div>
        </div>
      ))
    }
    </div>
    <section className='container m-auto p-10'>
        <h2 className='text-center'>CART</h2>
        <div className='flex justify-around pt-2'>
            <span className='border-b w-[40%] pl-1'>ITEM</span>
            <span className='border-b w-[20%] pl-1'>PRICE</span>
            <span className='border-b w-[20%] pl-1'>Doing</span>
            <span className='border-b w-[10%] pl-1'>counter</span>
        </div>
        <div>
            <CartShop shoppingCart={[...shoppingCart]} setShoppingCart={setShoppingCart}/>
          
        </div>
        <div className='flex justify-center items-center pt-8'>
      <button className='border bg-blue-300 text-white uppercase py-2 px-1 rounded font-bold' type="button" onClick={removeCartHandler} >
                        Empty Cart
                    </button>
                    
                   
      </div>
      
      
      <Calculate shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
      
 
    </section>
    
    </>
  )
}
