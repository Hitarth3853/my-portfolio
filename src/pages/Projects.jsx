import React from 'react';

const projectData = [
  {
    title: "Airline Reservation System",
    description: "A full-stack booking app with flight search, seat selection, payments, and PDF ticket generation.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Render"],
    github: "https://github.com/yourusername/airline-reservation"
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio using React, styled-components, and deployed on Netlify.",
    tech: ["React", "CSS", "Netlify"],
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Todos App",
    description: "A full-stack Todo List application with CRUD operations using React for frontend and Node.js with Express for backend.",
    tech: ["React", "Node.js", "Express", "Axios", "Bootstrap"],
    github: "https://github.com/yourusername/todos-app"
  }
];

const Projects = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projectData.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech.join(', ')}</p>
            <div style={styles.links}>
              <a href={project.github} target="_blank" rel="noreferrer" style={styles.link}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 2rem',
    backgroundColor: '#064420',
    minHeight: '100vh',
    color: 'white'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d4f8e8'
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    backgroundColor: '#c2c2c2',
    color: '#000',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    textAlign: 'left'
  },
  links: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  link: {
    color: '#003366',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
};

export default Projects;



