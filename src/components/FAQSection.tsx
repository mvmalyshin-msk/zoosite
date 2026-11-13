import '../components/FAQSection.css';

const faqs = [
  {
    question: 'Как заказать услугу?',
    answer: 'Напишите нашему боту @zooconcierge_bot — он подберёт специалиста и ответит на все вопросы.',
  },
  {
    question: 'Сколько стоят услуги?',
    answer: 'Стоимость зависит от конкретной услуги и условий. Мы всегда подбираем 3 варианта: Эконом, Комфорт и Комфорт с деталями.',
  },
  {
    question: 'Как вы подбираете специалистов?',
    answer: 'Мы учитываем породу, возраст, характер, привычки и страхи вашего животного. Все специалисты проходят проверку.',
  },
  {
    question: 'Можно ли отменить заказ?',
    answer: 'Да, вы можете отменить или изменить заказ через бота или связавшись с нами.',
  },
];

function FAQSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Частые вопросы</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.question}</summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
