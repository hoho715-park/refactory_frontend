import { useState } from 'react';
import Header from '../../components/Header';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: '이 서비스는 어떤 기능을 제공하나요?',
    answer: '코드 구조를 시각화하고 코드 품질을 분석하여 리팩토링 방향을 제안하는 웹 플랫폼입니다. 사용자는 자신의 코드를 입력하면 함수 구조, 의존 관계 등을 그래프로 확인하고 개선이 필요한 부분을 확인할 수 있습니다.'
  },
  {
    id: 2,
    question: '어떤 언어를 지원하나요?',
    answer: '현재는 Python 언어를 중심으로 지원하며, 향후 JavaScript, Java 등 다양한 언어로 확장할 예정입니다.'
  },
  {
    id: 3,
    question: '코드 시각화는 어떻게 이루어지나요?',
    answer: '코드를 분석하여 함수 호출 관계, 클래스 구조, 모듈 의존성 등을 그래프 형태로 시각화합니다. 이를 통해 코드의 흐름을 한눈에 이해할 수 있습니다.'
  },
  {
    id: 4,
    question: '코드 품질 분석은 무엇을 기준으로 하나요?',
    answer: '다음과 같은 기준을 기반으로 분석합니다.',
    list: [
      '코드 복잡도 (Cyclomatic Complexity)',
      '코드 중복 여부',
      '코드 스멜(Code Smell)',
      '함수 및 클래스 구조'
    ]
  },
  {
    id: 5,
    question: '리팩토링 추천은 어떻게 제공되나요?',
    answer: '코드 분석 결과를 바탕으로 코드 품질 향상을 위한 개선 방향을 제안합니다.',
    list: [
      '불필요한 코드 제거',
      '함수 분리',
      '구조 개선'
    ]
  },
  {
    id: 6,
    question: '이 서비스의 목표는 무엇인가요?',
    answer: '단순히 코드를 분석하는 것을 넘어 코드를 더 쉽게 이해하고, 더 좋은 코드로 개선할 수 있도록 돕는 것이 목표입니다.'
  },
  {
    id: 7,
    question: '성능 최적화에도 도움이 되나요?',
    answer: '네, 코드 분석을 통해 성능 개선 및 효율적인 코드 작성에 도움을 줍니다.',
    list: [
      '불필요한 반복 연산',
      '비효율적인 구조'
    ]
  }
];

function FAQ() {
  const [openItems, setOpenItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', question: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.question) {
      setIsSubmitted(true);
    }
  };

  const isFormValid = formData.name && formData.email && formData.question;

  return (
    <div className="faq-page">
      <Header />
      <main className="faq-content">
        <div className="faq-header">
          <h1>자주 묻는 질문</h1>
          <p>RE:FACTORY 서비스에 대해 궁금한 점을 확인해보세요.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${openItems.includes(item.id) ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <span className="question-number">Q{item.id}</span>
                <span className="question-text">{item.question}</span>
                <span className="faq-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="answer-content">
                  <p>{item.answer}</p>
                  {item.list && (
                    <ul>
                      {item.list.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ask-question-section">
          <p>찾으시는 답변이 없으신가요?</p>
          <button className="ask-question-btn" onClick={openModal}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            질문하기
          </button>
        </div>
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <h2>질문하기</h2>
                  <p>궁금한 점을 남겨주시면 빠르게 답변드리겠습니다.</p>
                </div>

                <form className="question-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">이름</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="이름을 입력해주세요"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">이메일</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="답변받으실 이메일을 입력해주세요"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="question">질문 내용</label>
                    <textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder="궁금한 점을 자유롭게 작성해주세요"
                      rows="5"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isFormValid ? 'active' : ''}`}
                    disabled={!isFormValid}
                  >
                    전송하기
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" stroke="#7492B7" strokeWidth="2" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="#7492B7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2>전송이 완료되었습니다</h2>
                <p>빠른 시일 내에 입력하신 이메일로 답변드리겠습니다.</p>
                <button className="close-btn" onClick={closeModal}>
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQ;
