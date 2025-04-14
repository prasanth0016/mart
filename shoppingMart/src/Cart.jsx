import React from 'react'
import { cart } from './data/products'

export default function Cart() {
    return (
        <>
            <h1 className='bg-primary m-5 text-white p-3 relative-top'>cart items</h1>
            <div className='d-flex w-100 p-5 gap-2 justify-content-center'>
                <div className='w700 border d-flex flex-column'>
                    {
                        cart.map((product, index) => <div className='w-100 d-flex border justify-content-center align-items-center' key={index}>
                            <img className='w-25' src={product.imgUrl} alt="" />
                            <p className='w-50'>{product.description}</p>
                            <button className='w-25'>remove</button>
                        </div>)
                    }
                </div>
                <div className='w300 border h-25'>
                    <h1>summary</h1>
                    <div>
                        <h1>total</h1>
                    </div>

                </div>
            </div>
        </>
    )
}
