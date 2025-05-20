import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logoButton}>
        🛒 Online Marketplace
      </Link>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  logoButton: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
};

export default Header;