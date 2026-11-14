import { Link } from 'react-router-dom';
import '../components/ServicesSection.css';

const services = [
  {
    id: 'nanny',
    title: 'Зооняня',
    color: 'walk',
    icon: '🏠',
    description: 'Профессиональный уход за вашим питомцем, включая кормление, игры и уход, пока вы отсутствуете. Приходящая или с проживанием.',
    link: '/nanny',
  },
  {
    id: 'walk',
    title: 'Выгул',
    color: 'nanny',
    icon: '🐕',
    description: 'Безопасный выгул вашего питомца на свежем воздухе. Найдем ответственного догситтера с удобным для вас графиком.',
    link: '/walk',
  },
  {
    id: 'taxi',
    title: 'Зоотакси',
    color: 'boarding',
    icon: '🚗',
    description: 'Комфортная и безопасная перевозка животного. Доставка вашего питомца куда угодно: к ветеринару, в парк или к друзьям.',
    link: '/taxi',
  },
  {
    id: 'boarding',
    title: 'Передержка',
    color: 'taxi',
    icon: '🏡',
    description: 'Временный уход за вашим питомцем в безопасном помещении. Подберем идеальные условия: частный дом или зоогостиница.',
    link: '/boarding',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map((service) => (
            <Link to={service.link} key={service.id} className="service-card">
              <div className={`service-icon service-icon--${service.color}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <span className="service-link">Подробнее →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
