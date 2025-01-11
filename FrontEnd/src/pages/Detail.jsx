import style from "./style.module.css"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

function Detail() {
    let [product, setProduct] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()

    async function GetProduct() {
        if (!id) {
            console.error("Product ID is missing!");
            return;
        }
    
        try {
            let result = await axios.get(`http://localhost:3000/products/${id}`);
          
            if (result.data && result.data.data) {
                setProduct(result.data.data); 
            } else {
                console.error("Product data not found in response");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }
    

    useEffect(() => {
      
        GetProduct();
    }, [id]);

    return (
        <>
            <div className={style.info}>
                <div className={style.text}>
                    <p><strong>Brand Name:</strong> {product.brandName}</p>
                    <p><strong>Model Name:</strong> {product.modelName}</p>
                    <p><strong>Year:</strong> {product.year}</p>
                    <p><strong>New:</strong> {product.New ?"Yes":"No"}</p>

                    <button onClick={() => navigate("/")}>Go Back</button>
                </div>
            </div>
        </>
    )
}

export default Detail;
