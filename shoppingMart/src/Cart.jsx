import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, minusProductQuantity, removeFromCart } from './ProductsSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    // window.scrollTo({ top: 0, behavior: 'smooth' })
    const navigate = useNavigate();
    const cartProducts = useSelector((state) => state.product.cart);
    const totalAmount = useSelector((state) => state.product.totalAmount)
    const cartCount = useSelector((state)=>state.product.cartCount)
    const dispatch = useDispatch();

    return (
        <>
            <h1 className='m-1 text-dark text-center'>cart items</h1>
            <div className='d-flex w-100 p-5 gap-2 justify-content-center fontMobile'>
                <div className='w700 d-flex flex-column gap-1'>
                    {
                        cartProducts.map((product, index) => <div onClick={() => navigate('/productInfo')} className='w-100 d-flex border justify-content-center align-items-center' key={index}>
                            <img className='w-25' src={product.imgUrl} alt="productImage" />
                            <p className='w-50 fontMobile'>{product.description.slice(0, 150)}</p>
                            <div className='d-flex align-items-center flex-column gap-2 w-25'>
                                <p>₹{product.price} each</p>
                                <div className='d-flex justify-content-center gap-2 w-100 fontMobile'>
                                    <button className='br-4px fontMobile' onClick={(event) => {dispatch(addToCart(product));event.stopPropagation();}}>+</button>
                                    <h6 className='fontMobile'>{product.cartQuantity}</h6>
                                    <button className='br-4px fontMobile' onClick={(event) =>{ dispatch(minusProductQuantity(product));event.stopPropagation();}}>-</button>
                                </div>
                                <h6 className='fontMobile'>{product.cartAmount}</h6>
                                <button onClick={(event) =>{ dispatch(removeFromCart(product));;event.stopPropagation();}} className='br-4px'>Remove</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className='w300 border h-25 p-2'>
                    <h6 className='fontMobile'>summary</h6>
                    <div className='d-flex justify-content-between'>
                        <h3 className='fontMobile'>total</h3>
                        <h3 className='fontMobile'>{totalAmount}</h3>
                    </div>
                    <p>total items {cartCount}</p>
                    <button className='w-100 bg-success text-white border rounded'>Buy now</button>
                </div>
            </div>

        </>
    )
}
