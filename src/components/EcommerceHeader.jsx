import { Italic, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import useCartStore from '../store/cartStore'



const EcommerceHeader = () => {
    // first get all cart items and find length of them and show on shoping cart liek 1 or 2 or n number of items 
    const getallitemsLength = useCartStore((state)=> state.cartItems).length;

  return (
    <div>
        <div className='w-full flex justify-between border-2 border-gray-200 mb-2 shadow px-5 py-2'>
            <h1 className=''> Store</h1>
            <div>
                <Link to={"/cart"} className='relative'>
                    <ShoppingCart size={32} />
                    <span className='w-4 h-4 rounded-full text-white bg-sky-600 text-xs absolute top-0 right-0 flex items-center justify-center'>{getallitemsLength}</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default EcommerceHeader