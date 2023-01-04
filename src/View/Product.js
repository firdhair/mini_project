import React, { useState, useEffect }  from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams()
    const url = `https://63b4ec199f50390584bcba4a.mockapi.io/api/v1/Products/${id}`
    const [product, setProduct] = useState(null)
    let content = null
    // axios.get(url)
    //     .then(response => {
    //         console.log("response", response.data)
    //         setProduct(response.data)
    //     })

    useEffect(() => {
    axios.get(url)
        .then(response => {
            console.log("response", response.data)
            setProduct(response.data)
        })
    }, [url])

    if(product){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
            <div>
                <img src={product.images} alt={product.name}/>
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.price}
            </div>
            <div>
                {product.description}
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