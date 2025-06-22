import React from 'react';

const Contact = () => {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Let's Connect</h1>
      <p style={styles.subheading}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div style={styles.contactInfo}>
        <p><strong>Email:</strong> <a href="mailto:shahhitarth75@gmail.com" style={styles.link}>shahhitarth75@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919265586971" style={styles.link}>+91 92655 86971</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hitarth-shah-277861213" target="_blank" rel="noreferrer" style={styles.link}>linkedin.com/in/hitarth-shah-277861213</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Hitarth3853" target="_blank" rel="noreferrer" style={styles.link}>github.com/Hitarth3853</a></p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333'
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555'
  },
  contactInfo: {
    fontSize: '1.1rem',
    lineHeight: '2',
    color: '#444'
  },
  link: {
    color: '#0066cc',
    textDecoration: 'underline'
  }
};

export default Contact;

