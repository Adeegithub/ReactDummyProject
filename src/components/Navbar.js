import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
     <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
    </div>
  );
};

const styles = {
    nav: {
      padding: '10px',
      backgroundColor: '#333',
      display: 'flex',
      justifyContent: 'space-around',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
    },
  };

export default Navbar;