import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { Link } from 'react-router'

export default function Header() {
  return (
    <>
      <header>
        <div className='d-flex justify-content-evenly align-items-center p-3'>
          <div>
            <Link to='/' className='text-decoration-none text-dark fs-5'><i className="fa-solid fa-shop"></i> s-Mart</Link>
          </div>
          <div className='d-flex gap-1'>
            <NavLink to='/home' className={(e) => e?.isActive ? "activelink text-decoration-none" : "text-dark text-decoration-none"}>Home</NavLink>
            <NavLink to='/shop' className={(e) => e?.isActive ? "activelink text-decoration-none" : "text-dark text-decoration-none"}>Shop</NavLink>
            <NavLink className={(e) => e?.isActive ? "activelink text-decoration-none" : "text-dark text-decoration-none"}>Cart <i className="fa-solid fa-cart-flatbed-suitcase"></i><sup className='fs-5 cartnum'>0</sup></NavLink>
          </div>
        </div>
      </header>
    </>
  )
}
