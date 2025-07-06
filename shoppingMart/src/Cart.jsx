import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './ProductsSlice';

export default function Cart() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const cartProducts = useSelector((state) => state.product.cart);
    const dispatch = useDispatch();

    return (
        <>
            <h1 className='m-1 text-dark text-center'>cart items</h1>
            <div className='d-flex w-100 p-5 gap-2 justify-content-center'>
                <div className='w700 d-flex flex-column gap-1'>
                    {
                        cartProducts.map((product, index) => <div className='w-100 d-flex border justify-content-center align-items-center' key={index}>
                            <img className='w-25' src={product.imgUrl} alt="" />
                            <p className='w-50'>{product.description.slice(0, 150)}</p>
                            <div className='d-flex align-items-center flex-column gap-2 w-25'>
                                <div className='d-flex justify-content-center gap-2 w-100'>
                                    <button className='br-4px'>+</button>
                                    <h6>{product.cartQuantity}</h6>
                                    <button className='br-4px'>-</button>
                                </div>
                                <h6>{product.cartAmount}</h6>
                                <button onClick={() => dispatch(removeFromCart(product))} className='br-4px'>Remove</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className='w300 border h-25'>
                    <h6>summary</h6>
                    <div>
                        <h6>total</h6>
                    </div>

                </div>
            </div>

        </>
    )
}
