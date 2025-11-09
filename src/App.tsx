import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DocumentsPage from './pages/DocumentsPage';
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage/>} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
