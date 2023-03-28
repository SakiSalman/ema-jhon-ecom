import React from 'react'
import './Product.css'

const Product = (props) => {
  const {name, img, price, seller, ratings} = props.product
  const {addToCart, product}=props


  return (
    <>
    
        <div className="product-wrapper">
            <div className="image-wrap">
            <img src={img} alt="" />
            </div>

            <div className="product-content-area">
                <h5>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
                
            </div>
            <div className="button-area">
                <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>

        </div>
    
    </>
  )
}

export default Product