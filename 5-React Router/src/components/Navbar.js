// Active Links

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  const auth = useAuth()

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to='/'>
         Home 
      </NavLink>
      <NavLink style={navLinkStyles} to='/about'> 
        About 
      </NavLink>
      <NavLink style={navLinkStyles} to='/products'> 
        Products 
      </NavLink>
      <NavLink style={navLinkStyles} to='/users'> 
        Users 
      </NavLink>
      <NavLink style={navLinkStyles} to='/profile' >
        Profile
      </NavLink>
      {
        !auth.user && (
          <NavLink style={navLinkStyles} to='/login'> 
            Login
          </NavLink>
        )
      }
    </nav>
  )
}
            

// DESTRUCTURE THE PROPERTY: { isActive } set by NavLink

// replace Link by NavLink
//✨ Coz, NavLink provide class='active' by default,
// This class can be used for styling

// import React from 'react'
// import { Link } from 'react-router-dom'

// export const Navbar = () => {
//   return (
//     <nav>
//       <Link to='/'> Home </Link>
//       <Link to='/about'> About </Link>
//     </nav>
//   )
// }

// Inspect F12

//  <nav>
//     <a class="" href="/"> Home </a>
//     <a class="active" href="/about" aria-current="page"> About </a>
//  </nav> 

// NOTE:
// We can use Either
// 1. class = "active" that is applied or
// 2. isActive : boolean flag injected into the style function.

                                                                                                                                                                                                                                                       
                                                                                                                                                 
                                                               