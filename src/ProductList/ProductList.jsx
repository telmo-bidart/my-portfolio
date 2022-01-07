import React from 'react'
import "./productlist.css"
import Product from "../product/Product"
import {products} from "../product/data"

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-tittle">
                    Tech
                </h1>
                <p className="pl-desc">
                    Algumas das tecnologias que eu utilizo no meu dia a dia:
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) =>( <Product key={item.id} img={item.img}/>))}
            </div>
        </div>
    )
}

export default ProductList
