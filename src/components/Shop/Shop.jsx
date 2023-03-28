import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb'
import Product from '../Product/Product'
import './Shop.css'
import ShoppingCart from './ShoppingCart'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
      fetch('products.json')
      .then( res => res.json())
      .then(data => setProducts(data))
      
  }, [])

  useEffect(() => {
    const storedCart = getShoppingCart()
    const savedCart = []
    // Get Id for added Products
    for( const id in storedCart){
      // get Proddus from Products by id
      const addedProducts = products.find( products => products.id === id )

      if (addedProducts) {
          const quantity = storedCart[id]
          addedProducts.quantity = quantity
          savedCart.push(addedProducts)
      }
      setItems(savedCart)

    }
  }, [products])



  // handle selected Items

  const handleAddToCart = (products) => {
      let newCart = []

      const exist = items.find(pd => pd.id == products.id)

      if (!exist) {
        products.quantity = 1
        newCart = [...items, products]
      }else{
        exist.quantity = exist.quantity + 1
        const remaining = items.filter( data => data.id != products.id)

         newCart = [...remaining, exist]

      }
      setItems(newCart)
      addToDb(products.id)
  }

  return (
    <>

        <div className="shop-wrapper">
            <div className="product-area">

              {
                products && products.map( product => <Product
                  product={product}
                  key={product.id}
                  addToCart = {handleAddToCart}
                />)
              }
                
                
            </div>
            <div className="sidebar-area">
                <ShoppingCart cart={items}></ShoppingCart>
            </div>
        </div>
    
    </>
  )
}

export default Shop