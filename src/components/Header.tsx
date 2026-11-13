import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Главная' },
    { to: '/walk', label: 'Выгул' },
    { to: '/nanny', label: 'Зооняня' },
    { to: '/boarding', label: 'Передержка' },
    { to: '/taxi', label: 'Зоотакси' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
          <span className="zoo">ЗОО</span>КОНСЬЕРЖ
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'nav-link-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/chat" className="header-btn" aria-label="Чат">
            💬
          </Link>
          <Link to="/cabinet" className="header-btn header-btn-profile" aria-label="Кабинет">
            👤
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'hamburger-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
