import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.leftNav}>
        <Link to="/" style={styles.logoButton}>
          🛒 Marketplace
        </Link>
        <Link to="/products" className="navButton">
          Products
        </Link>
      </div>
      <div style={styles.rightNav}>
        <Link to="/account" className="navButton">
          Account
        </Link>
        <Link to="/cart" className="navButton">
          🧺 Cart
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#333333',
    color: '#fff'
  },
  leftNav: {
    display: 'flex',
    alignItems: 'center',
  },
  rightNav: {
    display: 'flex',
    alignItems: 'center',
  },
  logoButton: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navButton: {
    textDecoration: 'none',
    color: '#fff',        
    fontSize: '1.25rem',  
    padding: '0.6rem 1rem',
    borderRadius: '4px',
    backgroundColor: 'inherit',  
    marginLeft: '1rem',
    cursor: 'pointer',
    border: 'none',             
    boxShadow: 'none',          
    transition: 'color 0.3s ease',
  }
};

export default Header;