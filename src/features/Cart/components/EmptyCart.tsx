

import React from 'react'

export default function EmptyCart() {
  return (
    <section
  
  className="empty-cart-section section-b-space"
>
  <div  className="container">
    <div  className="empty-cart-image">
      <div >
        <img
          
          src="../assets/images/empty-cart.svg"
          alt="empty-cart"
          className="img-fluid img"
        />
        <h2 >It’s empty in your cart</h2>
        <h5 >
          To browse more restaurants, visit the main page.
        </h5>
        <a
          
          className="btn theme-outline restaurant-btn"
          href="/zomo/home/classNameic"
          >see restaurant near you</a
        >
      </div>
    </div>
  </div>
</section>

  )
}
