import React from "react"
import FlashDeals from "../components/flashDeals/FlashDeals"

import Shop from "../components/shops/Shop"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>

      <Shop shopItems={shopItems} addToCart={addToCart} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      
    </>
  )
}

export default Pages
