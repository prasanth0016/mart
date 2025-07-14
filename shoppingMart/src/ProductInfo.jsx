import React from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { products } from './data/products';

export default function ProductInfo() {
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log(pathname, "path...");
  const product = products.filter((product) => product.id == id)

  return (
    <>
      <div className='d-flex justify-content-center gap-2 m-2'>
        <NavLink to={"all"} className={(e) => e?.isActive ? "text-decoration-none bg-dark text-white rounded p-1" : "text-decoration-none border rounded text-dark p-1"}>All products</NavLink>
        <NavLink to={"mobiles"} className={(e) => e?.isActive ? "text-decoration-none bg-dark text-white rounded p-1" : "text-decoration-none border rounded text-dark p-1"}>mobiles</NavLink>
        <NavLink to={"laptops"} className={(e) => e?.isActive ? "text-decoration-none bg-dark text-white rounded p-1" : "text-decoration-none border rounded text-dark p-1"}>laptops</NavLink>
      </div>
      {pathname == `/productInfo/${id}` ?
        <div className='d-flex w-100 m-2 justify-content-center border'>
          {product.map((item) => {
            return (<> <div className='w-50'>
              <img className='w-75' src={item.imgUrl} alt="" />
            </div>
              <div className='w-50 text-center'>
                <p>{item.description}</p>
                <p>{item.productName}</p>
                <h6>price ₹ {item.price}</h6>
                <p>* {item.avgRating}</p>
              </div></>)
          }
          )}
        </div> : ""}
      <Outlet />
    </>
  )
}
