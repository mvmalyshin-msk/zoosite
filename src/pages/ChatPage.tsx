import { Link } from 'react-router-dom';
import './ChatPage.css';

function ChatPage() {
  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-btn">← На главную</Link>
        
        <div className="chat-card">
          <h1 className="chat-title">Чат с нами</h1>
          <p className="chat-desc">
            Самый быстрый способ связаться с нами — через Telegram-бот. 
            Он работает 24/7 и мгновенно обрабатывает заявки.
          </p>
          
          <div className="chat-bot-card">
            <div className="chat-bot-avatar">🤖</div>
            <h2>@zooconcierge_bot</h2>
            <p className="chat-bot-hint">
              Нажмите кнопку ниже, чтобы начать диалог
            </p>
            <a
              href="https://t.me/zooconcierge_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-coral btn-full"
            >
              Открыть в Telegram
            </a>
          </div>

          <div className="chat-template">
            <h3>Шаблон первого сообщения:</h3>
            <blockquote>
              Добрый день! Я Максим, представитель «Зооконсьерж». 
              Подберём водителя для комфортной поездки с вами и вашей собакой.
            </blockquote>
            <p className="chat-template-hint">
              Бот задаст уточняющие вопросы и подберёт лучшее предложение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
