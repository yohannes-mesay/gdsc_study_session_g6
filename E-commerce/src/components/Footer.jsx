import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav className='footer-nav'>
        <div className="nav-nav-pills">
          <Link to="/" className="brand">
            Home
          </Link>

          <Link to="about" className="brand">
            About
          </Link>
          <Link to="products" className="brand">
            Products
          </Link>
          <Link to="posts" className="brand">
            Posts
          </Link>
          
        </div>
        </nav>
      </div>

    </footer>

  )
}

export default Footer
