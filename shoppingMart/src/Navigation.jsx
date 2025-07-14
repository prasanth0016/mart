import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import ProductInfo from './ProductInfo'
import FilterProducts from './FilterProducts'

export default function Navigation() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/productInfo/:id" element={<ProductInfo />}>
                    <Route path="all" element={<FilterProducts category="all"/>} />
                    <Route path="mobiles" element={<FilterProducts category="mobiles" />} />
                    <Route path="laptops" element={<FilterProducts category="laptops" />} />
                </Route>
            </Routes>
        </>
    )
}
