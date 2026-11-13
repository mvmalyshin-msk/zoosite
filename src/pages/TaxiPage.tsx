import { Link } from 'react-router-dom';
import './TaxiPage.css';

function TaxiPage() {
  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-btn">← На главную</Link>
        
        <div className="service-hero">
          <div className="service-icon-large">🚗</div>
          <h1 className="service-title">Зоотакси</h1>
          <p className="service-desc">
            Комфортная и безопасная перевозка животного. Доставка вашего питомца куда угодно: к ветеринару, в парк или к друзьям.
          </p>
        </div>

        <div className="service-content">
          <h2 className="section-title">Как это работает</h2>
          <ol className="steps">
            <li>
              <div className="steps-text">
                <strong>Оставьте заявку</strong>
                <span>Укажите маршрут и время в боте</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Подберём водителя</strong>
                <span>С опытом перевозки животных</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Забираем питомца</strong>
                <span>Комфортный бокс и безопасность в пути</span>
              </div>
            </li>
          </ol>

          <h2 className="section-title">Тарифы</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Эконом</span>
                <span className="pricing-price">от 800 ₽</span>
              </div>
              <ul className="pricing-features">
                <li>До 10 км</li>
                <li>Стандартный бокс</li>
                <li>1 животное</li>
              </ul>
            </div>
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-badge">Популярный</div>
              <div className="pricing-header">
                <span className="pricing-name">Комфорт</span>
                <span className="pricing-price">от 1500 ₽</span>
              </div>
              <ul className="pricing-features">
                <li>До 20 км</li>
                <li>Увеличенный бокс</li>
                <li>Кондиционер</li>
                <li>Помощь с посадкой</li>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Комфорт с деталями</span>
                <span className="pricing-price">от 2500 ₽</span>
              </div>
              <ul className="pricing-features">
                <li>Без ограничений</li>
                <li>Премиум бокс</li>
                <li>Сопровождение</li>
                <li>Страхование</li>
              </ul>
            </div>
          </div>

          <a
            href="https://t.me/zooconcierge_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral btn-full"
          >
            Заказать зоотакси
          </a>
        </div>
      </div>
    </div>
  );
}

export default TaxiPage;
