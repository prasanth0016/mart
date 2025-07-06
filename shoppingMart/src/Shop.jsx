import React, { useEffect, useState } from 'react'
import {products } from './data/products'

import { addToCart } from './ProductsSlice';
import { useDispatch } from 'react-redux';


export default function Shop() {
  const dispatch=useDispatch();
  console.log("from shop component dispatch method-->",useDispatch);
    return (

        <>
            <h1 className='bg-primary text-center text-white mt-5'>shop</h1>

            <div className='w-100 d-flex flex-wrap gap-1 justify-content-center mt-5'>
                {products.map((product, index) => <div className='d-flex justify-content-center align-items-center flex-column w250 border shadow' key={index}>
                    <img className='w-100 h-50' src={product.imgUrl} alt="" />
                    <h6>{product.productName}</h6>
                    <h6>₹ {product.price}</h6>
                    <p>{product.shortDesc.slice(0, 25)}...</p>
                    <h6>*{product.avgRating}</h6>
                    <button onClick={()=>dispatch(addToCart(product))} className='bg-primary text-white border-primary border-radius'>Add to Cart</button>
                </div>)}
            </div>
        </>
    )
}
