import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
