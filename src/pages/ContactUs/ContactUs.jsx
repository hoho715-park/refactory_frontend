import Header from '../../components/Header';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-page">
      <Header />
      <main className="page-content">
        <h1>Contact Us</h1>
        <p>궁금한 점이 있으시면 언제든지 연락해 주세요.</p>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@refactory.io</p>
          <p><strong>Phone:</strong> 02-1234-5678</p>
          <p><strong>Address:</strong> 서울특별시 강남구 테헤란로 123</p>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
