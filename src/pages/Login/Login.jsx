import Header from '../../components/Header';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <Header />
      <main className="page-content">
        <div className="login-box">
          <h1>Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <button type="submit" className="submit-btn">로그인</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
