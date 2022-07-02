import React from 'react'
import pantry from '../../images/food-pantry.jpg'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    

    
  return (
    <nav className='navbar'>
        <Link to='/'>
        <img className='navbar-icon' src={pantry}/>
        </Link>
        <h1 className='navbar-logo'>
            MyPantry
        </h1>
        <ul className='navbar-menu'>
            <li className='navbar-item'>
              <Link to='/Recipes'>
              Recipes
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/Ingredients'>
              Ingredients
              </Link>
            </li>
          </ul>
          <Link to='/sign-up'>
          <button className='button' type='button'>Sign In</button>
          </Link>
    </nav>
  )
}

export default Navbar