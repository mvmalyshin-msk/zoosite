import { Link } from 'react-router-dom';
import './WalkPage.css';

function WalkPage() {
  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-btn">← На главную</Link>
        
        <div className="service-hero">
          <div className="service-icon-large">🐕</div>
          <h1 className="service-title">Выгул собак</h1>
          <p className="service-desc">
            Безопасный выгул вашего питомца на свежем воздухе. Найдем ответственного догситтера с удобным для вас графиком.
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
                <strong>Подберём прогульщика</strong>
                <span>Учитывая породу, возраст и характер вашего питомца</span>
              </div>
            </li>
            <li>
              <div className="steps-text">
                <strong>Прогулка по расписанию</strong>
                <span>Отправляем фото и отчет после каждой прогулки</span>
              </div>
            </li>
          </ol>

          <h2 className="section-title">Тарифы</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Эконом</span>
                <span className="pricing-price">от 500 ₽</span>
              </div>
              <ul className="pricing-features">
                <li>Прогулка 30 минут</li>
                <li>Группа до 3 собак</li>
                <li>Фотоотчет</li>
              </ul>
            </div>
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-badge">Популярный</div>
              <div className="pricing-header">
                <span className="pricing-name">Комфорт</span>
                <span className="pricing-price">от 800 ₽</span>
              </div>
              <ul className="pricing-features">
                <li>Прогулка 60 минут</li>
                <li>Индивидуально</li>
                <li>Фото и видеоотчет</li>
                <li>Кормление после прогулки</li>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-name">Комфорт с деталями</span>
                <span className="pricing-price">от 1200 ₽</span>
              </div>
              <ul className="pricing-features">
                <li>Прогулка 90 минут</li>
                <li>Индивидуально</li>
                <li>Полный видеоотчет</li>
                <li>Кормление и игры</li>
                <li>Транспорт до места прогулки</li>
              </ul>
            </div>
          </div>

          <a
            href="https://t.me/zooconcierge_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral btn-full"
          >
            Заказать выгул
          </a>
        </div>
      </div>
    </div>
  );
}

export default WalkPage;
