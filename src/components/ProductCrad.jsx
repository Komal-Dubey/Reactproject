import { ShoppingCart, Star, Trash } from "lucide-react";
import useCartStore from "../store/cartStore";

const ProductCard = ({ p }) => {
    const addToCart = useCartStore((state) => state.addToCart )
     const getAllItems = useCartStore((state) => state.cartItems)  // first get all cartitems.
     const removeFromCart = useCartStore((state) => state.removeFromCart)

     const isExists = getAllItems.some((item) => item.id === p.id);

     2 == "2"  // console true // this only check values
     2 === "2" // console false // it check datatype too string or number.


 // ek time pe 1 hi aaya he pure card pe loop he na ki product card ke andar. 
 // this component define only on card



    // your task 
    // 1. get all cart items like on cart page 
    // 2. then using some method to get that item that is already added 

// there are 2 methogns in js filter that remove item form array, and some that give true or false if it exists in array or not.
// using some we can filter that item and check it exists in cartitems if exists then we using if else we can show add to cart or remove to cart button.
// already did in /cart page to get all items do first.

    return (
        <div className="border-2 border-gray-600 rounded-2xl ">
            <div className="h-48 w-full">
                <img className="h-48 w-full object-contain" src={p.thumbnail} alt={p.title} />
            </div>
            <div className="p-3">
                <p className="font-semibold text-xl">{p.title}</p>
                <p className="line-clamp-2 text-sm">{p.description}</p>
                <div className="flex justify-between mt-4 mb-2">
                    <p className="font-bold text-xl ">{p.price}</p>
                    <p className="font-bold text-xl flex justify-center ">
                        {[...Array(Math.round(p.rating))].map((_, i) => <Star className=" text-yellow-400" fill="yellow" size="20" />)}
                    </p>
                </div>
                <div >
                    <button 
                        className={`${ isExists ? "bg-red-600" : "bg-sky-600"} text-white px-3 py-1 rounded-lg cursor-pointer`} 
                        type="button"
                        onClick={() => {
                            if(isExists) {
                                removeFromCart(p.id) // p.id is product id;
                            } else {
                                addToCart(p)
                            }
                        }}
                    >
                        {isExists ? (
                            <div className="flex items-center gap-1">
                                <Trash /> 
                                <span>Remove</span>
                            </div>
                        ): (
                            <div className="flex items-center gap-1">
                                <ShoppingCart />
                                <span>Add</span>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;