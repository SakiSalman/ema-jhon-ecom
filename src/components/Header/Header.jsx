import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="order">Orders</Link></li>
                    <li><Link to="inventory">Manage Inventory</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul>
            </div>
            </div>
        </header>
    
    </>
  )
}

export default Header