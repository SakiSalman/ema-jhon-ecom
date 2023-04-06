import React, { useState } from 'react'
import ShoppingCart from '../Shop/ShoppingCart'
import { Link, useLoaderData } from 'react-router-dom'
import Card from '../Cards/Card'
import { deleteShoppingCart, removeFromDb } from '../../assets/utilities/fakedb'

const Orders = () => {

  const products = useLoaderData()
  const [cart, setCart] = useState(products)

  const handleRemoveCart = (id) => {
    
    const remaining = cart.filter(data => data.id != id)
    setCart(remaining)
    removeFromDb(id)
  }
  const handleDeleteCart = () => {
    setCart([])
    deleteShoppingCart()
  }
  return (
    <>
        
        <div className="shop-wrapper">
          
            <div className="product-area cart-card-area">
            <h3>Cart</h3>

              {
               cart.length > 0 ? cart.map((data, index) => {
                  return <Card key={data.id} data={data} handler={handleRemoveCart}></Card>
                }) : <p>Cart has not Item</p>
              }
              
                
            </div>
            <div className="sidebar-area">
            <div className="sidbar-item-wrapper">
                <ShoppingCart cart={cart} ></ShoppingCart>
                <button className='clearcart'onClick={handleDeleteCart}>Clear Cart</button>
                <Link to={'/order'} className='review-order'>CheckOut</Link>
                </div>
                
            </div>
        </div>
    
    </>
  )
}

export default Orders