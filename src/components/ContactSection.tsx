import '../components/ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-card">
          <h2 className="contact-title">Свяжитесь с нами</h2>
          <p className="contact-desc">
            Расскажите, какая именно помощь требуется вашему любимцу и на какие даты? Мы оперативно подберём для вас лучшие варианты!
          </p>
          <div className="contact-actions">
            <a
              href="https://t.me/zooconcierge_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-coral"
            >
              Написать в бот
            </a>
            <a href="mailto:info@zooconcierge.ru" className="btn btn-outline">
              Написать на почту
            </a>
          </div>
          <p className="contact-signature">
            С уважением,<br />
            команда зооконсьерж-сервиса 🐾
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
