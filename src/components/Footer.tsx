import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand">
              <span className="zoo">ЗОО</span>КОНСЬЕРЖ
            </Link>
            <p className="footer-desc">
              Сервис заботы о питомцах. Подберём проверенных специалистов для вашего любимца.
            </p>
          </div>

          <div className="footer-col">
            <h4>Услуги</h4>
            <ul>
              <li><Link to="/walk">Выгул собак</Link></li>
              <li><Link to="/nanny">Зооняня</Link></li>
              <li><Link to="/boarding">Передержка</Link></li>
              <li><Link to="/taxi">Зоотакси</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Контакты</h4>
            <ul className="footer-contacts">
              <li>🤖 <a href="https://t.me/zooconcierge_bot" target="_blank" rel="noopener noreferrer">@zooconcierge_bot</a></li>
              <li>📧 <a href="mailto:info@zooconcierge.ru">info@zooconcierge.ru</a></li>
              <li>🕐 Ежедневно: 8:00 — 22:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Зооконсьерж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
