import Header from '../../components/Header';
import './AboutUs.css';

import AboutRefactory from './AboutRefactory';
import WhyRefactory from './WhyRefactory';
import KeyFeatures from './KeyFeatures';
import OurValues from './OurValues';

export default function AboutUs() {
  return (
    <div className="about-container">

      <Header variant="transparent" />

      {/* 맨 위 타이틀 섹션 */}
      <section className="about-title-section">
        <h1 className="about-title">About Us</h1>
      </section>

      {/* About RE:FACTORY */}
      <section className="about-section">
        <AboutRefactory />
      </section>

      {/* Why RE:FACTORY */}
      <section className="about-section">
        <WhyRefactory />
      </section>

      {/* Key Features */}
      <section className="about-section">
        <KeyFeatures />
      </section>

      {/* Our Values */}
      <section className="about-section">
        <OurValues />
      </section>

    </div>  
  );
}