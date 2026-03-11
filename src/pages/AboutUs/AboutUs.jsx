import Header from '../../components/Header';
import './AboutUs.css';

import AboutRefactory from './AboutRefactory';

export default function AboutUs() {
  return (
    <div className="about-container">

      <Header />

      {/* 맨 위 타이틀 섹션 */}
      <section className="about-title-section">
        <h1 className="about-title">About Us</h1>
      </section>

      {/* About RE:FACTORY */}
      <section className="about-section">
        <AboutRefactory />
      </section>

    </div>
  );
}