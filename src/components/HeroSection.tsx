import '../components/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Зооконсьерж — профессиональный уход за вашим питомцем
          </h1>
          <p className="hero-subtitle">
            Мы профессионально находим проверенных специалистов и решаем любые вопросы, связанные с вашим питомцем. Берём на себя всю рутину по поиску и проверке, чтобы вы были спокойны.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-coral">Наши услуги</a>
            <a href="https://t.me/zooconcierge_bot" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Написать в бот
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
