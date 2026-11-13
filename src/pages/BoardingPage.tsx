import { Link } from 'react-router-dom';
import './BoardingPage.css';

function BoardingPage() {
  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-btn">← На главную</Link>
        
        <div className="service-hero">
          <div className="service-icon-large">🏡</div>
          <h1 className="service-title">Передержка</h1>
          <p className="service-desc">
            Временный уход за вашим питомцем в безопасном помещении. Подберем идеальные условия: частный дом или зоогостиница.
          </p>
        </div>

        <div className="service-content">
          <h2 className="section-title">Как это работает</h2>
          <ol className="steps">
            <li>
              <div className="steps-text">
                <strong>Оставьте заявку</strong>
                <span>Напишите нашему боту @zooconcierge_bot с датами</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Подберём место</strong>
                <span>Частный дом или зоогостиница — по вашему выбору</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Отдаём питомца</strong>
                <span>Ежедневные отчеты и фото</span>
              </div>
            </li>
          </ol>

          <h2 className="section-title">Тарифы</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Эконом</span>
                <span className="pricing-price">от 800 ₽/сутки</span>
              </div>
              <ul className="pricing-features">
                <li>Комфнат в зоогостинице</li>
                <li>3-х разовое кормление</li>
                <li>Прогулки 2 раза в день</li>
              </ul>
            </div>
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-badge">Популярный</div>
              <div className="pricing-header">
                <span className="pricing-name">Комфорт</span>
                <span className="pricing-price">от 1500 ₽/сутки</span>
              </div>
              <ul className="pricing-features">
                <li>Частный дом</li>
                <li>Индивидуальный уход</li>
                <li>Кормление премиум</li>
                <li>Ежедневные фото</li>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Комфорт с деталями</span>
                <span className="pricing-price">от 2500 ₽/сутки</span>
              </div>
              <ul className="pricing-features">
                <li>Личная комната</li>
                <li>Видеонаблюдение</li>
                <li>Груминг включен</li>
                <li>Игры и дрессировка</li>
              </ul>
            </div>
          </div>

          <a
            href="https://t.me/zooconcierge_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral btn-full"
          >
            Заказать передержку
          </a>
        </div>
      </div>
    </div>
  );
}

export default BoardingPage;
