import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = ({cart}) => {
  let totalPrice = 0
  let quantity = 0
  let shipping = 0
  let tex = 0

  
  for(const product of cart){
    // product.quantity = product.quantity || 1
    totalPrice += (product.price * product.quantity)
    shipping += product.shipping
      quantity += product.quantity
  }
  tex = Math.ceil(totalPrice * 7 /100)

  let grandTotal  = shipping + totalPrice + tex

  return (
    <>
        <div className="shopping-cart-area">
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tex}</p>
                <h3>Grand Total: ${grandTotal}</h3>
        </div>
    </>
  )
}

export default ShoppingCart