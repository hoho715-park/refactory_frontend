import Header from '../../components/Header';
import './FAQ.css';

function FAQ() {
  return (
    <div className="faq-page">
      <Header />
      <main className="page-content">
        <h1>FAQ</h1>
        <div className="faq-item">
          <h3>Q. RE:FACTORY는 어떤 서비스인가요?</h3>
          <p>A. RE:FACTORY는 코드 분석 및 리팩토링을 위한 플랫폼입니다.</p>
        </div>
        <div className="faq-item">
          <h3>Q. 어떤 언어를 지원하나요?</h3>
          <p>A. 현재 JavaScript, TypeScript, Python 등 다양한 언어를 지원합니다.</p>
        </div>
        <div className="faq-item">
          <h3>Q. 무료로 사용할 수 있나요?</h3>
          <p>A. 기본 기능은 무료로 제공되며, 고급 기능은 Pro 플랜에서 이용 가능합니다.</p>
        </div>
      </main>
    </div>
  );
}

export default FAQ;
