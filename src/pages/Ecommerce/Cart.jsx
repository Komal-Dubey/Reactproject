import React from 'react'
import useCartStore from '../../store/cartStore'
import ProductCard from '../../components/ProductCrad'

const Cart = () => {
    // useCartStore is global state we can it in any component or any page bcoz its store globally and function are stored in global state or in store.
    // getAllItems this is to get the all cart items that are store in global state
    const getAllItems = useCartStore((state) => state.cartItems) 
    const clearCart = useCartStore((state) => state.clearCart);

    // clear cart button and implemetn clear cart

    // your task 
    // 1. map on getallitems and render <productcard p={p} /> inside div. 
    // already looged the getallitems check and do if we can do directly or not
    // on product card if already added then show remove button on click it should remove

    // on 70% width left items and right 25% pe clear cart or total and so on
  return (
    <div className='w-full flex'>
    <div className="w-[80%] grid grid-cols-4 gap-3 p-3 border-r-2 border-gray-300">
        {getAllItems.map((p)=>(
            <ProductCard p={p}/>
        ))}
    </div>
        <div className='w-[20%]'>
        <button onClick={() => clearCart()} className='bg-yellow-500'>Clear Cart</button>

        </div>
    </div>
  )
}

export default Cart