import React, {useEffect, useState} from "react";
import axios from 'axios'
import Loader from "../Components/Loader"
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HttpRequests";

function Home() {
    const url = `https://63b4ec199f50390584bcba4a.mockapi.io/api/v1/Products?page=1&limit=10`
   
    let products = useAxiosGet(url)

    let content = null

    if(products.error) {
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(products.loading && products.error === false) {
        content = <Loader/>
    }

    if(products.data){
        content = 
        products.data.map((product, key) => (
            <div key={product.id}>
                {/* {product.name} */}
                <ProductCard product={product}/>
            </div>
        ))
        // <div>
            
        //     <h1 className="text-2xl font-bold mb-3">{products.data.name}</h1>
        //     <div>
        //         <img src={products.data.images} alt={products.data.name}/>
        //     </div>
        //     <div className="font-bold text-xl mb-3">
        //         ${products.data.price}
        //     </div>
        //     <div>
        //         {products.data.description}
        //     </div>
        // </div>
    }

    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home