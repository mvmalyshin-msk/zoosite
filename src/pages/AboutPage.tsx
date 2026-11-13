import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1 className="page-title">О компании ЗооМир</h1>
          <p className="page-desc">
            Мы — команда любителей животных, которая хочет сделать жизнь ваших питомцев
            лучше. С 2018 года мы помогаем тысячам семей находить лучшие товары для их пушистых,
            пернатых и чешуйчатых друзей.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">8+</span>
            <span className="stat-label">Лет на рынке</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50 000+</span>
            <span className="stat-label">Довольных клиентов</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">10 000+</span>
            <span className="stat-label">Товаров</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">4.9 ⭐</span>
            <span className="stat-label">Средний рейтинг</span>
          </div>
        </div>

        <div className="about-values">
          <h2 className="section-title">Наши ценности</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🩺</span>
              <h3>Забота о здоровье</h3>
              <p>Все товары проходят проверку ветеринаров. Мы работаем только с проверенными производителями.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Честность</h3>
              <p>Прозрачные цены, реальные отзывы и гарантия возврата — наши главные принципы.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🌍</span>
              <h3>Экологичность</h3>
              <p>Поддерживаем экологичные бренды и переработку упаковки. Заботимся о планете.</p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <h2 className="section-title">Наша команда</h2>
          <div className="team-grid">
            <div className="team-card">
              <span className="team-avatar">👩‍⚕️</span>
              <h4>Елена Смирнова</h4>
              <p>Ветеринар, консультант</p>
            </div>
            <div className="team-card">
              <span className="team-avatar">👨‍💼</span>
              <h4>Алексей Иванов</h4>
              <p>Основатель, директор</p>
            </div>
            <div className="team-card">
              <span className="team-avatar">👩‍🎨</span>
              <h4>Мария Козлова</h4>
              <p>Маркетолог</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
