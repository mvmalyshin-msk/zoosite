import '../components/AdvantagesSection.css';

const advantages = [
  {
    title: 'Три варианта на выбор',
    desc: 'Для вашего удобства мы всегда подбираем 3 разнобюджетных предложения, чтобы вы могли сравнить: Эконом, Комфорт и Комфорт с деталями.',
    icon: '3️⃣',
  },
  {
    title: 'Индивидуальный подход',
    desc: 'При подборе мы обязательно учитываем породу, возраст, характер, привычки и страхи вашего животного.',
    icon: '🎯',
  },
  {
    title: 'Прозрачная стоимость',
    desc: 'Услуги по поиску, проверке и подбору специалиста уже включены в итоговую стоимость. Никаких скрытых комиссий или доплат.',
    icon: '💰',
  },
];

function AdvantagesSection() {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="section-title">Наши преимущества</h2>
        <div className="advantages-grid">
          {advantages.map((adv, i) => (
            <div key={i} className="advantage-card">
              <div className="advantage-icon">{adv.icon}</div>
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-desc">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
