import Header from '../../components/Header';
import './Diagnose.css';

function Diagnose() {
  return (
    <div className="diagnose-page">
      <Header />
      <main className="page-content">
        <h1>코드 진단</h1>
        <p>코드를 업로드하여 분석을 시작하세요.</p>
        <div className="upload-area">
          <div className="upload-box">
            <span className="upload-icon">📁</span>
            <p>파일을 드래그하거나 클릭하여 업로드하세요</p>
            <button className="upload-btn">파일 선택</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Diagnose;
