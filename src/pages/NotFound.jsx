import React from 'react';

const NotFound = () => {
  return (
    <section style={styles.section}>
      <h1>404 - Page Not Found</h1>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem',
    textAlign: 'center',
    color: 'red'
  }
};

export default NotFound;
