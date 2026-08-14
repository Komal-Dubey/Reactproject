import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cartItems: [],

    addToCart: (product) => {
        set((state) => {
            const updatedCart = [...state.cartItems, product];
            console.log({ updatedCart })
            return {
                cartItems: updatedCart
            }
        })
    },

    removeFromCart: (productId) => {
        set((state) => ({ // already added items in cart that is item.id, product id when ue remove from cart function and pass the product id
            cartItems: state.cartItems.filter(
                (item) => item.id != productId
            )
        }))
    },

    getAllCartItem: () => {
        return get().cartItems
    },
    clearCart: () => {
        set({ cartItems: [] })
    }
}))

export default useCartStore;