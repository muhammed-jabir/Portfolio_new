function Contact() {
  return (
    <section className="contact-container">
  <div className="contact-card">
    
    {/* LEFT SIDE */}
    <div className="contact-left">
      <h2>Contact Me</h2>
      <p>Want to collaborate? Send me a message.</p>

      <h3>Email</h3>
      <p className="email-text">muhammedjabir89994@gmail.com</p>

      <div className="social-icons">
        <a href="https://github.com/muhammed-jabir" target="_blank" rel="noreferrer">
          <img src="/github.jpeg" alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/muhammed-jabir-m-t-550a50350/" target="_blank" rel="noreferrer">
          <img src="/linkedin.jpeg" alt="LinkedIn"/>
        </a>
        <a href="https://instagram.com/jab_ir.__" target="_blank" rel="noreferrer">
          <img src="/instagram.jpeg" alt="Instagram"/>
        </a>
        <a href="https://wa.me/9562530852" target="_blank" rel="noreferrer">
          <img src="/whatsapp.jpeg" alt="Whatsapp"/>
        </a>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <form className="contact-form">
      <input type="text" color="#00dfff" placeholder="Your name" required />
      <input type="email" color="#00dfff" placeholder="Your email" required />
      <textarea placeholder="Your message" color="#00dfff" required></textarea>

      <button type="submit" className="send-btn">Send</button>
    </form>

  </div>
</section>

  );
}

export default Contact;
