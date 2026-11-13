import { Link } from 'react-router-dom';
import './CabinetPage.css';

function CabinetPage() {
  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-btn">← На главную</Link>
        
        <div className="cabinet-card">
          <h1 className="cabinet-title">Личный кабинет</h1>
          <p className="cabinet-desc">
            Управление заказами и историей через Telegram-бот
          </p>
          
          <div className="cabinet-features">
            <div className="cabinet-feature">
              <div className="cabinet-feature-icon">📋</div>
              <h3>Мои заказы</h3>
              <p>Просмотр активных и завершённых заявок</p>
            </div>
            <div className="cabinet-feature">
              <div className="cabinet-feature-icon">📅</div>
              <h3>Расписание</h3>
              <p>Ближайшие прогулки, няни и поездки</p>
            </div>
            <div className="cabinet-feature">
              <div className="cabinet-feature-icon">💳</div>
              <h3>Оплата</h3>
              <p>История платежей и способы оплаты</p>
            </div>
            <div className="cabinet-feature">
              <div className="cabinet-feature-icon">🐾</div>
              <h3>Профиль питомца</h3>
              <p>Порода, возраст, привычки и особенности</p>
            </div>
          </div>

          <a
            href="https://t.me/zooconcierge_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral btn-full"
          >
            Открыть личный кабинет в боте
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinetPage;
