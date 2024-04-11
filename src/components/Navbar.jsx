import React from 'react'


const Navbar = () => {
  return (
    <>
    <nav>
        <ul className="flex justify-between p-4">
            <li><img src="https://images.thedermaco.com/402x100.jpg" alt="logo" className='h-10'/></li>
            <li>Shop by concern</li>
            <li>Shop by ingredients</li>
            <li>All Products</li>
            <li><input placeholder="serch"/></li>
            <li><button>Login</button></li>
        </ul>
    </nav> 
    </>
  )
}

export default Navbar
