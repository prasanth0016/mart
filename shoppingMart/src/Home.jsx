import React, { useEffect, useState } from 'react'
import { SliderData } from './data/products'

export default function Home() {
    const [i, setI] = useState(0)
    useEffect(() => {
        const slide = setInterval(() => {
            setI((prevI) => (prevI + 1) % SliderData.length)
        }, 2000)
        return () => clearInterval(slide);
    }, [])
    return (
        <>
            <div className='w-100 border mt-5 slidemaindiv d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center w-75 h-100 border'>
                    <div className=''>
                        <h5 className='fontForMobile'>{SliderData[i].title}</h5>
                        <p className='fontForMobile'>{SliderData[i].desc}</p>
                    </div>
                    <img className='h-100 border w-75' src={SliderData[i].cover} alt={SliderData[i].title} />
                </div>
            </div>
        </>
    )
}
