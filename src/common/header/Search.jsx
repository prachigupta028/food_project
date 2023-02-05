import React from "react"
import { Link } from "react-router-dom"
// import "slick-carousel/slick/slick.css"
import {FaShoppingCart} from "react-icons/fa";

const Search = ({ CartItem }) => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo_width '>
            <Link to='/'><img src='https://hdn-1.fynd.com/company/2430/applications/621dcbf392f04efe36b3e5ca/application/pictures/free-logo/original/6dQfsx6Pu-Prachi-Gupta.png' alt='' /></Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
           
            <div className='cart'>
              <Link to='/cart'>
              <FaShoppingCart style={{marginRight:"25px",marginTop:"10px" ,transform:"scale(1.8)"}}/>
              
               
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
