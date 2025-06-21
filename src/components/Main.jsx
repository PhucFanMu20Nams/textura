import React from 'react'
import Hero from './Hero'
import PopularItems from './PopularItems'

function Main({ onOpenModal, showNotification }) {
  const handleContactSubmit = (e) => {
    e.preventDefault()
    showNotification('Message sent successfully!')
  }

  return (
    <main>
      <Hero />
      <PopularItems />

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