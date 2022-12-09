import React from 'react'
import logo from '../../assets/carrito-de-compras.png'
import './CarWidget.css'

export const CarWidget = () => {
  return (
    <div className='menu_navbar__logo'>
    <img className='menu-navbar__img' src={logo} alt="cart widget"/>
     </div>
  )
}
