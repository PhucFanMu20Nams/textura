import { useState } from 'react'

function Main({ onOpenModal, showNotification }) {
  const [activeTab, setActiveTab] = useState('all')

  const handleContactSubmit = (e) => {
    e.preventDefault()
    showNotification('Message sent successfully!')
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">Creative Design Solutions</h1>
            <p className="hero-text">
              We are a creative design agency focused on bringing your ideas to life.
            </p>
            <button className="btn btn-primary" onClick={onOpenModal}>Get Started</button>
          </div>
          
          <figure className="hero-banner">
            <img src="/assets/images/banner-1.jpg" alt="Creative design banner" />
          </figure>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="h2 section-title">About Us</h2>
          <p className="section-text">
            We are a team of dedicated designers and developers crafting beautiful digital experiences.
          </p>
          
          <div className="about-content">
            {/* About content here */}
          </div>
        </div>
      </section>

      {/* Services, Features, Blog sections would go here */}
      
      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="h2 section-title">Contact Us</h2>
          
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Main