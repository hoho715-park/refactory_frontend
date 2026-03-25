import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import CodeInsight from './pages/CodeInsight';
import FAQ from './pages/FAQ';
import Community from './pages/Community';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Diagnose from './pages/Diagnose';

import AuthPanel from './components/AuthPanel/AuthPanel';

function App() {
  const [authStep, setAuthStep] = useState('closed'); // closed | login | signup

  const openLogin = () => {
    setAuthStep('login');
  };

  const goSignup = () => {
    setAuthStep('signup');
  };

  const goLogin = () => {
    setAuthStep('login');
  };

  const closeAuth = () => {
    setAuthStep('closed');
  };

  useEffect(() => {
    if (authStep === 'closed') {
      document.body.style.overflow = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [authStep]);

  return (
    <BrowserRouter basename="/refactory_frontend">
      <div className="app-shell">
        <div
          className={[
            'main-wrapper',
            authStep === 'login' ? 'login-open' : '',
            authStep === 'signup' ? 'signup-open' : '',
          ].join(' ')}
        >
          <Routes>
            <Route path="/" element={<MainPage onLoginClick={openLogin} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/code-insight" element={<CodeInsight />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/diagnose" element={<Diagnose />} />
          </Routes>
        </div>

        <AuthPanel
          step={authStep}
          onClose={closeAuth}
          onGoSignup={goSignup}
          onGoLogin={goLogin}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;