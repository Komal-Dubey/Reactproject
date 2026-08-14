import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCrad";
import EcommerceHeader from "../../components/EcommerceHeader";
import useCartStore from "../../store/cartStore";

const EcommercePage = () => {
    const [products, setProducts] = useState([]);
     const GetallItems = useCartStore((state) => state.getAllCartItem)

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products`);
            const data = response.data.products
            setProducts(data);
            console.log(data);
        }
        catch (error) {
            console.log("Error while fetching", error);
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>

           <div className=" grid grid-cols-4 gap-3 p-3">
           {
             products.map((p, i)=>(
                <ProductCard p={p} key={p.id} />       
             ))
           }
           </div>
         
        </div>
    )
 } 
export default EcommercePage;