import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { cartCount } from './data/products'
// import { Link } from 'react-router'

export default function Header() {
  return (
    <>
      <header className='shadow sticky-top bg-white'>
        <div className='d-flex justify-content-between align-items-center pad'>
          <div>
            <Link to='/' className='text-decoration-none text-dark fontSize'><i className="fa-solid fa-shop"></i> s-Mart</Link>
          </div>
          <div className='d-flex gap-3 fw-bold fontForMobile'>
            <NavLink to='/home' className={(e) => e?.isActive ? "activelink text-decoration-none" : "text-dark text-decoration-none"}>Home</NavLink>
            <NavLink to='/shop' className={(e) => e?.isActive ? "activelink text-decoration-none" : "text-dark text-decoration-none"}>Shop</NavLink>
            <NavLink to='/cart' className={(e) => e?.isActive ? "activelink text-decoration-none" : "text-dark text-decoration-none"}>Cart<i className="fa-solid fa-cart-flatbed-suitcase"></i></NavLink><div className='cartnum'>{cartCount}</div>
          </div>
        </div>
      </header>
    </>
  )
}
