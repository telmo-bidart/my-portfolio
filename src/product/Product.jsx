import React from 'react'
import "./product.css"

const Product = ({img}) => {
    return (
        <div className='p'>
            <div className='p-browser'>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>    
            </div>
            <div>
                <img src={img} alt="" className="p-img" />
            </div>
        </div>
    )
}

export default Product
