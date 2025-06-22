import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>© {new Date().getFullYear()} Hitarth Shah. All rights reserved.</p>
        <div style={styles.links}>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:shahhitarth75@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    position: 'relative',
    bottom: 0,
    top:'100vh',
    left: 0,
    right: 0,
    width: '100%',
    padding: '1.2rem 0',
    textAlign: 'center',
  },
  content: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  links: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '0.9rem',
  }
};

export default Footer;



