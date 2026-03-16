import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import './ContactUs.css';
import contactImage from '../../assets/contactus-page/contact-illustration.png';
import footerBg from '../../assets/contactus-page/contact-bg.png';
import logo from '../../assets/main-page/logo.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 검증: 필수 필드 확인
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    // 메일 제목과 본문 구성
    const subject = `${formData.firstName} ${formData.lastName}님의 메시지`;
    const body = `보낸 사람: ${formData.firstName} ${formData.lastName}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`;
    
    // mailto 링크 생성
    const mailtoLink = `mailto:iamjack0416@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // 메일 클라이언트 열기
    window.location.href = mailtoLink;
    
    // 폼 초기화
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-us-page">
      <Header />
      <main className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-form-section">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder=""
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
            </div>
          </div>

          <div className="contact-image-section">
            <img src={contactImage} alt="Contact Us Illustration" className="contact-illustration" />
          </div>
        </div>

        <section
          className={`contact-footer ${footerVisible ? 'visible' : ''}`}
          ref={footerRef}
        >
          <img src={footerBg} alt="Background" className="footer-bg-img" />

          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="RE:FACTORY Logo" className="footer-logo-img" />
                <div className="footer-logo-text">
                  <span className="footer-logo-re">RE:</span>
                  <span className="footer-logo-factory">FACT<span className="footer-logo-ory">ORY</span></span>
                </div>
              </div>

              <p className="footer-tagline">Analyze. Visualize. Refactor.</p>
            </div>

            <div className="footer-category">
              <h2>Category</h2>
              <ul className="footer-links">
                <li>About Us</li>
                <li>Code Insight</li>
                <li>FAQ</li>
                <li>Community</li>
              </ul>
            </div>

            <div className="footer-contact">
              <h2>Contact Us</h2>
              <div className="footer-contact-item">
                <span>refactory@hongik.ac.kr</span>
              </div>
              <div className="footer-contact-item">
                <span>
                  Hongik University, Sejong Campus<br />
                  Jochiwon-eup Sejong-si 30016
                </span>
              </div>
              <div className="footer-contact-item">
                <span>044-860-2114</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;