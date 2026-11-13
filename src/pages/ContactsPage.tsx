import { useState } from 'react';
import './ContactsPage.css';

function ContactsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contacts-page">
      <div className="container">
        <h1 className="page-title">Контакты</h1>

        <div className="contacts-grid">
          <div className="contacts-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Телефон</h3>
                <a href="tel:+78001234567">8 (800) 123-45-67</a>
                <p>Бесплатно по России</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:info@zoomir.ru">info@zoomir.ru</a>
                <p>Ответим в течение часа</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Адрес</h3>
                <p>Москва, ул. Пушкина, 10</p>
                <p>Метро: Пушкинская</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h3>Режим работы</h3>
                <p>Пн-Вс: 9:00 - 21:00</p>
                <p>Без выходных</p>
              </div>
            </div>
          </div>

          <div className="contacts-form-wrapper">
            <h2>Написать нам</h2>
            {submitted && (
              <div className="success-message">
                ✅ Сообщение отправлено! Мы скоро ответим.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contacts-form">
              <div className="form-group">
                <label>Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Сообщение</label>
                <textarea
                  placeholder="Ваш вопрос или предложение..."
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        <div className="map-placeholder">
          <span>🗺️</span>
          <p>Здесь будет карта с нашим магазином</p>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
