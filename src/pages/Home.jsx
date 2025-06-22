import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const dots = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
      });
    };

    const update = () => {
      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <canvas
        id="background-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <section style={styles.container}>
        <div style={styles.topSection}>
          <div style={styles.textSection}>
            <h1 style={styles.heading}>
              Hi, I'm <span style={styles.name}>Hitarth Shah</span>
            </h1>
            <p style={styles.subheading}>
              I'm a <strong>Full Stack Developer</strong> with a passion for building elegant and performant web applications.
              I love turning ideas into real-world products that solve problems.
            </p>
          </div>
          <div style={styles.imageSection}>
            <img src="/profile.jpg" alt="Hitarth Shah" style={styles.image} />
          </div>
        </div>

        <div style={styles.bottomSection}>
          <div style={styles.socialIcons}>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:youremail@example.com"><i className="fas fa-envelope"></i></a>
          </div>

          <p style={styles.skills}>
            React • Node.js • MongoDB • Tailwind • REST API • Express.js
          </p>

          <p style={styles.experience}>
            With over 3 years of development experience, I specialize in delivering end-to-end solutions for modern, responsive web applications. My focus lies in writing clean, reusable code, and delivering pixel-perfect user interfaces.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    padding: '5rem 3rem 3rem',
    backgroundColor: '#0d0d23',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  textSection: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '600px',
    zIndex: 1,
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  name: {
    color: '#4F46E5',
  },
  subheading: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: '#d1d5db',
  },
  imageSection: {
    flex: 1,
    minWidth: '280px',
    maxWidth: '400px',
    textAlign: 'center',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
    objectFit: 'cover',
  },
  bottomSection: {
    textAlign: 'center',
    marginTop: '3rem',
    zIndex: 1,
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '1.6rem',
    marginBottom: '1.2rem',
    color: '#d1d5db',
  },
  skills: {
    fontSize: '1rem',
    color: '#9ca3af',
    fontWeight: '500',
    marginBottom: '1.2rem',
  },
  experience: {
    fontSize: '1.1rem',
    color: '#a1a1aa',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Home;

