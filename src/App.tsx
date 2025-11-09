import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PageWelcome from './pages/PageWelcome';
import PageDocuments from './pages/PageDocuments';
import PageAbout from './pages/PageAbout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWelcome />} />
          <Route path="documents" element={<PageDocuments />} />
          <Route path="about" element={<PageAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}