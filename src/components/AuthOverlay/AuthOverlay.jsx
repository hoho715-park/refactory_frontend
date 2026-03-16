import heroImage from '../../assets/main-page/main_hero.png';
import './AuthOverlay.css';

function AuthOverlay({ isOpen, onClose }) {
  return (
    <div className={`auth-overlay ${isOpen ? 'open' : ''}`}>
      <div className="auth-backdrop" onClick={onClose}></div>

      <div className="auth-panel">
        <button className="auth-close" onClick={onClose} type="button" aria-label="닫기">
          ×
        </button>

        <div className="auth-left">
          <img src={heroImage} alt="factory" />
        </div>

        <div className="auth-right">
          <div className="auth-logo">
            <span>RE:</span>
            <span>
              FACT<span className="logo-accent">ORY</span>
            </span>
          </div>

          <h2 className="auth-title">Login</h2>

          <p className="auth-desc">로그인 폼이 다음 단계에서 들어옵니다</p>
        </div>
      </div>
    </div>
  );
}

export default AuthOverlay;