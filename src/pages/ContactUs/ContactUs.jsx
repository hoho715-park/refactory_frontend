import { useState } from 'react';
import Header from '../../components/Header';
import './ContactUs.css';

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
    console.log('Form submitted:', formData);
    // 나중에 백엔드 연결 추가
    alert('메시지가 전송되었습니다!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-page">
      <Header />
      <main className="contact-container">
        <div className="contact-left">
          <h1>Contact Us</h1>
          
          <div className="contact-info-section">
            <h3>Email</h3>
            <p>refactory@hongik.ac.kr</p>
          </div>

          <div className="contact-info-section">
            <h3>Phone</h3>
            <p>000-0000-0000</p>
          </div>

          <div className="contact-info-section">
            <h3>Address</h3>
            <p>
              Hongik University,<br />
              Sejong Campus<br />
              2639 Sejong-ro,<br />
              Jochiwon-eup<br />
              Sejong-si 30016<br />
              Republic of Korea
            </p>
          </div>
        </div>

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
      </main>
    </div>
  );
}

export default ContactUs;