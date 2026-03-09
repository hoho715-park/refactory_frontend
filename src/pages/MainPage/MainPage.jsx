import Header from '../../components/Header';
import HeroContent from '../../components/HeroContent';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <section className="hero-section">
        <HeroContent />
      </section>
    </div>
  );
}

export default MainPage;
