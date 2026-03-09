import Header from '../../components/Header';
import './Community.css';

function Community() {
  return (
    <div className="community-page">
      <Header />
      <main className="page-content">
        <h1>Community</h1>
        <p>RE:FACTORY 커뮤니티에 오신 것을 환영합니다.</p>
        <p>개발자들과 함께 코드 품질 향상에 대해 논의하고 경험을 공유하세요.</p>
      </main>
    </div>
  );
}

export default Community;
