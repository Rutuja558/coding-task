import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Category from './components/Category'
import Products from './components/Products'

export const categoryContext = createContext()
export default function App() {
  const [category, setCategory] = useState('')
  useEffect(() => {

  }, [category])

  //   https://fakestoreapi.com/products  

  // https://fakestoreapi.com/products/categories  category

  // https://fakestoreapi.com/products/category/jewelery
  return (
    <>
      <div className="container">
        <categoryContext.Provider value={{ category, setCategory }}>
          <Category />
          <Products />
        </categoryContext.Provider>
      </div>
    </>
  )
}
