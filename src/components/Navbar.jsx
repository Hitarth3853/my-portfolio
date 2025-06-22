import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyPortfolio</h2>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#1f2937', // dark gray
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#a78bfa', // soft purple
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
};

export default Navbar;

