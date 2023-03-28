import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <>

        <header>
            <div className="header-container">
            <div className="logo-wrap">
                <img src={logo} alt="" />
            </div>
            <div className="menu-wrap">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            </div>
        </header>
    
    </>
  )
}

export default Header