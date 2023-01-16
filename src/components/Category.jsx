import React, { useContext, useEffect, useState } from 'react'
import { categoryContext } from '../App'

export default function () {
    const [categories, setCategories] = useState([])
    const { category, setCategory } = useContext(categoryContext)
    const getAllCategories = () => {
        fetch("https://fakestoreapi.com/products/categories").then(response => response.json()).then(data => setCategories(data))
    }
    useEffect(() => {
        getAllCategories()
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-sm-12 text-center"><h1>Categories</h1></div>
            </div>
            <div className="row">
                {categories.map((category, index) => <div className="col-sm-3" key={`category-${index}`}>
                    <div className="card">
                        <div className="card-body" onClick={() => setCategory(category)}>
                            {category}
                        </div>
                    </div>
                </div>)}

            </div>
        </>
    )
}
