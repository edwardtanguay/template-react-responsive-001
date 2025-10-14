import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import MessagesPage from './pages/MessagesPage';
import DocumentsPage from './pages/DocumentsPage';
import CalendarPage from './pages/CalendarPage';
import ShoppingPage from './pages/ShoppingPage';
import FavoritesPage from './pages/FavoritesPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
