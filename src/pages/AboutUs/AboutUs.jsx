import Header from '../../components/Header';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <Header />
      <main className="page-content">
        <h1>About Us</h1>
        <p>RE:FACTORY는 코드 분석 및 리팩토링을 위한 혁신적인 플랫폼입니다.</p>
        <p>우리는 개발자들이 더 나은 코드를 작성할 수 있도록 돕습니다.</p>
      </main>
    </div>
  );
}

export default AboutUs;
