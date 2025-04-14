import React from 'react'
import { cart, cartCount, products } from './data/products'
import Cart from './Cart'

export default function Shop() {
    function addToCart(product) {
        cart.push(product);
        cartCount = (cartCount + 1);
        console.log(cart);
        // <Cart product={product}/>
    }

    return (

        <>
            <h1 className='bg-primary text-center mt-5'>shop</h1>

            <div className='w-100 d-flex flex-wrap gap-1 justify-content-center mt-5'>
                {products.map((product, index) => <div className='d-flex justify-content-center align-items-center flex-column w250 border shadow' key={index}>
                    <img className='w-100 h-50' src={product.imgUrl} alt="" />
                    <h6>{product.productName}</h6>
                    <h6>${product.price}</h6>
                    <p>{product.shortDesc.slice(0, 25)}...</p>
                    <h6>*{product.avgRating}</h6>
                    <button onClick={() => addToCart(product)} className='bg-primary text-white border-primary border-radius'>Add to Cart</button>
                </div>)}
            </div>
        </>
    )
}
