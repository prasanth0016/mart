import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

export default function Navigation() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
        </>
    )
}
