import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import CodeInsight from './pages/CodeInsight';
import ZipUpload from './pages/CodeInsight/ZipUpload';
import GitHubConnect from './pages/CodeInsight/GitHubConnect';
import Dashboard from './pages/CodeInsight/Dashboard';
import FAQ from './pages/FAQ';
import Community from './pages/Community';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Diagnose from './pages/Diagnose';

function App() {
  return (
    <BrowserRouter basename="/refactory_frontend">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/code-insight" element={<CodeInsight />} />
        <Route path="/code-insight/upload" element={<ZipUpload />} />
        <Route path="/code-insight/github" element={<GitHubConnect />} />
        <Route path="/code-insight/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diagnose" element={<Diagnose />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
