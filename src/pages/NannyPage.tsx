import { Link } from 'react-router-dom';
import './NannyPage.css';

function NannyPage() {
  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-btn">← На главную</Link>
        
        <div className="service-hero">
          <div className="service-icon-large">🏠</div>
          <h1 className="service-title">Зооняня</h1>
          <p className="service-desc">
            Профессиональный уход за вашим питомцем, включая кормление, игры и уход, пока вы отсутствуете. Приходящая или с проживанием.
          </p>
        </div>

        <div className="service-content">
          <h2 className="section-title">Как это работает</h2>
          <ol className="steps">
            <li>
              <div className="steps-text">
                <strong>Оставьте заявку</strong>
                <span>Напишите нашему боту @zooconcierge_bot</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Подберём няню</strong>
                <span>С опытом работы с вашим видом животного</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Уход по расписанию</strong>
                <span>Кормление, игры, прогулки — как дома</span>
              </div>
            </li>
          </ol>

          <h2 className="section-title">Тарифы</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Эконом</span>
                <span className="pricing-price">от 800 ₽/visit</span>
              </div>
              <ul className="pricing-features">
                <li>Посещение 30 минут</li>
                <li>Кормление</li>
                <li>Прогулка</li>
              </ul>
            </div>
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-badge">Популярный</div>
              <div className="pricing-header">
                <span className="pricing-name">Комфорт</span>
                <span className="pricing-price">от 1500 ₽/visit</span>
              </div>
              <ul className="pricing-features">
                <li>Посещение 60 минут</li>
                <li>Кормление и игры</li>
                <li>Прогулка 30 минут</li>
                <li>Фотоотчет</li>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Комфорт с деталями</span>
                <span className="pricing-price">от 3000 ₽/сутки</span>
              </div>
              <ul className="pricing-features">
                <li>С проживанием</li>
                <li>Полный уход 24/7</li>
                <li>Кормление премиум</li>
                <li>Видеоотчеты</li>
              </ul>
            </div>
          </div>

          <a
            href="https://t.me/zooconcierge_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral btn-full"
          >
            Заказать зооняню
          </a>
        </div>
      </div>
    </div>
  );
}

export default NannyPage;
