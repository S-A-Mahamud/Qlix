import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-brand">
            <div className="logo">
              <div className="logo-icon"></div>
              <span className="logo-text">Qlix</span>
            </div>
          </div>
          
          <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#features" className="nav-link">Features</a>
              </li>
              <li className="nav-item">
                <a href="#showcase" className="nav-link">Showcase</a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link">Testimonials</a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Introducing Qlix</span>
            <span className="badge-pulse"></span>
          </div>
          <h1 className="hero-title">
            The Future of
            <span className="gradient-text"> Digital Innovation</span>
          </h1>
          <p className="hero-description">
            Transform your ideas into reality with our cutting-edge platform. 
            Built for creators, developers, and visionaries who dare to push boundaries.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="code-line"></div>
              <div className="code-line"></div>
              <div className="code-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to succeed in one platform</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-rocket"></div>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance with cutting-edge technology stack</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-shield"></div>
            </div>
            <h3>Secure by Default</h3>
            <p>Enterprise-grade security built into every layer</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-puzzle"></div>
            </div>
            <h3>Highly Flexible</h3>
            <p>Customizable solutions that adapt to your needs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-chart"></div>
            </div>
            <h3>Advanced Analytics</h3>
            <p>Real-time insights and comprehensive reporting</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-users"></div>
            </div>
            <h3>Team Collaboration</h3>
            <p>Work together seamlessly with your entire team</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-globe"></div>
            </div>
            <h3>Global Scale</h3>
            <p>Distributed infrastructure for worldwide reach</p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase-section" id="showcase">
        <div className="showcase-content">
          <div className="showcase-text">
            <h2 className="showcase-title">See Qlix in Action</h2>
            <p className="showcase-description">
              Experience the power of our platform through interactive demonstrations 
              and real-world use cases.
            </p>
            <div className="showcase-features">
              <div className="showcase-feature">
                <div className="checkmark"></div>
                <span>Real-time collaboration</span>
              </div>
              <div className="showcase-feature">
                <div className="checkmark"></div>
                <span>Instant deployment</span>
              </div>
              <div className="showcase-feature">
                <div className="checkmark"></div>
                <span>Advanced monitoring</span>
              </div>
            </div>
            <button className="btn-primary">Start Free Trial</button>
          </div>
          <div className="showcase-visual">
            <div className="dashboard-preview">
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <div className="nav-item active"></div>
                  <div className="nav-item"></div>
                  <div className="nav-item"></div>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="chart-area"></div>
                <div className="metrics-grid">
                  <div className="metric-card"></div>
                  <div className="metric-card"></div>
                  <div className="metric-card"></div>
                  <div className="metric-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">See what our customers have to say</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Qlix has transformed how we build and deploy applications. It's a game-changer."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Sarah Chen</h4>
                <p>CTO at TechCorp</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The performance and reliability are unmatched. We couldn't be happier."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Michael Rodriguez</h4>
                <p>Lead Developer at StartupHub</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Finally, a platform that understands what developers actually need."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Emily Johnson</h4>
                <p>Product Manager at InnovateCo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="pricing">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Join thousands of developers and companies building the future with Qlix
          </p>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Start Building</button>
          </form>
          <p className="cta-note">No credit card required. Free forever for small projects.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon"></div>
                <span className="logo-text">Qlix</span>
              </div>
              <p className="footer-description">
                The future of digital innovation. Build, deploy, and scale with confidence.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Twitter">
                  <div className="social-icon icon-twitter"></div>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <div className="social-icon icon-github"></div>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <div className="social-icon icon-linkedin"></div>
                </a>
                <a href="#" className="social-link" aria-label="Discord">
                  <div className="social-icon icon-discord"></div>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#showcase">Showcase</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#">Changelog</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">API Reference</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Security</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 Qlix. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
