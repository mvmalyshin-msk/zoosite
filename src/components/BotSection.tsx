import '../components/BotSection.css';

function BotSection() {
  return (
    <section className="bot-section">
      <div className="container">
        <div className="bot-card">
          <div className="bot-icon">🐾</div>
          <h2 className="bot-title">Бот для записи</h2>
          <p className="bot-desc">
            Спасибо, что воспользовались услугами Зооконсьержа! 🐾 Для вашего удобства у нас есть бот для записи:
          </p>
          <a
            href="https://t.me/zooconcierge_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral bot-telegram-btn"
          >
            @zooconcierge_bot
          </a>
          <p className="bot-hint">
            Оставляйте заявки через него — так мы быстрее их увидим и возьмём в работу.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BotSection;
