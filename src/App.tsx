import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import WalkPage from './pages/WalkPage';
import NannyPage from './pages/NannyPage';
import BoardingPage from './pages/BoardingPage';
import TaxiPage from './pages/TaxiPage';
import ChatPage from './pages/ChatPage';
import CabinetPage from './pages/CabinetPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="walk" element={<WalkPage />} />
          <Route path="nanny" element={<NannyPage />} />
          <Route path="boarding" element={<BoardingPage />} />
          <Route path="taxi" element={<TaxiPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="cabinet" element={<CabinetPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
