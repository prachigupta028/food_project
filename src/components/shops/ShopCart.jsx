
import React, { useState } from "react"

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
        
                  <button onClick={() => addToCart(shopItems)}>
                  +
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
