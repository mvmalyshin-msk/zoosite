import './FeaturesSection.css';
import { features } from '../data/products';

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
