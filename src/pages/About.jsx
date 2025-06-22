import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.paragraph}>
        Hello! I'm <strong>Hitarth Shah</strong>, a passionate and detail-oriented <strong>Full Stack Developer</strong> with experience in building dynamic, scalable web applications using <strong>React, Node.js, MongoDB</strong>, and modern technologies.
      </p>
      <p style={styles.paragraph}>
        I'm currently in my 3rd year of Computer Science Engineering and have built several full-stack projects like an Airline Reservation System, Portfolio Site, and more. I enjoy turning complex problems into elegant and efficient solutions.
      </p>
      <p style={styles.paragraph}>
        My goal is to join a top-tier tech company and work on cutting-edge products that create real-world impact. I’m actively preparing for high-paying roles and expanding my skill set in areas like <strong>AI</strong>, <strong>DataScience</strong>, and <strong>Data Analysis</strong>.
      </p>
      <p style={styles.paragraph}>
        When I’m not coding, you can find me exploring new tech, reading, or helping others in the dev community.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 2rem',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'left',
    lineHeight: '1.8',
    fontSize: '1.1rem'
  },
  heading: {
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  paragraph: {
    marginBottom: '1rem'
  }
};

export default About;

