import React, { useState, useEffect }  from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader"
import useAxiosGet from "../Hooks/HttpRequests";

function Product() {
    const { id } = useParams()
    const url = `https://63b4ec199f50390584bcba4a.mockapi.io/api/v1/Products/${id}`
    let product = useAxiosGet(url)
    let content = null
   

    if(product.error) {
        content = <p>There was an error, please refresh or try again later.</p>
    }

    if(product.loading && product.error === false) {
        content = <Loader/>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
            <div>
                <img className="h-74 w-full bg-blue bg-cover" src={product.data.images} alt={product.data.name}/>
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product