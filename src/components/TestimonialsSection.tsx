import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Анна Петрова',
    text: 'Отличный магазин! Корм всегда свежий, доставка быстрая. Моя собака в восторге от корма премиум!',
    avatar: '👩',
    rating: 5,
  },
  {
    name: 'Иван Сидоров',
    text: 'Заказываю игрушки для своего лабрадора. Качество на высоте, игрушки прочные и интересные.',
    avatar: '👨',
    rating: 5,
  },
  {
    name: 'Мария Козлова',
    text: 'Потрясающий выбор товаров для кошек. Ветеринар помог подобрать корм — котик стал здоровее!',
    avatar: '👩‍🦰',
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">
                <span className="testimonial-avatar">{t.avatar}</span>
                <div>
                  <h4 className="testimonial-name">{t.name}</h4>
                  <div className="testimonial-stars">{'⭐'.repeat(t.rating)}</div>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
