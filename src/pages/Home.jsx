import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import heroImage from '../image/download.webp'; // Adjusted path for your image

const features = [
  {
    title: "Farmer Education",
    description: "Empowering farmers with knowledge and resources.",
    icon: "📚", // You can replace this with an actual icon
  },
  {
    title: "Marketplace",
    description: "Connect farmers with buyers seamlessly.",
    icon: "🛒",
  },
  {
    title: "AI & IoT",
    description: "Smart farming solutions to monitor and manage crops.",
    icon: "🤖",
  },
  {
    title: "Blockchain",
    description: "Ensuring transparency in agricultural transactions.",
    icon: "🔗",
  },
];

export default function Home() {
  return (
    <div className="home">
      <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="hero-title">Welcome to Hanovate</h1>
        <p className="hero-subtitle">Your smart agriculture solution for Africa</p>
        <div className="cta-buttons">
          <Link to="/login">
            <button className="cta-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="cta-button">Register</button>
          </Link>
        </div>
      </header>
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-card">
          <p>"Hanovate has transformed my farming business!"</p>
          <p>- John Doe, Farmer</p>
        </div>
      </section>
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Hanovate. All rights reserved.</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
}