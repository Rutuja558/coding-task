import React, { useContext, useEffect, useState } from 'react'
import { categoryContext } from '../App'

export default function Products() {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const { category, setCategory } = useContext(categoryContext)
    const getAllProducts = () => {
        fetch("https://fakestoreapi.com/products").then(response => response.json()).then(data => setAllProducts(data))
    }
    const handleFilteredProducts = () => {
        if (category) {
            fetch(`https://fakestoreapi.com/products/category/${category}`).then(response => response.json()).then(data => setFilteredProducts(data))
        }
    }
    console.log(filteredProducts);
    useEffect(() => {
        getAllProducts()
        handleFilteredProducts()
    }, [category])

    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-12 text-center">
                    <h1>Products</h1>
                </div>
            </div>
            <div className="row">
                {filteredProducts.length === 0 ?
                    allProducts.map((product, index) => <div className="col-sm-4" key={`product-${index}`}>
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={product.image} alt="" width={60} />
                                <h4>Rs. {product.price}</h4>
                                <p>{product.category}</p>
                                <button className='btn btn-dark rounded-0 my-2'>Shop Now!</button>
                            </div>
                        </div>
                    </div>)
                    : filteredProducts.map((product, index) => <div className="col-sm-4" key={`product-${index}`}>
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={product.image} alt="" width={50} />
                                <h3>Rs. {product.price}</h3>
                                <button className='btn btn-dark rounded-0 my-2'>Shop Now!</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}
